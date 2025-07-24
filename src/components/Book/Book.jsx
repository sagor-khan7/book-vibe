// {
//   "bookId": 1,
//   "bookName": "The Great Gatsby",
//   "author": "F. Scott Fitzgerald",
//   "image": "https://i.ibb.co.com/khHN7Pk/9780143454212.jpg",
//   "review": "'The Great Gatsby' by F. Scott Fitzgerald is a timeless masterpiece that delves into the decadence and disillusionment of the Jazz Age. Set in the Roaring Twenties, the novel unveils the enigmatic Jay Gatsby's extravagant parties, masking a pursuit of lost love. Narrated by Nick Carraway, the story explores themes of wealth, love, and the American Dream, drawing readers into a vivid portrayal of the glittering yet elusive world of the East and West Egg. Fitzgerald's prose is both poetic and haunting, weaving a compelling narrative that transcends its era. A poignant exploration of societal excess and the human condition, 'The Great Gatsby' remains a literary gem that resonates across generations.",
//   "totalPages": 192,
//   "rating": 4.5,
//   "category": "Classic",
//   "tags": ["Fiction", "Romance"],
//   "publisher": "Scribner",
//   "yearOfPublishing": 1925
// }
const Book = ({ book }) => {
  const { bookId, bookName, author, image, tags, rating, category } = book;
  return (
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
  );
};

export default Book;
