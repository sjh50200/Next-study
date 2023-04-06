import ghostApi from '.';

export async function getPages() {
  try {
    const result = await ghostApi.pages.browse({ limit: 'all' });
    return result;
  } catch (err) {
    console.log(err);
    return;
  }
}
