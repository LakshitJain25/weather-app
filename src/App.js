import React from "react";
import Home from "./pages/Home";
import Weather from "./pages/Weather";
import { useGlobalContext } from "./context";
function App() {
  const { show } = useGlobalContext()
  let weatherElement = null
  if (show) { weatherElement = <Weather /> }
  else { weatherElement = null }

  React.useEffect(() => {
    document.title = 'weather app'
}, []);

  return (
    <>
      <Home />
      {weatherElement}

    </>
  );
}

export default App;
