import React from "react";
import { graphql, Link, StaticQuery } from "gatsby";

const Hero = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          allContentfulHero {
            edges {
              node {
                description
                title
                buttonText
                getStarted
                image {
                  url
                }
              }
            }
          }
        }
      `}
      render={(data) => (
        <div
          id="hero"
          className={` flex justify-center items-center`}
          style={{
            background: `url(${data.allContentfulHero.edges[0].node.image.url}) no-repeat center center fixed`,
            backgroundSize: "cover",
          }}
        >
          <div className="flex flex-col justify-center items-center h-screen w-full bg-dark bg-opacity-80 z-0">
            <div style={{ maxWidth: "36rem" }} className="z-10">
              <p className=" text-center text-lg sm:text-2xl text-gray z-10">
                {data.allContentfulHero.edges[0].node.description}
              </p>
              <h1 className="text-center mt-7 text-4xl sm:text-5xl text-white font-bold drop-shadow-lg z-10 uppercase">
                {data.allContentfulHero.edges[0].node.title}
              </h1>
              <div className="text-center">
                <Link to="#getstarted">
                  <button className="text-white mx-3 hover:text-primary transition-all uppercase mt-7">
                    {data.allContentfulHero.edges[0].node.getStarted}
                  </button>
                </Link>
                <Link to="#about">
                  <button className="mx-3 text-primary border border-primary px-6 py-4 hover:bg-white mt-7 hover:border-transparent uppercase transition-all">
                    {data.allContentfulHero.edges[0].node.buttonText}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    />
  );
};

export default Hero;
