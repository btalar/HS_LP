import React, { FC } from "react";
import { PageProps } from "gatsby";
import { About, Layout, Header, Advantage, Navbar } from "../modules";
import { SubHeader } from "../modules/SubHeader";

const IndexPage: FC<PageProps> = () => {
  return (
    <Layout>
      <Navbar />
      <Header />
      <SubHeader />
      <About />
      <Advantage />
    </Layout>
  );
};

export default IndexPage;
