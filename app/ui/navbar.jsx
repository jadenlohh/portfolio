import React from "react";

const navbar = () => {
  return (
    <div className="fixed top-0 w-full">
      <nav className="flex justify-between items-center p-7">
        <span className="text-2xl font-medium">Jaden.</span>

        <div>
          <ul>
            <li className="inline px-4">
              <a href="" className="link link-underline link-underline-black p-0.5">Experience</a>
            </li>
            <li className="inline px-4">
              <a href="" className="link link-underline link-underline-black p-0.5">Projects</a>
            </li>
            <li className="inline px-4">
              <a href="" className="link link-underline link-underline-black p-0.5">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default navbar;
