import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList
} from "recharts";

const CustomBarShape = (props) => {
  const { x, y, width, height, fill } = props;
  return (
    <path
      d={`
        M${x},${y + height}
        C${x + width / 3},${y + height} 
         ${x + width / 2},${y} 
         ${x + width},${y}
        L${x + width},${y + height}
        Z
      `}
      fill={fill}
      stroke="none"
    />
  );
};

const PageToRead = () => {
  const [readBooks, setReadBooks] = useState([]);

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem("readList")) || [];
    setReadBooks(storedBooks);
  }, []);

  const data = readBooks.map((book) => ({
    name: book.bookName.length > 10 ? book.bookName.slice(0, 10) + "..." : book.bookName,
    pages: book.totalPages,
  }));

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Pages to Read</h1>

      <div className="w-full h-[500px] bg-white rounded-xl shadow-lg p-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" interval={0} angle={-30} textAnchor="end" height={80} />
            <YAxis />
            <Tooltip />
            <Bar dataKey="pages" fill="#4F46E5" shape={<CustomBarShape />}>
              <LabelList dataKey="pages" position="top" />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PageToRead;
