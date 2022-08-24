import { graphql, Link, StaticQuery } from "gatsby";
import React from "react";
import { FaBars } from "@react-icons/all-files/fa/FaBars";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <StaticQuery
      query={graphql`
        {
          allContentfulHeader {
            edges {
              node {
                logo
                about
                home
                contact
                classes
                schedule
                twitterUrl
                instagramUrl
                facebookUrl
              }
            }
          }
        }
      `}
      render={(data) => (
        <nav className="fixed w-full top-0 flex flex-wrap items-center justify-between px-2 py-3 bg-dark z-10">
          <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
              <Link
                className="text-3xl font-bold leading-relaxed inline-block py-2 whitespace-nowrap text-white hover:text-primary transition-all"
                to="#hero"
              >
                {data.allContentfulHeader.edges[0].node.logo}
              </Link>
              <button
                className="text-white cursor-pointer text-xl leading-none px-3 py-1 bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <FaBars className="hover:text-primary transition-all text-2xl " />
              </button>
            </div>
            <div
              className={
                "lg:flex flex-grow items-center " +
                (navbarOpen ? " flex" : " hidden")
              }
              id="example-navbar-danger"
            >
              <ul className="flex flex-col lg:flex-row list-none m-auto lg:mr-0 ">
                <li className="nav-item">
                  <Link
                    className="px-3 py-2 flex  items-center text-base uppercase text-base leading-snug text-white hover:text-primary transition-all"
                    to="#hero"
                  >
                    <span className="lg:ml-2 m-auto">
                      {data.allContentfulHeader.edges[0].node.home}
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="px-3 py-2 flex items-center text-base uppercase text-base leading-snug text-white hover:text-primary transition-all"
                    to="#about"
                  >
                    <span className="lg:ml-2 m-auto ">
                      {data.allContentfulHeader.edges[0].node.about}
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="px-3 py-2 flex items-center text-base uppercase text-base leading-snug text-white hover:text-primary transition-all"
                    to="#classes"
                  >
                    <span className="lg:ml-2 m-auto">
                      {data.allContentfulHeader.edges[0].node.classes}
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="px-3 py-2 flex items-center text-base uppercase text-base leading-snug text-white hover:text-primary transition-all"
                    to="#schedule"
                  >
                    <span className="lg:ml-2 m-auto">
                      {data.allContentfulHeader.edges[0].node.schedule}
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="px-3 py-2 flex items-center text-base uppercase text-base leading-snug text-white hover:text-primary transition-all"
                    to="#contact"
                  >
                    <span className="lg:ml-2 m-auto">
                      {data.allContentfulHeader.edges[0].node.contact}
                    </span>
                  </Link>
                </li>
                <div className="flex flex-row list-none lg:ml-auto">
                  <li className="nav-item lg:ml-2 m-auto">
                    <a
                      href={data.allContentfulHeader.edges[0].node.facebookUrl}
                      className="px-1 py-2 flex items-center text-base uppercase text-base leading-snug text-white hover:text-primary transition-all"
                      target="_blank"
                    >
                      <FaFacebook />
                    </a>
                  </li>
                  <li className="nav-item lg:ml-2 m-auto">
                    <a
                      href={data.allContentfulHeader.edges[0].node.twitterUrl}
                      className="px-1 py-2 flex items-center text-base uppercase text-base leading-snug text-white hover:text-primary transition-all"
                      target="_blank"
                    >
                      <FaTwitter />
                    </a>
                  </li>
                  <li className="nav-item lg:ml-2 m-auto">
                    <a
                      href={data.allContentfulHeader.edges[0].node.instagramUrl}
                      className="px-1 py-2 flex items-center text-base uppercase text-base leading-snug text-white hover:text-primary transition-all"
                      target="_blank"
                    >
                      <FaInstagram />
                    </a>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </nav>
      )}
    ></StaticQuery>
  );
};

export default Header;
