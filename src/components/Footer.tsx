import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";
import { FaPhoneAlt } from "@react-icons/all-files/fa/FaPhoneAlt";

const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      contentfulFooter {
        email
        number
        copyrightMessage
      }
    }
  `);

  return (
    <footer className="border-t sm:flex text-center justify-around py-8 items-center text-gray border-gray">
      <div>
        <p>{data.contentfulFooter.copyrightMessage}</p>
      </div>
      <div className="flex flex-col ">
        {data.contentfulFooter.email && (
          <p className="flex items-center justify-center pt-2">
            <AiOutlineMail className="text-primary" size={18} />
            <span className="pl-2">{data.contentfulFooter.email}</span>
          </p>
        )}
        {data.contentfulFooter.number && (
          <p className="flex items-center flex-start sm:justify-start justify-center pt-2">
            <FaPhoneAlt className="text-primary" size={18} />
            <span className="pl-2">{data.contentfulFooter.number}</span>
          </p>
        )}
      </div>
    </footer>
  );
};

export default Footer;
