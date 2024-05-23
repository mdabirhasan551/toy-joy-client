/* eslint-disable react/jsx-key */
import { useLoaderData } from "react-router-dom";
import HomeCarousel from "./HomeCarousel";
import { Carousel } from "@material-tailwind/react";
import Footer from "../Footer/Footer";

const Home = () => {
  const datas = useLoaderData();
  console.log(datas);
  return (
    <>
      <Carousel transition={{ duration: 1 }} className="rounded-xl">
        {datas.map((data) => (
          <div>
            <HomeCarousel key={data.id} data={data} />
          </div>
        ))}
      </Carousel>
      <Footer />
    </>
  );
};

export default Home;
