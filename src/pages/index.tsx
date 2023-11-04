import React from "react";
import { Button } from "@nextui-org/react";
import { PageProps } from "gatsby";
import Layout from "../components/Layout/Layout";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Button>Example button</Button>
    </Layout>
  );
};

export default IndexPage;
