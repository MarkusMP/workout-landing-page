import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import "../styles/global.css";

interface IProps {
  title?: string;
  description?: string;
  pathname?: string;
  children?: React.PropsWithChildren;
}

const Seo = ({ title, description, pathname, children }: IProps) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          url
          author
          keywords
        }
      }
    }
  `);

  const {
    title: defaultTitle,
    description: defaultDescription,
    url: defaultUrl,
    author: defaultAuthor,
    keywords: defaultKeywords,
  } = data.site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
  };
  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={defaultKeywords} />
      <meta name="author" content={defaultAuthor} />
      <meta name="url" content={defaultUrl} />
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>💪</text></svg>"
      />
      {children}
    </>
  );
};

export default Seo;
