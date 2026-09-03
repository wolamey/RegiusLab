// src/pdf-loader.js
export const loadPdf = async (pdfUrl) => {
  const response = await fetch(pdfUrl);
  const arrayBuffer = await response.arrayBuffer();
  return arrayBuffer;
};