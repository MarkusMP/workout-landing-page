import { graphql, useStaticQuery } from "gatsby";
import React, { useState } from "react";
import Modal from "./Modal";

const Feature = () => {
  const [showModal, setShowModal] = React.useState(false);

  const data = useStaticQuery(graphql`
    {
      contentfulFeature {
        description
        title
        openTitle
        buttonText
        open {
          closed
          day
          time
          id
        }
      }
    }
  `);

  const setModal = (boolean: boolean) => {
    setShowModal(boolean);
  };

  return (
    <section id="feature" className="bg-dark text-white pt-6 flex flex-col ">
      <div className="py-20 flex justify-center flex-col md:flex-row  m-auto">
        <div className="px-12 " style={{ maxWidth: "34rem" }}>
          <h2 className="text-4xl font-bold pb-6">
            {data.contentfulFeature.title}
          </h2>
          <p className="text-xl pb-8 text-2xl">
            {data.contentfulFeature.description}
          </p>
          <button
            className="rounded uppercase bg-primary w-full py-4 hover:bg-white hover:text-primary transition-all"
            onClick={() => setShowModal(true)}
          >
            {data.contentfulFeature.buttonText}
          </button>
        </div>
        <div className="px-12 md:border-link border-l-2 pt-6 md:pt-0 border-transparent w-fit ">
          <h2 className="text-4xl font-bold pb-6">
            {data.contentfulFeature.openTitle}
          </h2>
          <div className="flex flex-col">
            {data.contentfulFeature.open &&
              data.contentfulFeature.open.map((time: any) =>
                time.closed ? (
                  <strong className="pb-4 pr-4" key={time.id}>
                    {time.day} : Closed
                  </strong>
                ) : (
                  <div key={time.id} className="pb-2 pr-4">
                    <strong>{time.day}</strong>
                    <p className="text-p">{time.time}</p>
                  </div>
                )
              )}
          </div>
        </div>
      </div>
      <Modal setShowModal={setModal} showModal={showModal} />
    </section>
  );
};

export default Feature;
