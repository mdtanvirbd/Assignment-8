import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookId, image, bookName, author, category, rating, tags } = book;

  return (
    <Link to={`/books/${bookId}`}>  {/* Click করলে BookDetails route এ যাবে */}
      <div className="border p-4 rounded-xl shadow-md hover:shadow-lg transition">
        <img
          src={image}
          alt={bookName}
          className="w-full h-64 object-cover rounded-md mb-4"
        />
        <div className="flex gap-5 mb-2 flex-wrap">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="bg-green-300 text-green-700 text-xs px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-bold">{bookName}</h3>
        <p className="text-gray-600 mt-2 font-semibold">by {author}</p>
        <hr className="mt-3" />
        <div className="flex justify-between">
          <p className="text-sm text-blue-600 mt-1">{category}</p>
          <p className="text-sm text-yellow-600">{rating} ⭐</p>
        </div>
      </div>
    </Link>
  );
};

export default Book;
