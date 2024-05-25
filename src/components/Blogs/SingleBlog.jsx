import { useLoaderData } from "react-router-dom";

const SingleBlog = () => {
  const singleBlogData = useLoaderData();
  const { title, img, description } = singleBlogData;
  return (
    <div className="m-12 border-2">
      <div className="w-full m-12">
        <h1 className="font-bold text-5xl text-center">{title}</h1>
        <div className="flex justify-center mt-12">
          <img className="rounded-lg w-2/3 h-2/3" src={img} alt="" />
        </div>
        <p className="m-12 text-2xl">{description}</p>
      </div>
    </div>
  );
};

export default SingleBlog;
