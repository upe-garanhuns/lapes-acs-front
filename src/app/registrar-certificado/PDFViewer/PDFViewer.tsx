import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

import { exibirPDF } from '../../../services/PDF/index'; // Importe a função

import Cookies from 'js-cookie';
pdfjs.GlobalWorkerOptions.workerSrc =
  'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.9.179/pdf.min.js';

const PDFViewer = () => {
  const [pdfData, setPdfData] = useState(null);

  useEffect(() => {
    const token = Cookies.get('token');

    const fetchPDFData = async () => {
      try {
        const response = await exibirPDF(token); // Use a função para obter os dados do PDF

        const data = await response.json();
        console.log(data);

        if (data && data.arquivo) {
          setPdfData(data.arquivo); // Os dados já estão em formato base64
        } else {
          console.error('Nenhum dado de PDF encontrado na resposta.');
        }
      } catch (error) {
        console.error('Erro ao buscar o PDF:', error);
      }
    };

    fetchPDFData();
  }, []);

  return (
    <div>
      {pdfData && (
        <Document file={{ data: pdfData }}>
          <Page pageNumber={1} />
        </Document>
      )}
    </div>
  );
};

export default PDFViewer;
