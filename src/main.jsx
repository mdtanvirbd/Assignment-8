import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import ListedBooks from './components/ListedBooks/ListedBooks.jsx';
import PageToReade from './components/PageToReade/PageToReade.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Root from './components/Root/Root.jsx';
import BookDetails from './components/BookDetails/BookDetails.jsx';
import About from './components/AboutUs/About.jsx';      // নতুন
import Contact from './components/Contact/Contact.jsx'; // নতুন

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/listedbooks", element: <ListedBooks /> },
      { path: "/pagetoread", element: <PageToReade /> },
      { path: "/books/:bookId", element: <BookDetails /> },
      { path: "/about", element: <About></About> },     // নতুন route
      { path: "/contact", element: <Contact /> }, // নতুন route
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
