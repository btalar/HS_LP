import React, { FC } from "react";
import { Button } from "@nextui-org/react";
import { PageProps } from "gatsby";
import Layout from "../components/Layout/Layout";
import Header from "../components/Header/Header";

const IndexPage: FC<PageProps> = () => {
  return (
    <Layout>
      <Header />
    </Layout>
  );
};

export default IndexPage;
