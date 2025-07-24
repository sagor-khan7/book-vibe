import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookId, bookName, author, image, tags, rating, category } = book;
  return (
    <Link to={`/books/${bookId}`}>
      <div className="border p-4 rounded">
        <img
          className="w-full h-96 object-cover mb-4"
          src={image}
          alt={bookName}
        />
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-green-50 text-green-400 text-xs font-semibold mr-2 px-4 py-2 rounded"
          >
            {tag}
          </span>
        ))}
        <h2 className="text-2xl font-bold mt-4">{bookName}</h2>
        <p className="text-gray-600 mt-4 font-medium">By: {author}</p>
        <div className="divider"></div>
        <div className="mt-4 flex justify-between">
          <p className="text-gray-600 mt-2">
            <span className="font-semibold">Category:</span> {category}
          </p>
          <p className="text-gray-600 mt-2">
            <span className="font-semibold">Rating:</span> {rating} / 5
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Book;
