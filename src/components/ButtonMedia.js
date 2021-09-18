import React from "react";
import {
  FaInstagram,
  FaGithubSquare,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

export const ButtonMedia = () => {
  return (
    <div className="social-media">
      <a href="https://www.linkedin.com/in/nestorvave/" target="_blank">
        <FaLinkedin fill="#0e76a8" />
      </a>
      <a href="https://www.instagram.com/nestorvave/" target="_blank">
        <FaInstagram fill="#ef202f" />
      </a>
      <a href="https://github.com/nestorvave" target="_blank">
        <FaGithubSquare fill="black" />
      </a>
      <a  target="_blank">
        <FaTwitter fill="#00acee" />
      </a>
    </div>
  );
};
