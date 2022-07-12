import React from 'react';

interface Props {
  url: string;
  children: React.ReactNode | string;
}

const LinkedEl: React.FC<Props> = (props) => {
  const { url, children } = props;
  return <a href={url}>{children}</a>;
};

export default LinkedEl;
