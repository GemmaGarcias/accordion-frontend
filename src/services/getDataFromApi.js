export const getDataFromApi = async () => {
    const url = '../../../data.json';
    let response = await fetch(url);
    let data = await response.json();
    return data;
  };
