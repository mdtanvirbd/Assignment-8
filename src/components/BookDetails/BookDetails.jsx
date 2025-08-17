import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookDetails = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch("/books.json")
      .then((res) => res.json())
      .then((data) => {
        const selectedBook = data.find((b) => b.bookId === parseInt(bookId));
        setBook(selectedBook);
      });
  }, [bookId]);

  if (!book) return <p className="text-xl text-center mt-10">Loading...</p>;

  // Function to handle adding to Read/Wishlist
  const handleAction = (type) => {
    // Get current lists from localStorage
    const readList = JSON.parse(localStorage.getItem("readList")) || [];
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    if (type === "read") {
      if (readList.find((b) => b.bookId === book.bookId)) {
        toast.info("This book is already in Read list!");
      } else {
        readList.push(book);
        localStorage.setItem("readList", JSON.stringify(readList));
        toast.success("Book added to Read list!");
      }
    } else if (type === "wishlist") {
      if (readList.find((b) => b.bookId === book.bookId)) {
        toast.error("Cannot add to Wishlist. Already in Read list!");
      } else if (wishlist.find((b) => b.bookId === book.bookId)) {
        toast.info("This book is already in Wishlist!");
      } else {
        wishlist.push(book);
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        toast.success("Book added to Wishlist!");
      }
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-6">
      <ToastContainer position="top-right" autoClose={2000} />
      
      {/* Left side image */}
      <div className="lg:w-1/3">
        <img
          src={book.image}
          alt={book.bookName}
          className="w-full rounded-lg"
          style={{ height: "711px", objectFit: "cover" }}
        />
      </div>

      {/* Right side details */}
      <div
        className="lg:w-2/3 flex flex-col justify-between p-4"
        style={{ height: "711px" }}
      >
        <div className="space-y-6 overflow-y-auto">
          <h2 className="text-4xl font-bold">{book.bookName}</h2>
          <p className="text-2xl text-gray-800">By: {book.author}</p>
          <p className="text-xl">Review: {book.review}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mt-3">
            {book.tags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-green-100 text-green-700 text-lg px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Table for other details */}
          <table className="text-2xl w-full mt-4">
            <tbody>
              <tr>
                <td className="py-2 font-medium">Total Pages:</td>
                <td className="py-2 text-right">
                  <strong>{book.totalPages}</strong>
                </td>
              </tr>
              <tr>
                <td className="py-2 font-medium">Publisher:</td>
                <td className="py-2 text-right">
                  <strong>{book.publisher}</strong>
                </td>
              </tr>
              <tr>
                <td className="py-2 font-medium">Year:</td>
                <td className="py-2 text-right">
                  <strong>{book.yearOfPublishing}</strong>
                </td>
              </tr>
              <tr>
                <td className="py-2 font-medium">Rating:</td>
                <td className="py-2 text-right">
                  <strong>{book.rating}⭐</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Buttons */}
        <div className="flex gap-6 mt-6">
          <button
            onClick={() => handleAction("read")}
            className="bg-blue-500 text-white text-xl px-6 py-3 rounded-lg"
          >
            Read
          </button>
          <button
            onClick={() => handleAction("wishlist")}
            className="bg-pink-500 text-white text-xl px-6 py-3 rounded-lg"
          >
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
