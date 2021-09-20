import React, { useState } from "react";
import Frame from "./components/frame.js";

function App() {
  const [themes, setTheme] = useState({
    value: 1,
    theme: "dark",
    current: "Light Theme",
    toggle: "",
  });

  const currentTheme = (value) => {
    if (themes.value === value) {
      setTheme({
        ...themes,
        value: 0,
        theme: "",
        current: "Dark Mode",
        toggle: "translate-x-[175%]",
      });
    }
    if (themes.value !== value) {
      setTheme({
        ...themes,
        value: 1,
        theme: "dark",
        current: "Light Theme",
        toggle: "",
      });
    }
  };
  return (
    <div className={themes.theme}>
      <div className="lg:h-[50rem] xl:h-screen h-[150rem] md:h-[80rem] dark:bg-[#1c2129] bg-white">
        <div className="h-[15rem] w-screen dark:bg-[#20232e] rounded-b-3xl bg-[#f8f8ff]"></div>
        <Frame currentTheme={currentTheme} themes={themes} />
      </div>
    </div>
  );
}

export default App;
