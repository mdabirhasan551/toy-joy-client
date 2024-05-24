/* eslint-disable react/prop-types */
const HomeCards = ({ datas }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {datas.map((data) => (
        <div
          key={data.id}
          className="border rounded-md shadow-md p-4 flex flex-col justify-between"
        >
          <img
            src={data.image}
            alt={data.title}
            className="w-full object-cover mb-4 rounded-md"
          />
          <div className="flex flex-col flex-grow">
            <h3 className="text-lg font-semibold mb-2">{data.name}</h3>
            <p><b>Price: ${data.price}</b></p>
            <p className="text-gray-600">Available Quantity: {data.available_quantity}</p>
          </div>
          <div className="mt-4 flex justify-between items-center">
            <button className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeCards;
