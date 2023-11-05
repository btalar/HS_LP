import React, { FC } from "react";
import { PageProps } from "gatsby";
import Layout from "../components/Layout/Layout";
import Header from "../components/Header/Header";
import About from "../components/About/About";
import SectionWrapper from "../components/SectionWrapper/SectionWrapper";

const IndexPage: FC<PageProps> = () => {
  return (
    <Layout>
      <Header />
        <SectionWrapper>
            <About/>
        </SectionWrapper>
    </Layout>
  );
};

export default IndexPage;
