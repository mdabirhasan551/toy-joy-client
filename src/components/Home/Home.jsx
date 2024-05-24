import { useLoaderData } from "react-router-dom";
import HomeCarousel from "./HomeCarousel";
import Footer from "../Footer/Footer";
import HomeCards from "./HomeCards"; // Importing HomeCards component

const Home = () => {
  const datas = useLoaderData();

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div className="carousel w-full relative">
        {datas.map((data, index) => (
          <div
            key={data.id}
            id={`slide${index}`}
            className="carousel-item w-full relative"
          >
            <HomeCarousel data={data} />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href={`#slide${index === 0 ? datas.length - 1 : index - 1}`}
                className="btn btn-circle bg-black-500 text-black"
              >
                ❮
              </a>
              <a
                href={`#slide${index === datas.length - 1 ? 0 : index + 1}`}
                className="btn btn-circle bg-black-500 text-"
              >
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
      <HomeCards datas={datas} /> {/* Rendering HomeCards component */}
      <Footer />
    </div>
  );
};

export default Home;
