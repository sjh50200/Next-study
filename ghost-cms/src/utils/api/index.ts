/* eslint-disable @typescript-eslint/no-non-null-assertion */
import GhostContentAPI from '@tryghost/content-api';

const ghostApi = new GhostContentAPI({
  url: process.env.GHOST_LOCAL_URL!,
  key: process.env.GHOST_LOCAL_KEY!,
  version: 'v5.0',
});

export default ghostApi;
