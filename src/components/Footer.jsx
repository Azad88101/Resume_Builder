import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="flex space-x-4 items-center justify-center py-7 font-bold">
        <a
          className="hover:underline"
          href="https://github.com/Azad88101"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>

        <a
          className="hover:underline"
          href="https://www.linkedin.com/in/azad88101/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>

        <a
          className="hover:underline"
          href="https://github.com/azad/resume-Builder"
          target="_blank"
          rel="noopener noreferrer"
        >
          Repo
        </a>
      </div>
    </div>
  );
};

export default Footer;
