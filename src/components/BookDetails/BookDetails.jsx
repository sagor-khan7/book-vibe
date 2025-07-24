import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
  const { bookId } = useParams();
  const books = useLoaderData();
  const id = parseFloat(bookId);

  const book = books.find((b) => b.bookId === id);

  console.log(bookId, book, id);

  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book || {};

  return (
    <div className="mt-20 flex gap-10 space-y-5">
      <img src={image} alt={bookName} />
      <div>
        <h2 className="text-5xl font-bold">{bookName}</h2>
        <p className="mt-2">By: {author}</p>

        <div className="divider"></div>
        <p className="font-semibold"> Category: {category}</p>
        <div className="divider"></div>
        <p>
          <span className="font-bold">Review:</span> {review}
        </p>
        <p>
          Tags:{" "}
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-green-50 text-green-400 text-xs font-semibold mr-2 px-4 py-2 rounded"
            >
              #{tag}
            </span>
          ))}
        </p>
        <div className="divider"></div>
        <span className="block mt-4">
          Number of pages: <span className="ml-4 font-bold ">{totalPages}</span>
        </span>
        <span className="block mt-4">
          Publisher: <span className="ml-4 font-bold ">{publisher}</span>
        </span>
        <span className="block mt-4">
          Year of Publishing:{" "}
          <span className="ml-4 font-bold ">{yearOfPublishing}</span>
        </span>
        <span className="block mt-4">
          Rating: <span className="ml-4 font-bold ">{rating} / 5</span>
        </span>
      </div>
    </div>
  );
};

export default BookDetails;
