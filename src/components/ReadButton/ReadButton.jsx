import React from "react";
import { toast } from "react-toastify";

const ReadButton = ({ book }) => {
  const handleRead = () => {
    const readList = JSON.parse(localStorage.getItem("readList")) || [];

    if (readList.find((b) => b.bookId === book.bookId)) {
      toast.info("This book is already in your Read list!");
    } else {
      readList.push(book);
      localStorage.setItem("readList", JSON.stringify(readList));
      toast.success("Book added to Read list!");
    }
  };

  return (
    <button
      onClick={handleRead}
      className="bg-blue-500 text-white text-xl px-6 py-3 rounded-lg"
    >
      Read
    </button>
  );
};

export default ReadButton;
