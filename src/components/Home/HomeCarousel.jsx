/* eslint-disable react/prop-types */
const HomeCarousel = ({ data }) => {
  const { banner } = data;
  console.log(banner);

  return (
    <div className="bg-gradient-to-tr from-black to-white">
      <img
        src={banner}
        alt="image 1"
        className="w-full object-cover" style={{height: '600px',}}
      />
    </div>
  );
};

export default HomeCarousel;
