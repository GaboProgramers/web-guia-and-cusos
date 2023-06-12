/* eslint-disable react/prop-types */
import './style/headerNav.css';
import { HiMenuAlt3 } from 'react-icons/hi';
import {
  BsFillSunFill,
  BsFillMoonStarsFill,
  BsYoutube,
  BsGithub,
  BsTelegram,
  BsTwitter,
  BsInstagram,
  BsFacebook,
  BsTiktok,
} from 'react-icons/bs';

import { BiLinkAlt } from 'react-icons/bi';
import { CiMenuKebab } from 'react-icons/ci';
import { MdOutlineClose } from 'react-icons/md';
import { useState } from 'react';

const HeaderNav = ({ darkMode, setDarkMode }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [menuBurbuja, setMenuBurbuja] = useState(false);

  const darkModeSwicth = () => {
    setDarkMode(!darkMode);
  };

  const openMenuSlice = () => {
    setOpenMenu(!openMenu);
  };

  const openMenuBurbuja = () => {
    setMenuBurbuja(!menuBurbuja);
  };

  return (
    <header className="header">
      <div className="navBar">
        <div className="container">
          <div className="navBar-title">
            <a href="" className="title">
              {!darkMode ? (
                <img
                  src="/17_logo_icon_white.svg"
                  alt="logo"
                  className="logo"
                />
              ) : (
                <img
                  src="/15_logo_icon_black.svg"
                  alt="logo"
                  className="logo"
                />
              )}
              Guia gabodev
            </a>
          </div>

          <div className={`content ${openMenu ? 'active' : ''}`}>
            <nav className={`navBar-menu ${darkMode ? 'dark' : ''}`}>
              <a href="" className="navBar__Menu-link">
                ⭐ Curso Boostrap 5{' '}
                <BiLinkAlt className={`icon-link ${darkMode ? 'dark' : ''}`} />
              </a>
              <a href="" className="navBar__Menu-link">
                ⭐ Curso React.js{' '}
                <BiLinkAlt className={`icon-link ${darkMode ? 'dark' : ''}`} />
              </a>
              <a href="" className="navBar__Menu-link">
                ⭐ Curso Vue.js{' '}
                <BiLinkAlt className={`icon-link ${darkMode ? 'dark' : ''}`} />
              </a>
            </nav>

            <span className="line"></span>

            <div className="navBar-appearance">
              <button className="switch switch-appearance">
                <span className="check">
                  <span className="icon">
                    <BsFillSunFill />
                    <BsFillMoonStarsFill />
                  </span>
                </span>
              </button>
            </div>

            <span className="line"></span>

            <div className="navBar-social-links">
              <a
                href="https://www.youtube.com/channel/UCSoBLb0iScmF817-pj70j9g"
                rel="noreferrer"
                target="_blank"
                className="social-link"
              >
                <BsYoutube />
              </a>
              <a href="" className="social-link">
                <BsGithub />
              </a>
              <a href="" className="social-link">
                <BsTelegram />
              </a>
              <a
                href="https://9qr.de/622KQV"
                rel="noreferrer"
                target="_blank"
                className="social-link"
              >
                <BsTwitter />
              </a>
              <a href="" className="social-link">
                <BsInstagram />
              </a>
              <a href="" className="social-link">
                <BsFacebook />
              </a>
              <a href="" className="social-link">
                <BsTiktok />
              </a>
            </div>

            <div className="navBar-extra">
              <button
                className={`extra-buttom ${darkMode ? 'dark' : ''}`}
                onClick={openMenuBurbuja}
              >
                <CiMenuKebab />
              </button>

              <div className={`menu-extra ${menuBurbuja ? 'open' : ''}`}>
                <div className="menu">
                  <div className={`group ${darkMode ? 'dark' : ''}`}>
                    <div className="item appearance">
                      <p className="label">Appearance</p>
                      <div className="appearance-action">
                        <button className="switch switch-appearance">
                          <span className="check">
                            <span
                              className={`icon ${darkMode ? 'dark' : ''}`}
                              onClick={darkModeSwicth}
                            >
                              <BsFillSunFill className="sun" />
                              <BsFillMoonStarsFill className="moon" />
                            </span>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="group">
                    <div className="item social-link">
                      <div
                        className={`social-link-list ${darkMode ? 'dark' : ''}`}
                      >
                        <a
                          href="https://9qr.de/J9E6Lr"
                          rel="noreferrer"
                          target="_blank"
                          className="social-links"
                          title="Youtube"
                        >
                          <BsYoutube />
                        </a>
                        <a href="" className="social-links">
                          <BsGithub />
                        </a>
                        <a href="" className="social-links">
                          <BsTelegram />
                        </a>
                        <a
                          href="https://9qr.de/622KQV"
                          rel="noreferrer"
                          target="_blank"
                          className="social-links"
                        >
                          <BsTwitter />
                        </a>
                        <a href="" className="social-links">
                          <BsInstagram />
                        </a>
                        <a href="" className="social-links">
                          <BsFacebook />
                        </a>
                        <a href="" className="social-links">
                          <BsTiktok />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className={`navBarHamburguer ${darkMode ? 'dark' : ''}`}>
            <span className="container-hamburguer" onClick={openMenuSlice}>
              {!openMenu ? (
                <HiMenuAlt3 className="icon-menu-hamburguer" />
              ) : (
                <MdOutlineClose className="icon-close" />
              )}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default HeaderNav;
