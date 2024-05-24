/* eslint-disable react/prop-types */
const HomeCarousel = ({ data }) => {
  const { banner } = data;

  return (
    <div className="bg-gradient-to-tr from-black to-white w-full flex items-center justify-center">
      <img src={banner} alt="Banner" className="w-full h-full object-cover" />
    </div>
  );
};

export default HomeCarousel;
