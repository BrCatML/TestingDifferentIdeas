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
      {/* <a href={'/cameras'}>sdsdsdsd</a> */}
    </div>
    
  );
}


/*
Любая маршрутизация начинается с роутера. Для веб-проектов react-router-dom предоставляет <BrowserRouter> и <HashRouter>. 
Основное отличие между ними состоит в способе хранения URL и взаимодействия с сервером.

 -  <BrowserRouter> использует обычные URL. В этом случае URL выглядят как обычно, но требуется определенная настройка сервера. 
    В частности, сервер должен обслуживать все страницы, используемые на клиенте. Create React App поддерживает это из коробки 
    в режиме разработки и содержит инструкции для правильной настройки сервера.

 -  <HashRouter> хранить текущую локацию в хэш-части URL (после символа "#"), поэтому URL выглядит примерно 
    так: http://example.com/#/your/page. Поскольку хэш не отправляется серверу, его специальная настройка не требуется.

    Для использования роутера необходимо обернуть в него компонент верхнего уровня.

*/
