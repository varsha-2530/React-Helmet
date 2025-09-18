import React from "react";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>About | My Website</title>
        <meta name="description" content="Learn more about us on this page." />
      </Helmet>
      <h1>About Page</h1>
      <p>This is the about page.</p>
    </div>
  );
};

export default About;
