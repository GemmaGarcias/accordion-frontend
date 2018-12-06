export const getDataFromApi = async () => {
  const url = '../../docs/data.json';
  try {
    let res = await fetch(url);
    let data = await res.json();
    return data;
  }
  catch (e) {
    console.log('There is a problem with fetch API', e);
  }
};
