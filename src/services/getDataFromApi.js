export const getDataFromApi = async () => {
  const url = 'https://gemmagarcias.github.io/schibsted-frontend/docs/data.json';
  try {
    let res = await fetch(url);
    let data = await res.json();
    return data;
  }
  catch (e) {
    console.log('There is a problem with fetch API', e);
  }
};
