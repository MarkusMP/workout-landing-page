import { graphql, useStaticQuery } from "gatsby";
import React from "react";

const Schedule = () => {
  const data = useStaticQuery(graphql`
    {
      contentfulSchedule {
        subTitle
        title
        noScheduleTitle
        schedules {
          day
          id
          time
          title
        }
      }
    }
  `);

  const monday = data.contentfulSchedule.schedules.filter(
    (el: any) => el.day.toLowerCase() === "monday"
  );
  const tuesday = data.contentfulSchedule.schedules.filter(
    (el: any) => el.day.toLowerCase() === "tuesday"
  );
  const wednesday = data.contentfulSchedule.schedules.filter(
    (el: any) => el.day.toLowerCase() === "wednesday"
  );
  const thursday = data.contentfulSchedule.schedules.filter(
    (el: any) => el.day.toLowerCase() === "thursday"
  );
  const friday = data.contentfulSchedule.schedules.filter(
    (el: any) => el.day.toLowerCase() === "friday"
  );
  const saturday = data.contentfulSchedule.schedules.filter(
    (el: any) => el.day.toLowerCase() === "saturday"
  );
  const sunday = data.contentfulSchedule.schedules.filter(
    (el: any) => el.day.toLowerCase() === "sunday"
  );

  return (
    <section id="schedule" className="bg-dark text-white py-20">
      <div className="text-center pt-2">
        <h6 className="text-2xl text-gray">
          {data.contentfulSchedule.subTitle}
        </h6>
        <h2 className="text-4xl pt-2 text-bold">
          {data.contentfulSchedule.title}
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 container m-auto ">
        <div className="w-full pt-6 mx-auto" style={{ maxWidth: "10rem" }}>
          <h2 className="text-2xl font-bold pb-2">Monday</h2>
          {monday.length >= 1 ? (
            monday.map((el: any) => (
              <div className="border-t pr-2 pt-2 pb-2" key={el.id}>
                <p className="text-lg">{el.title}</p>
                <p className="text-gray">{el.time}</p>
              </div>
            ))
          ) : (
            <div className="border-t pr-2 pt-2 pb-2">
              <p className="text-gray">
                {data.contentfulSchedule.noScheduleTitle}
              </p>
            </div>
          )}
        </div>
        <div className="w-full pt-6 mx-auto" style={{ maxWidth: "10rem" }}>
          <h2 className="text-2xl font-bold pb-2">Tuesday</h2>
          {tuesday.length >= 1 ? (
            tuesday.map((el: any) => (
              <div className="border-t pr-2 pt-2 pb-2" key={el.id}>
                <p className="text-lg">{el.title}</p>
                <p className="text-gray">{el.time}</p>
              </div>
            ))
          ) : (
            <div className="border-t pr-2 pt-2 pb-2">
              <p className="text-gray">
                {data.contentfulSchedule.noScheduleTitle}
              </p>
            </div>
          )}
        </div>
        <div className="w-full pt-6 mx-auto" style={{ maxWidth: "10rem" }}>
          <h2 className="text-2xl font-bold pb-2">Wednesday</h2>
          {wednesday.length >= 1 ? (
            wednesday.map((el: any) => (
              <div className="border-t pr-2 pt-2 pb-2" key={el.id}>
                <p className="text-lg">{el.title}</p>
                <p className="text-gray">{el.time}</p>
              </div>
            ))
          ) : (
            <div className="border-t pr-2 pt-2 pb-2">
              <p className="text-gray">
                {data.contentfulSchedule.noScheduleTitle}
              </p>
            </div>
          )}
        </div>
        <div className="w-full pt-6 mx-auto" style={{ maxWidth: "10rem" }}>
          <h2 className="text-2xl font-bold pb-2">Thursday</h2>
          {thursday.length >= 1 ? (
            thursday.map((el: any) => (
              <div className="border-t pr-2 pt-2 pb-2" key={el.id}>
                <p className="text-lg">{el.title}</p>
                <p className="text-gray">{el.time}</p>
              </div>
            ))
          ) : (
            <div className="border-t pr-2 pt-2 pb-2">
              <p className="text-gray">
                {data.contentfulSchedule.noScheduleTitle}
              </p>
            </div>
          )}
        </div>
        <div className="w-full pt-6 mx-auto" style={{ maxWidth: "10rem" }}>
          <h2 className="text-2xl font-bold pb-2">Friday</h2>
          {friday.length >= 1 ? (
            friday.map((el: any) => (
              <div className="border-t pr-2 pt-2 pb-2" key={el.id}>
                <p className="text-lg">{el.title}</p>
                <p className="text-gray">{el.time}</p>
              </div>
            ))
          ) : (
            <div className="border-t pr-2 pt-2 pb-2">
              <p className="text-gray">
                {data.contentfulSchedule.noScheduleTitle}
              </p>
            </div>
          )}
        </div>
        <div className="w-full pt-6 mx-auto" style={{ maxWidth: "10rem" }}>
          <h2 className="text-2xl font-bold pb-2">Saturday</h2>
          {saturday.length >= 1 ? (
            saturday.map((el: any) => (
              <div className="border-t pr-2 pt-2 pb-2" key={el.id}>
                <p className="text-lg">{el.title}</p>
                <p className="text-gray">{el.time}</p>
              </div>
            ))
          ) : (
            <div className="border-t pr-2 pt-2 pb-2">
              <p className="text-gray">
                {data.contentfulSchedule.noScheduleTitle}
              </p>
            </div>
          )}
        </div>
        <div className="w-full pt-6 mx-auto" style={{ maxWidth: "10rem" }}>
          <h2 className="text-2xl font-bold pb-2">Sunday</h2>
          {sunday.length >= 1 ? (
            sunday.map((el: any) => (
              <div className="border-t pr-2 pt-2 pb-2" key={el.id}>
                <p className="text-lg">{el.title}</p>
                <p className="text-gray">{el.time}</p>
              </div>
            ))
          ) : (
            <div className="border-t pr-2 pt-2 pb-2">
              <p className="text-gray">
                {data.contentfulSchedule.noScheduleTitle}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
