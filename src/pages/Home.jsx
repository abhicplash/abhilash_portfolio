import React from "react";
import Layout from "../components/Layout/Layout";
import HomeBanner from "../components/HomeBanner/HomeBanner";
import AboutMe from "../components/about/AboutMe";

const Home = () => {
  return (
    <Layout>
      <section id="home">
        <HomeBanner />
      </section>

      <section id="about">
        <AboutMe />
      </section>
      

      <section id="project">
        <h1>Project</h1>
      </section>

      <section id="contact">
        <h1>Contact</h1>
      </section>
    </Layout>
  );
};

export default Home;
