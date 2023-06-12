"use client";

import React, { useState } from "react";
import About from "./About";
import Button from "./Button";
import Contact from "./Contact";
import Projects from "./Projects";

const Body = () => {
  const [activeButton, setActiveButton] = useState("About");

  const clickedButtonHandler = (button) => {
    setActiveButton(button);
  };

  const buttons = ["About", "Contact", "Projects"];
  const components = [<About />, <Contact />, <Projects />];

  return (
    <div class="pb-24 max-w-4xl items-center justify-center">
      <div class="flex items-center pb-3 gap-3 flex-wrap">
        {buttons.map((button, index) => (
          <Button
            className={`border py-1.5 px-3 font-medium text-sm rounded-full border-black cursor-pointer ${
              activeButton === button ? "btn-active" : "hover:bg-gray-100"
            }`}
            onClick={() => clickedButtonHandler(button)}
            key={index}
          >
            {button}
          </Button>
        ))}
      </div>
      <hr class="mb-8 z-0 border-gray-300" />
      {components[buttons.indexOf(activeButton)]}
    </div>
  );
};

export default Body;
