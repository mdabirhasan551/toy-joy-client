import { Link, useLoaderData } from "react-router-dom";

const Blogs = () => {
  const blogsData = useLoaderData();

  const truncateDescription = (description, wordLimit) => {
    const words = description.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : description;
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogsData.map((blogData) => (
          <div
            key={blogData.id}
            className="card card-compact w-96 bg-base-100 shadow-xl"
          >
            <figure>
              <img src={blogData.img} alt={blogData.title} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{blogData.title}</h2>
              <p>{truncateDescription(blogData.description, 30)}</p>
              <Link to={`/blogs/${blogData.id}`}>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Read More</button>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
