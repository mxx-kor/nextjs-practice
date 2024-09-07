export const createBlob = async (url: string) => {
  try {
    const image = await fetch(url);
    const blobData = await image.blob();
    return blobData;
  } catch (error) {
    throw new Error(`creating blob error: ${error}`);
  }
};
