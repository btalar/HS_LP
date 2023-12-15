import React, { FC } from "react";
import { PageProps } from "gatsby";
import { About, Layout, Header, Advantage, Navbar, Footer } from "../modules";

import { SectionImage } from "../modules/SectionImage";
import { Functional } from "../components/Functional/Functional";
import { Variant } from "../components/Variants/Variant";
import { Details } from "../components/Details/Details";
import { MobileApp } from "../components/MobileApp/MobileApp";

const IndexPage: FC<PageProps> = () => {
  return (
    <Layout>
      <Navbar />
      <Header />
      <SectionImage />
      <About />
      <Advantage />
      <Functional />
      <Details />
      <Variant />
      <MobileApp />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
