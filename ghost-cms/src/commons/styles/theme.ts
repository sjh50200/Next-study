const deviceSizes = {
  mobile: '700px',
  tablet: '900px',
};

const device = {
  mobile: `screen and (max-width: ${deviceSizes.mobile})`,
  tablet: `screen and (max-width: ${deviceSizes.tablet})`,
  desktop: `screen and (min-width: ${deviceSizes.tablet + 1})`,
};

const theme = {
  device,
};

export default theme;
