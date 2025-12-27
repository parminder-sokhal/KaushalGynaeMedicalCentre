const IMAGE_BACKEND_URL = import.meta.env.VITE_IMAGE_BACKEND_URL;

export const getImageUrl = (url) => {
  if (!url) return "";
  if (url.startsWith("http")) return url;
  return `${IMAGE_BACKEND_URL}${url}`;
};
