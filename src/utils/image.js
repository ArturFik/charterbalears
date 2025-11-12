export const IMAGE_EXTENSION_REGEX = /\.(png|jpe?g|gif|webp)$/i;

export const getWebpSource = (imagePath) => {
  if (typeof imagePath !== "string" || imagePath.trim() === "") {
    return null;
  }

  if (imagePath.toLowerCase().endsWith(".webp")) {
    return null;
  }

  if (!IMAGE_EXTENSION_REGEX.test(imagePath)) {
    return null;
  }
  return null;
};

export const getMimeType = (imagePath) => {
  if (typeof imagePath !== "string" || imagePath.trim() === "") {
    return "image/jpeg";
  }

  const lowerPath = imagePath.toLowerCase();

  if (lowerPath.endsWith(".webp")) {
    return "image/webp";
  }

  if (lowerPath.endsWith(".avif")) {
    return "image/avif";
  }

  if (lowerPath.endsWith(".png")) {
    return "image/png";
  }

  if (lowerPath.endsWith(".gif")) {
    return "image/gif";
  }

  if (lowerPath.endsWith(".svg")) {
    return "image/svg+xml";
  }

  if (lowerPath.endsWith(".jpg") || lowerPath.endsWith(".jpeg")) {
    return "image/jpeg";
  }

  return "image/jpeg";
};

export const buildPictureSources = (imagePath) => {
  const sources = [];
  const webpSource = getWebpSource(imagePath);
  const fallbackType = getMimeType(imagePath);

  if (imagePath && fallbackType) {
    sources.push({ type: fallbackType, srcSet: imagePath });
  }

  return sources;
};
