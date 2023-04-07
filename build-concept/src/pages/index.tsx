import type { ReactElement } from 'react';
import { DefaultLayout } from '@/components/templates/Default';
import type { NextPageWithLayout } from '../pages/_app';

const Page: NextPageWithLayout = () => {
  return <p>Main Page</p>;
};

Page.getLayout = (page: ReactElement) => {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default Page;
