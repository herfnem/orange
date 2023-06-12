"use client";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { SocialIcon } from "react-social-icons";

const Header = () => {
  const [text] = useTypewriter({
    words: ["Meow!", "Feed me Hooman", "God of the World", '"Fuck You"'],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="container relative py-8">
      <div class="flex relative lg:flex-row items-center text-center lg:text-left">
        <div class="flex-shrink-0 aspect-square rounded-full relative overflow-hidden w-28 h-28 bg-gray-200">
          <img
            className="anaimate animate-pulse"
            loading="lazy"
            alt="cat"
            src="https://images.unsplash.com/photo-1611915387288-fd8d2f5f928b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
          />
        </div>
        <div class="mt-4 lg:mt-0 lg:ml-4">
          <h1 class="text-3xl lg:text-4xl leading-tight font-bold tracking-tight">
            Mr. Cat
          </h1>
          <div class="mt-1">
            <h2 class="text-gray-600 font-semibold text-xl">
              <span className="mr-3 ">
                {text}
                <Cursor cursorColor="green" />
              </span>
            </h2>
          </div>
          <div class="mt-2">
            <div class="inline-flex">
              <div>
                <SocialIcon
                  url="https://linkedin.com/"
                  fgColor="#006097"
                  bgColor="transparent"
                />
                <SocialIcon
                  url="https://github.com/"
                  fgColor="black"
                  bgColor="transparent"
                />
                <SocialIcon
                  url="https://twitter.com/"
                  fgColor="#1d9bf0"
                  bgColor="transparent"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
