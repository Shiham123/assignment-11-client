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
        <div>
          <div className="flex flex-col justify-center items-center md:grid md:grid-cols-2 lg:grid lg:grid-cols-4 gap-4 m-8">
            <h1 className="text-3xl font-poppins font-bold capitalize tracking-wide">
              why choose this site
            </h1>
            <p className="text-3xl font-poppins font-bold capitalize tracking-wide leading-8">
              Yon can add here job for your company
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center md:grid md:grid-cols-2 lg:grid lg:grid-cols-4 gap-4 m-8">
            <h1 className="text-3xl font-poppins font-bold capitalize tracking-wide">
              why choose this site
            </h1>
            <p className="text-3xl font-poppins font-bold capitalize tracking-wide leading-8">
              Yon can add here job for your company
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center md:grid md:grid-cols-2 lg:grid lg:grid-cols-4 gap-4 m-8">
            <h1 className="text-3xl font-poppins font-bold capitalize tracking-wide">
              why choose this site
            </h1>
            <p className="text-3xl font-poppins font-bold capitalize tracking-wide leading-8">
              Yon can add here job for your company
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
