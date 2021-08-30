import React, { FC, useState } from "react";
import "./App.css";

import { Page } from "./components/Page";

import { make as Foo } from "./components/Foo.gen";

export const Basename = "/sfu-timetable-3d50";

export const App: FC = () => {
  const initQuickTargets = (): string[] => {
    let qts = localStorage.getItem("quick_targets");
    if (!qts) {
      localStorage.setItem(
        "quick_targets",
        JSON.stringify(["КИ18-16б (1 подгруппа)", "КИ18-17/2б (1 подгруппа)"])
      );
    }
    return JSON.parse(localStorage.getItem("quick_targets")!);
  };

  const [quickTargets, setQuickTargets] = useState<string[]>(initQuickTargets);

  const changeQuickTarget = (target: string, check: boolean) => {
    target = decodeURIComponent(target);
    let qts = localStorage.getItem("quick_targets");
    if (!qts) {
      return;
    }
    let qt: string[] = JSON.parse(qts);
    if (check) {
      if (
        !qt
          .map((t) => t.toLocaleLowerCase())
          .includes(target.toLocaleLowerCase())
      ) {
        qt.push(target);
      }
    } else {
      qt = qt.filter((t) => t !== target);
    }
    localStorage.setItem("quick_targets", JSON.stringify(qt));
    setQuickTargets(qt);
  };

  return (
    <Page quickTargets={quickTargets} onQuickTargetChange={changeQuickTarget} />
  );
};
