import React from 'react';

interface Props {
  url: string;
  alt?: string;
}

const Image: React.FC<Props> = (props) => {
  const { url, alt } = props;
  return <div>{url}</div>;
};

export default Image;
