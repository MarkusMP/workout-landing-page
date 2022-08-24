import React from "react";
import { GatsbyBrowser } from "gatsby";
import Layout from "../components/Layout";
import "../styles/global.css";

const wrapRootElement: GatsbyBrowser["wrapRootElement"] = ({ element }) => {
  return <Layout>{element}</Layout>;
};

export default wrapRootElement;
