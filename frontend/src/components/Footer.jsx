import React from "react";
import { socials } from "../constants";
import { phone, mail } from "../../public/assets";

const Footer = () => {
  return (
    <footer>
      <div className="container flex flex-col py-10 sm:flex-row justify-between items-center gap-10 max-sm:flex-col">
        <div className="flex items-center gap-5">
          <p className="text-n-5 text-1.5xl lg:block">
            © {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-5 justify-center lg:justify-end">
          <ul className="flex gap-5 flex-wrap">
            {socials.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                className="flex items-center justify-center w-10 h-10 bg-n-2 rounded-full transition-colors hover:bg-n-5"
              >
                <img
                  src={item.iconUrl}
                  width={16}
                  height={16}
                  alt={item.title}
                />
              </a>
            ))}
          </ul>
        </div>
      </div>

      <div className="container flex flex-col sm:flex-row justify-center items-center gap-10 max-sm:flex-col mt-5">
        <p
          className="text-n-7 text-1.5xl lg:block underline cursor-pointer text-center"
          onClick={() =>
            (window.location.href = "mailto:abcdefghi28672276@gmail.com")
          }
        >
          Contact Us
        </p>
      </div>

      <div className="container flex flex-col sm:flex-row justify-center items-center gap-10 max-sm:flex-col mt-5">
        <div className="flex flex-col items-center">
          <p className="text-n-5 text-1.5xl lg:block text-center">
            <img src={mail} width={16} height={16} alt="mail" />
            <a
              href="mailto:abcdefghi28672276@gmail.com"
              className="hover:underline"
            >
              abcdefghi28672276@gmail.com
            </a>
          </p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-n-5 text-1.5xl lg:block text-center">
            <img src={phone} width={16} height={16} alt="phone" />
            <a href="tel:+123456789" className="hover:underline">
              +123456789
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
