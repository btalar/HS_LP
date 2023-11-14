import React, { FC } from "react";
import { PageProps } from "gatsby";
import { About, Layout, Header, Advantage, Navbar , Footer} from "../modules";
import { SubHeader } from "../modules/SubHeader";
import { Functions } from "../modules/Functions";
import {SectionImage} from "../modules/SectionImage";

const IndexPage: FC<PageProps> = () => {
  return (
    <Layout>
      <Navbar />
      <Header />
        <SubHeader />
      <SectionImage />

      <About />
      <Advantage />
      <Functions />
        <Footer/>
    </Layout>
  );
};

export default IndexPage;
