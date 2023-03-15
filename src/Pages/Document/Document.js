import React from 'react';
import defensePdf from '../../Assets/Images/defensePdf.png';
import documentHeader from '../../Assets/Images/document-header.jpg';
import eSchoolPdf from '../../Assets/Images/eSchoolPdf.png';
import tarsBinaryPdf from '../../Assets/Images/tarsBinary-Pdf.png';
import universePdf from '../../Assets/Images/universePdf.png';

const Document = () => {
  window.scrollTo({ top: 0, left: 0 });
  const pdfs = [
    {
      pdfImg: tarsBinaryPdf,
      link: 'https://drive.google.com/file/d/1SS4R0tDOw1tKX9aYMQzdwq8e3YzRrcYA/view?usp=sharing',
      name: 'TARS BINARY'
    },
    {
      pdfImg: universePdf,
      link: 'https://drive.google.com/file/d/1-RdTM9GC1PNyZG46L8lifH_M4ekDAi69/view?usp=sharing',
      name: 'TARS UNIVERSE'
    },
    {
      pdfImg: eSchoolPdf,
      link: 'https://drive.google.com/file/d/1CAZT473msHaj6D3LMO-dz-cQJMow97l3/view?usp=sharing',
      name: 'Engineering School'
    },
    {
      pdfImg: defensePdf,
      link: 'https://drive.google.com/file/d/16iRZXO1A7dRtEk_rOZtXx3ooAof3N7Vs/view?usp=sharing',
      name: 'Defense Projects'
    }
  ];
  return (
    <>
      {/* Document Container */}
      <div className='document-container'>
        <div className=''>
          <img
            src={documentHeader}
            alt=''
            className='w-full h-[15rem] md:h-[25rem] lg:h-[30rem]'
          />
        </div>
        <div className='bg-gray-900 text-white py-12 px-8 lg:px-24'>
          <h1 className='text-2xl md:text-3xl lg:text-4xl mb-3 font-heading text-center'>
            Documents
          </h1>
          <p className='font-paragraph'>
            This page is a central location for accessing and exploring project
            documents, portfolios, and detailed books related to TARS BINARY and
            its portfolio. It provides a comprehensive understanding of the
            company's work, achievements, and capabilities through a
            user-friendly interface with various categories of documents, each
            displayed with a thumbnail image, description, and download link.
            Users can filter documents by type, date, or keyword and can use a
            search bar to find specific documents. The available documents
            showcase <span className='font-couriernew '>TARS BINARY</span>'s
            expertise in software development, data science, and artificial
            intelligence, as well as its successful collaborations with clients
            and partners. Overall, the "Document" website page is an essential
            resource for anyone seeking to learn more about{' '}
            <span className='font-couriernew '>TARS BINARY</span> and its
            offerings.
          </p>
        </div>
        {/* PDF Container */}
        <div className='pdf-container mt-10 flex items-center justify-center w-full'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16 lg:gap-32 w-10/12 mx-auto'>
            {pdfs.map((pdf, index) => (
              <a key={index} href={pdf.link} target='_blank' rel='noreferrer'>
                <div className='card w-full shadow-xl image-full '>
                  <figure className=' rounded-none h-[14rem]'>
                    <img
                      src={pdf.pdfImg}
                      alt=''
                      className='rounded-xl w-full h-full'
                    />
                  </figure>
                  <div className='card-body flex flex-col items-center justify-center h-full '>
                    <div className='text-center'>
                      <h1 className='text-2xl font-semibold'>{pdf.name}</h1>
                      <p className='text-2xl font-semibold'>PDF</p>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Document;
