import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList, getStoredWishList } from "../../utils/addToDb";
import Book from "../Book/Book";

const ListedBooks = () => {
  const [readList, setReadList] = useState([]);
  const [wishList, setWishList] = useState([]);
  const allBooks = useLoaderData();

  useEffect(() => {
    const storedReadList = getStoredReadList();
    const storedReadListInt = storedReadList.map((id) => parseInt(id));

    const readList = allBooks.filter((book) =>
      storedReadListInt.includes(book.bookId)
    );

    setReadList(readList);
  }, [allBooks]);

  useEffect(() => {
    const storedWishList = getStoredWishList();
    // You can handle the wish list similarly if needed
    const storedWishListInt = storedWishList.map((id) => parseInt(id));
    const wishList = allBooks.filter((book) =>
      storedWishListInt.includes(book.bookId)
    );
    setWishList(wishList);
  }, [allBooks]);

  return (
    <div>
      <h2 className="text-4xl font-bold text-center my-20 bg-gray-100 py-3 rounded-md">
        Books
      </h2>
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel className="my-10">
          {readList.map((book) => (
            <div key={book.bookId} className="mb-5">
              <Book book={book} />
            </div>
          ))}
        </TabPanel>
        <TabPanel>
          {wishList.map((book) => (
            <div key={book.bookId} className="mb-5">
              <Book book={book} />
            </div>
          ))}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
