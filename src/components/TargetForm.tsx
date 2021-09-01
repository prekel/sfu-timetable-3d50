import { useState, useEffect, FC } from "react";
import { Redirect, useRouteMatch } from "react-router-dom";

import { make as TargetAutocomplete }  from "./TargetAutocomplete.gen"

export const TargetForm: FC = () => {
  const match = useRouteMatch<{ target: string }>("/:target");
  const [currentTarget, setCurrentTarget] = useState(match ? match?.params.target : "");
  const [isNeedRedirect, setIsNeedRedirect] = useState(false);

  useEffect(() => {
    setIsNeedRedirect(false);
    return () => {};
  }, [match]);

  return (
    <>
      {isNeedRedirect ? (
        <Redirect push to={"/" + encodeURIComponent(currentTarget)} />
      ) : (
        <></>
      )}
      <TargetAutocomplete onSubmit={(newTarget) => {
          setIsNeedRedirect(true);
          setCurrentTarget(newTarget);
        }}
      />
    </>
  );
};
