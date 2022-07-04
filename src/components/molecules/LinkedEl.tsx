import React from 'react';

interface Props {
  url: string;
  children: React.ReactNode | string;
}

const Link: React.FC<Props> = (props) => {
  const { url, children } = props;
  return <a href={url}>{children}</a>;
};

export default Link;
