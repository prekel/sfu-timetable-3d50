import React, { FC, useState } from "react";
import "./App.css";

import { Page } from "./components/Page";

export const Basename = "/sfu-timetable-3d50";

export const App: FC = () => {
  const initQuickTargets = (): string[] => {
    let qts = localStorage.getItem("quick_targets");
    if (!qts) {
      localStorage.setItem(
        "quick_targets",
        JSON.stringify(["КИ18-16б", "КИ18-17/1б", "КИ18-17/2б"])
      );
    }
    return JSON.parse(localStorage.getItem("quick_targets")!);
  };

  const [quickTargets, setQuickTargets] = useState<string[]>(initQuickTargets);

  const toggleQuickTarget = (target: string, check: boolean) => {
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
    <Page quickTargets={quickTargets} onQuickTargetToggle={toggleQuickTarget} />
  );
};
