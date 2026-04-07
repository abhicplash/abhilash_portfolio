import React from "react";
import Layout from "../components/Layout/Layout";
import HomeBanner from "../components/HomeBanner/HomeBanner";
import AboutMe from "../components/about/AboutMe";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";

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
        <Projects/>
      </section>

      <section id="contact">
        <Contact/>
      </section>
    </Layout>
  );
};

export default Home;
