import book from "../../assets/books.png";

const Banner = () => {
  return (
    <div className="flex justify-between bg-gray-100 p-10 items-center mt-10 rounded-lg">
      <div className="flex flex-col justify-center items-start space-y-10">
        <h1 className="text-6xl font-bold leading-20">
          Books to freshen <br /> up your bookshelf
        </h1>
        <button className="btn rounded-md py-6 px-6 bg-green-400 text-white font-bold text-xl">
          View the List
        </button>
      </div>
      <img className="max-w-full" src={book} alt="Books" />
    </div>
  );
};

export default Banner;
