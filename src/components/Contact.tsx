import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { MdPlace } from "@react-icons/all-files/md/MdPlace";

const Contact = () => {
  const data = useStaticQuery(graphql`
    {
      contentfulContact {
        emailAddress
        locationTitle
        title
        locationName
        locationLinkEmbedd {
          locationLinkEmbedd
        }
      }
    }
  `);

  return (
    <section
      id="contact"
      className="px-4 py-20 flex flex-col md:flex-row justify-center w-full"
    >
      <div style={{ maxWidth: "30rem" }} className="m-auto md:m-0 grow">
        <h2 className="text-4xl font-bold pt-2 pb-4">
          {data.contentfulContact.title}
        </h2>
        <form className="flex flex-col">
          <input
            className="border border-gray placeholder-p my-3 p-4"
            type="text"
            name="name"
            id="name"
            placeholder="Name"
          />
          <input
            type="email"
            className="border border-gray placeholder-p my-3 p-4"
            name="email"
            id="email"
            placeholder="Email"
          />
          <textarea
            name="message"
            className="border border-gray placeholder-p my-3 p-4"
            id="messsage"
            placeholder="Message"
          />
          <button className="w-full bg-dark text-white py-4 mt-2">
            Send Message
          </button>
        </form>
      </div>
      <div
        className="md:ml-24 pt-6 md:pt-0 grow m-auto md:m-0 "
        style={{ maxWidth: "28rem" }}
      >
        <div>
          <h2 className="text-4xl font-bold pt-2 pb-4">
            {data.contentfulContact.locationTitle}
          </h2>
          <p className="flex text-lg text-p pb-10">
            <MdPlace className="text-primary" size={28} />{" "}
            {data.contentfulContact.locationName}
          </p>
        </div>
        <div className="pt-8 border-t-2 border-gray">
          <iframe
            src={data.contentfulContact.locationLinkEmbedd.locationLinkEmbedd}
            style={{ maxWidth: "450px" }}
            className="w-full h-full"
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
