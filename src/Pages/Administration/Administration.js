import React from 'react';
// import administration from '../../Assets/Images/administration.png';

const Administration = () => {
  window.scrollTo({ top: 0, left: 0 });
  return (
    <>
      {/* Administration Container */}
      <div className='administration-container'>
        {/* Header Card */}

        {/* <section
					className='relative  bg-cover bg-center bg-no-repeat '
					style={{
						backgroundImage: `url(${administration})`
					}}
				>
					<div className='relative   px-4 py-16 flex  items-center justify-center '>
						<div className='max-w-xl text-center sm:text-left'>
							<h1 className='text-3xl font-bold sm:text-5xl text-white font-heading'>
								Administration
							</h1>
						</div>
					</div>
				</section> */}
        {/* Text Card */}
        <div className='bg-gray-900 text-white pt-36 pb-36 px-8 lg:px-96'>
          <h1 className='text-2xl md:text-3xl lg:text-4xl mb-12 font-heading text-center '>
            Administration
          </h1>
          <p className='text-xs md:text-base lg:text-xl font-paragraph text-justify'>
            <span className='font-couriernew '>TARS BINARY</span> has a
            dedicated administration that oversees all of its projects and
            operations. The Administrator of{' '}
            <span className='font-couriernew '>TARS BINARY</span> is Shafiq
            Bari, who serves as the higher authority for all of the company's
            projects. Under his leadership,
            <span className='font-couriernew '>TARS BINARY</span> has become a
            leading technology company in the field of Software Defined Radio
            (SDR) technology, providing advanced systems for various
            applications in the Intelligence, Defense, and Security sectors.
            <br />
            <br />
            The administration team at{' '}
            <span className='font-couriernew '>TARS BINARY</span> is comprised
            of experienced professionals who have a deep understanding of the
            technical requirements and challenges faced in the industry. They
            are dedicated to ensuring that{' '}
            <span className='font-couriernew '>TARS BINARY</span> delivers
            high-quality products and solutions to its clients.
            <br />
            <br />
            In addition to its focus on SDR technology,
            <span className='font-couriernew '> TARS BINARY</span>is also known
            for its TARS UNIVERSE project, which provides students with a
            comprehensive online platform for learning about engineering and
            technology. The administration team oversees all aspects of this
            project, ensuring that it meets the needs of students and provides
            effective education for the industrial age.
            <br />
            <br />
            At <span className='font-couriernew '>TARS BINARY</span>, the
            administration team is committed to maintaining the highest
            standards of professionalism, integrity, and quality in all of its
            operations. They work closely with clients and stakeholders to
            ensure that projects are completed on time and to the highest
            possible standards.
          </p>
        </div>
      </div>
    </>
  );
};

export default Administration;
