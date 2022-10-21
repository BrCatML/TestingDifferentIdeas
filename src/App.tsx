import { useCallback } from "react";
import { CatFact } from "./components/CatFact";
import { useCatFacts } from "./hooks/useCatFacts";
import { RecentFacts } from "./components/RecentFacts";
import { useLocalStorage } from "./hooks/useLocalStorage";
import "./styles.css";

import { Activity } from "./components/Activity";
import { useActivity } from "./hooks/useActivity";


export default function App() {
  const [open, setOpen] = useLocalStorage("catfacts:open-history", false);
  const { busy, fact, handleNext, recent } = useCatFacts();
  const { busyAct, activity, type, handleNextAct} = useActivity();

  const handleToggle = useCallback(
    (newOpen) => {
      setOpen(newOpen);
    },
    [setOpen]
  );

  return (
    <div className="App">
      <h1>Cat Facts</h1>
      <CatFact busy={busy} fact={fact} onClickNext={handleNext} />
      <RecentFacts onToggle={handleToggle} open={open} facts={recent} />
      <Activity busy={busyAct} type={type} activity={activity} onClickNext={handleNextAct} />
    </div>
  );
}
