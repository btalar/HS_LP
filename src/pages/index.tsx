import React, { FC } from "react";
import { PageProps } from "gatsby";
import {About, Layout, Header, Advantage, Navbar, Footer} from "../modules";

const IndexPage: FC<PageProps> = () => {
  return (
    <Layout>
        <Navbar/>
        <Header/>
        <About/>
        <Advantage/>
        <Footer/>
    </Layout>
  );
};

export default IndexPage;
