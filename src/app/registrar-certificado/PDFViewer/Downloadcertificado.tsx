import { exibirPDF } from '../../../services/PDF/index'; // Importe a função

import Cookies from 'js-cookie';

const downloadPDF = async (pdfId: number) => {
  try {
    const token = Cookies.get('token') || '';
    const response = await exibirPDF(token, pdfId);
    const data = await response.json(); // Convert response to JSON

    if (data && data.arquivo) {
      const blob = base64ToBlob(data.arquivo, 'application/pdf');
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'documento.pdf';
      link.click();
    } else {
      console.error('Dados do PDF não encontrados na resposta.');
    }
  } catch (error) {
    console.error('Erro ao buscar o PDF:', error);
  }
};

const base64ToBlob = (base64Data: string, contentType: string) => {
  const sliceSize = 1024;
  const byteCharacters = atob(base64Data);
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);
    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }

  return new Blob(byteArrays, { type: contentType });
};

export default downloadPDF; // Export the downloadPDF function
