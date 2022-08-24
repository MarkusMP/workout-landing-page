import { graphql, useStaticQuery } from "gatsby";
import React from "react";

const Classes = () => {
  const data = useStaticQuery(graphql`
    {
      contentfulClasses {
        subTitle
        title
        classes {
          description
          id
          price
          title
          trainer
          photo {
            url
          }
        }
      }
    }
  `);
  return (
    <section id="classes" className="py-20">
      <div className="text-center pt-2">
        <h6 className="text-gray text-2xl">
          {data.contentfulClasses.subTitle}
        </h6>
        <h2 className="text-4xl font-bold pt-2">
          {data.contentfulClasses.title}
        </h2>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {data.contentfulClasses.classes &&
            data.contentfulClasses.classes.map((classEl: any) => (
              <div
                className="drop-shadow-lg py-6 m-auto "
                style={{ maxWidth: "22rem" }}
                key={classEl.id}
              >
                <img src={classEl.photo.url} alt={classEl.title} />
                <div
                  className="bg-white py-6 px-6"
                  style={{ minHeight: "11rem" }}
                >
                  <div className="flex justify-between relative">
                    <div className="text">
                      <h3 className="text-3xl font-bold">{classEl.title}</h3>
                      <span>
                        <strong>Trained by</strong> - {classEl.trainer}
                      </span>
                    </div>
                    <div className="bg-primary flex items-center text-white p-4 right-0 rounded-full absolute ">
                      <span className="font-bold ">{classEl.price}</span>
                    </div>
                  </div>
                  <p className="pt-4">{classEl.description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;
