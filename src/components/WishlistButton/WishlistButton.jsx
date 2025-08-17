import React from "react";
import { toast } from "react-toastify";

const WishlistButton = ({ book }) => {
  const handleWishlist = () => {
    const readList = JSON.parse(localStorage.getItem("readList")) || [];
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    if (readList.find((b) => b.bookId === book.bookId)) {
      toast.error("Cannot add to Wishlist. Already in Read list!");
    } else if (wishlist.find((b) => b.bookId === book.bookId)) {
      toast.info("This book is already in your Wishlist!");
    } else {
      wishlist.push(book);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      toast.success("Book added to Wishlist!");
    }
  };

  return (
    <button
      onClick={handleWishlist}
      className="bg-pink-500 text-white text-xl px-6 py-3 rounded-lg"
    >
      Wishlist
    </button>
  );
};

export default WishlistButton;
