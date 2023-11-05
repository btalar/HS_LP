import React, { FC } from "react";
import { PageProps } from "gatsby";
import {About, Layout, Header, Advantage, Navbar} from "../modules";

const IndexPage: FC<PageProps> = () => {
  return (
    <Layout>
        <Navbar/>
        <Header/>
        <About/>
        <Advantage/>
    </Layout>
  );
};

export default IndexPage;
