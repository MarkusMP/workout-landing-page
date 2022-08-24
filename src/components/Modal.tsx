import { graphql, useStaticQuery } from "gatsby";
import React from "react";

interface IProps {
  showModal: boolean;
  setShowModal: any;
}

export default function Modal({ setShowModal, showModal }: IProps) {
  const data = useStaticQuery(graphql`
    {
      contentfulModal {
        title
      }
    }
  `);

  return (
    <>
      {showModal ? (
        <>
          <div className="overflow-x-hidden pt-32 overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none px-4">
            <div className="relative w-auto my-6 mx-auto px-4 ">
              <div className="border-0 max-w-xl rounded-lg shadow-lg mx-auto flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-dark rounded-t">
                  <h3 className=" sm:text-3xl md:text-3xl font-semibold text-dark">
                    {data.contentfulModal.title}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-dark  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-dark h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>

                <div className="relative px-6 pt-6 flex-auto">
                  <form className="my-4 text-dark text-lg leading-relaxed flex flex-col w-full">
                    <input
                      type="text"
                      name="name"
                      className="border border-gray placeholder-p my-3 p-4"
                      id="name"
                      placeholder="Name"
                    />
                    <input
                      type="email"
                      name="email"
                      className="border border-gray placeholder-p my-3 p-4"
                      id="email"
                      placeholder="Email"
                    />
                    <input
                      type="text"
                      name="number"
                      className="border border-gray placeholder-p my-3 p-4"
                      id="number"
                      placeholder="Number"
                    />
                    <textarea
                      name="message"
                      className="border border-gray placeholder-p my-3 p-4"
                      id="messsage"
                      placeholder="Additional Message"
                    />
                  </form>
                </div>

                <div className="flex items-center justify-end p-6 rounded-b">
                  <button
                    className="text-primary background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="text-dark text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
