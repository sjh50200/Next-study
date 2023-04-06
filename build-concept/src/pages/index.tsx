import type { ReactElement } from 'react';
import Layout from '../components/layout';
import type { NextPageWithLayout } from '../pages/_app';

const Page: NextPageWithLayout = () => {
  return <p>Main Page</p>;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
