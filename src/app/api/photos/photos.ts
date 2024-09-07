export const getPhotos = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos');
    return res.json();
  } catch (error) {
    throw new Error('photo fetching error: ' + error);
  }
};
