import React, { FC, useEffect } from "react";
import { PageProps } from "gatsby";
import {
  About,
  Layout,
  Header,
  Advantage,
  Navbar,
  Footer,
  Hero,
} from "../modules";

import { SectionImage } from "../modules/SectionImage";
import { Functional } from "../components/Functional/Functional";
import { Variant } from "../components/Variants/Variant";
import { Details } from "../components/Details/Details";
import { MobileApp } from "../components/MobileApp/MobileApp";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import Store from "../components/Store/Store";
import { Pricing } from "../components/Pricing/Pricing";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Script } from "../components/Script/Script";

const IndexPage: FC<PageProps> = () => {
  return (
    <Layout>
      <ToastContainer />
      <Navbar />
      <Header />
      <SectionImage />
      <About />
      <Advantage />
      <Functional />
      <HowItWorks />
      <Details />
      <Variant />
      <MobileApp />
      <Store />
      <Pricing />
      <Footer />C{" "}
    </Layout>
  );
};

export default IndexPage;
