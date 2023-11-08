const FaqSection = () => {
  return (
    <div className="flex justify-center items-center flex-col my-[10rem]">
      <div className="m-auto text-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-poppins font-bold text-colorOne tracking-wider">
          Our service
        </h1>
      </div>

      {/*  */}

      <div className="flex flex-col justify-center items-center md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 gap-4">
        <div className="h-full border-2 border-colorOne rounded-lg hover:bg-colorOne hover:text-colorSix duration-300">
          <div className="flex flex-col justify-center items-center gap-4 m-8 p-8">
            <h1 className="text-3xl font-poppins font-bold capitalize tracking-wide">
              why choose this site ?
            </h1>
            <p className="text-xl font-poppins font-semibold capitalize tracking-wide leading-8 py-4 px-8">
              Yon can add here job for your company, You bid anther people job.{' '}
              <br />
              if anyone bid your job you able to accept or reject
            </p>
          </div>
        </div>
        {/*  */}
        <div className="h-full border-2 border-colorOne rounded-lg hover:bg-colorOne hover:text-colorSix duration-300">
          <div className="flex flex-col justify-center items-center gap-4 m-8 p-8">
            <h1 className="text-3xl font-poppins font-bold capitalize tracking-wide">
              Why this site is popular ?
            </h1>
            <p className="text-xl font-poppins font-semibold capitalize tracking-wide leading-8 py-4 px-8">
              Because our client is very polite and they are also come form
              various market place.
            </p>
          </div>
        </div>
        {/*  */}
        <div className="h-full border-2 border-colorOne rounded-lg hover:bg-colorOne hover:text-colorSix duration-300">
          <div className="flex flex-col justify-center items-center gap-4 m-8 p-8">
            <h1 className="text-3xl font-poppins font-bold capitalize tracking-wide">
              what we provide ?
            </h1>
            <p className="text-xl font-poppins font-semibold capitalize tracking-wide leading-8 py-4 px-8">
              We provide only, web development sector, web design section, and
              digital market for sector
            </p>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default FaqSection;
