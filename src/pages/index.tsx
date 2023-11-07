import React, { FC } from "react";
import { PageProps } from "gatsby";
import { About, Layout, Header, Advantage, Navbar } from "../modules";
import { SubHeader } from "../modules/SubHeader";
import { Functions } from "../modules/Functions";

const IndexPage: FC<PageProps> = () => {
  return (
    <Layout>
      <Navbar />
      <Header />
      <SubHeader />
      <About />
      <Advantage />
      <Functions />
    </Layout>
  );
};

export default IndexPage;
