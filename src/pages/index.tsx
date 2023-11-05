import { PageProps } from 'gatsby';
import React, { FC } from 'react';

import About from '../components/About/About';
import Header from '../components/Header/Header';
import Layout from '../components/Layout/Layout';

const IndexPage: FC<PageProps> = () => (
  <Layout>
    <Header />
    <About />
  </Layout>
);

export default IndexPage;
