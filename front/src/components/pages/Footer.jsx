import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { EmailButton } from "../ui";
import map from "../../assets/footerIcon/map.svg";
import DisplayAnimation from "../ui/DisplayAnimation";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setNav } from "../redux/slice/navbarSlice";

const items = [
  { name: "Product", path: "/product" },
  { name: "Industry", path: "/industry" },
  { name: "Blog", path: "/blog" },
  { name: "About", path: "/about" },
  { name: "Career", path: "/carrer" },
];

export function Footer() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { nav } = useSelector((state) => state.navbar);
  const currentYear = new Date().getFullYear();
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  useEffect(() => {
    navigate(nav);
  }, [nav]);

  return (
    <footer className="container text-white text-center flex flex-col justify-center items-center">
      <DisplayAnimation>
        <div className="constiner mx-auto px-4 py-8 flex max-md:flex-col">
          <div className="flex flex-col flex-[1.5]">
            <img src={logo} alt="onelogica" className="w-52" />
            <p className=" text-left py-4">
              The best tech solution agency <br /> {currentYear} according to
              ratings GoodFirms
            </p>

            <div className="relative flex max-w-48 p-5 ">
              <select
                value={selectedLanguage}
                onChange={handleLanguageChange}
                className="block w-full bg-slate-600 rounded border-gray-300 text-white py-4 px-8 pr-7 leading-tight outline-none"
              >
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
                <option value="de">Deutsch</option>
                <option value="zh">中文</option>
              </select>
            </div>
          </div>

          <div className="flex-1 flex max-md:justify-center max-md:items-center max-md:flex-col">
            <div className="flex-1 justify-center items-center flex max-md:my-5">
              <div className="flex-col flex-1 flex justify-center items-start space-y-1">
                {items.map((item, index) => (
                  <button
                    className="m-5 p-2 relative text-xl font-bold flex"
                    key={index}
                    onClick={() => dispatch(setNav(item.path))}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-5  flex-[1.5]">
              <EmailButton email={"sales@onelogica.com"} />
              <div className="gap-5 flex justify-center">
                <a
                  href="https://wa.me/919953793025"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform duration-300"
                >
                  wa.
                </a>
                <a
                  href="https://www.linkedin.com/company/onelogica/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform duration-300"
                >
                  li.
                </a>
                <a
                  href="https://www.youtube.com/channel/UCBo9n4HdMCJZ6VTWvPrTLqg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform duration-300"
                >
                  yt.
                </a>
              </div>

              <div>
                <a
                  href="https://maps.app.goo.gl/9K596qfaRQoJU4WSA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex space-x-1 group"
                >
                  <p className="text-wrap">
                    Hope Tower, 18th Floor, Unit No. TS-1926, Plot No. C-03,
                    Sec-04, Galaxy Blue Sapphire Mall, Greater Noida 201309
                  </p>
                  <img
                    src={map}
                    alt=""
                    className="w-7 h-7 opacity-0 group-hover:opacity-100 transition-opacity ease-in duration-75"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full my-5 border"></div>
        &copy; 2024 Onelogica. All rights reserved.
      </DisplayAnimation>
    </footer>
  );
}
