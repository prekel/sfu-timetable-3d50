import React, { useEffect, useState } from "react";

import { Form } from "react-bootstrap";

export const Autocomplete: React.FunctionComponent = () => {
  const [startWith, setStartWith] = useState("");

  return (
    <>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            placeholder="Enter t"
            onChange={(qwe) => setStartWith(qwe.target.value)}
          />
          <Form.Text>safs</Form.Text>
        </Form.Group>
      </Form>
      <AutocompleteResult startWith={startWith} />
    </>
  );
};

const AutocompleteResult: React.FunctionComponent<{ startWith: string }> = ({
  startWith,
}) => {
  const [error, setError] = useState<Error | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState<string[]>([]);

  useEffect(() => {
    setIsLoaded(false);
    fetch(
      "https://edu.sfu-kras.ru/timetable/groups/autocomplete/" +
        encodeURIComponent(startWith),
      {
        mode: "no-cors",
      }
    )
      .then(async (res) => {
        console.log(await res.text());
        return res.json();
      })
      .then(
        (result) => {
          setIsLoaded(true);
          console.log(result);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          console.log(error);
          setError(error);
        }
      );
  }, [startWith]);

  return <div>{items[0]}</div>;

  //   if (error) {
  //     return <div>Error: {error.message}</div>;
  //   } else if (!isLoaded) {
  //     return <div>Loading...</div>;
  //   } else {
  //     return <div>{items[0]}</div>;
  //   }
};
