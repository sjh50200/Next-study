const customMediaQuery = (maxWidth: number): string =>
  `@media (max-width: ${maxWidth}px)`;

export const media = {
  custom: customMediaQuery,
  tablet: customMediaQuery(1280),
  mobile: customMediaQuery(750),
};

export const theme: any = {
  color: {
    mainColor: '#7661ff',
    secondaryColor: '#5bffd6',
  },
  boxShadow: {},
  custom: customMediaQuery,
  tablet: customMediaQuery(1280),
  mobile: customMediaQuery(750),
};
