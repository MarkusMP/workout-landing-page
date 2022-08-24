import * as React from "react";
import About from "../components/About";
import Classes from "../components/Classes";
import Contact from "../components/Contact";
import Feature from "../components/Feature";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Schedule from "../components/Schedule";
import Seo from "../components/Seo";

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Feature />
      <About />
      <Classes />
      <Schedule />
      <Contact />
    </Layout>
  );
};

export const Head = () => <Seo />;

export default IndexPage;
