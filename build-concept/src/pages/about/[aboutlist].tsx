import { ReactElement } from 'react';
import DefaultLayout from '@/components/templates/Default';

const AboutList = () => {
  return <div>aboutlisAboutList</div>;
};

AboutList.getLayout = (page: ReactElement) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default AboutList;
