import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";

const About = () => {
  const data = useStaticQuery(graphql`
    {
      contentfulAbout {
        title
        id
        description
        trainers {
          description
          instagram
          twitter
          facebook
          name
          id
          photo {
            url
          }
        }
      }
    }
  `);

  return (
    <section
      id="about"
      className="px-4 py-20 bg-aboutBg lg:flex justify-center items-center"
    >
      <div style={{ maxWidth: "26rem" }} className="pt-2 md:m-auto lg:m-1">
        <h2 className="text-4xl font-bold pb-6">
          {data.contentfulAbout.title}
        </h2>
        <p className="text-p text-lg pb-8">
          {data.contentfulAbout.description}
        </p>
      </div>
      <div className="md:flex md:justify-center">
        {data.contentfulAbout.trainers &&
          data.contentfulAbout.trainers.map((trainer: any) => (
            <div
              className="drop-shadow-lg py-6 md:px-6 md:w-80"
              key={trainer.id}
            >
              <img src={trainer.photo.url} alt={trainer.name} />
              <div className="flex justify-between py-6 px-6 bg-white h-28">
                <div>
                  <h3 className="text-3xl font-bold">{trainer.name}</h3>
                  <p>{trainer.description}</p>
                </div>
                <div>
                  {trainer.twitter && (
                    <a
                      href={trainer.twitter}
                      className="px-1 py-1 flex items-center text-base uppercase text-base leading-snug text-p hover:text-primary transition-all"
                      target="_blank"
                    >
                      <FaTwitter />
                    </a>
                  )}
                  {trainer.instagram && (
                    <a
                      href={trainer.instagram}
                      className="px-1 py-1 flex items-center text-base uppercase text-base leading-snug text-p hover:text-primary transition-all"
                      target="_blank"
                    >
                      <FaInstagram />
                    </a>
                  )}
                  {trainer.facebook && (
                    <a
                      href={trainer.facebook}
                      className="px-1 py-1 flex items-center text-base uppercase text-base leading-snug text-p hover:text-primary transition-all"
                      target="_blank"
                    >
                      <FaFacebook />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default About;
