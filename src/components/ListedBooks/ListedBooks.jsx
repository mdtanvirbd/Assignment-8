import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaUserFriends } from "react-icons/fa";
import { TbPageBreak } from "react-icons/tb";

const ListedBooks = () => {
  const [activeTab, setActiveTab] = useState("read");
  const [books, setBooks] = useState([]);
  const [sortBy, setSortBy] = useState("");

  // Load books from localStorage whenever tab changes
  useEffect(() => {
    const readList = JSON.parse(localStorage.getItem("readList")) || [];
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setBooks(activeTab === "read" ? readList : wishlist);
  }, [activeTab]);

  // Sorting
  const handleSort = (e) => {
    const value = e.target.value;
    setSortBy(value);

    const sortedBooks = [...books].sort((a, b) => {
      if (value === "rating") return b.rating - a.rating;
      if (value === "totalPages") return b.totalPages - a.totalPages;
      if (value === "yearOfPublishing")
        return b.yearOfPublishing - a.yearOfPublishing;
      return 0;
    });
    setBooks(sortedBooks);
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-4xl font-bold text-center bg-gray-200 py-6 rounded-2xl">
        Books
      </h1>

      {/* Sort Dropdown */}
      <div className="flex justify-center">
        <select
          className="border px-6 py-4 rounded-2xl bg-green-500 text-white font-semibold text-center"
          value={sortBy}
          onChange={handleSort}
        >
          <option value="">Sort By</option>
          <option value="rating">Rating</option>
          <option value="totalPages">Number of Pages</option>
          <option value="yearOfPublishing">Published Year</option>
        </select>
      </div>

      {/* Tabs */}
      <div className="flex gap-4">
        <button
          onClick={() => setActiveTab("read")}
          className={`px-4 py-2 rounded-lg font-semibold ${
            activeTab === "read" ? "bg-white text-black" : "bg-gray-200"
          }`}
        >
          Read Books
        </button>
        <button
          onClick={() => setActiveTab("wishlist")}
          className={`px-4 py-2 rounded-lg font-semibold ${
            activeTab === "wishlist" ? "bg-white text-black" : "bg-gray-200"
          }`}
        >
          Wishlist Books
        </button>
      </div>

      {/* Books List */}
      <div className="flex flex-col gap-4">
        {books.length === 0 && (
          <p className="text-center text-xl w-full">No books in this list.</p>
        )}

        {books.map((book) => (
          <div
            key={book.bookId}
            className="flex w-full h-[277px] bg-gray-100 rounded-lg shadow-lg overflow-hidden"
          >
            {/* Book Image */}
            <img
              src={book.image}
              alt={book.bookName}
              className="h-80 w-48 object-cover"
            />

            {/* Book Details */}
            <div className="flex-1 p-4 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold">{book.bookName}</h2>
                <p className="text-gray-700">By: {book.author}</p>

                {/* Tags + Year */}
                <div className="flex items-center gap-4 mt-3 flex-wrap">
                  <div className="flex gap-2">
                    <strong>Tag</strong>
                    {book.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-gray-700">
                    Year of Publishing:{" "}
                    <strong>{book.yearOfPublishing}</strong>
                  </p>
                </div>

                {/* Publisher + Pages */}
                <div className="flex gap-6 mt-3">
                  <div className="flex items-center gap-2">
                    <FaUserFriends className="text-gray-600" />
                    <p>
                      Publisher: <strong>{book.publisher}</strong>
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <TbPageBreak className="text-gray-600" />
                    <p>
                      Total Pages: <strong>{book.totalPages}</strong>
                    </p>
                  </div>
                </div>
              </div>

              <hr className="my-3" />

              {/* Category + Rating + Button */}
              <div className="flex items-center gap-4">
                <span className="bg-blue-100 text-blue-700 px-6 py-2 rounded-3xl font-medium">
                  {book.category}
                </span>
                <span className="bg-yellow-100 text-yellow-700 px-6 py-2 rounded-3xl font-medium">
                  ⭐ {book.rating}
                </span>
                <Link
                  to={`/book/${book.bookId}`}
                  className="bg-blue-500 text-white px-6 py-2 rounded-3xl hover:bg-blue-600 transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListedBooks;
