import React from "react";
import Data from "../components/data";
import User from "./User";
const UserList = () => {
  const [data, setData] = React.useState(Data);
  const getUser = (id) => {
    // const newData = setData(data.filter((n) => n.id !== id));
    const newData = data.filter((n) => n.id !== id);
    setData(newData);
  };
  const removeData = () => {
    setData([]);
  };
  return (
    <>
      <section className="bg-gray-600 p-4">
        <nav className="w-3/4 m-auto flex justify-end items-center gap-4">
          <div class="relative w-2/4">
            <input
              className="bg-white w-full h-8 outline-none px-10 py-1 rounded-lg shadow-md focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Search...."
            />
            <i class="fa-solid fa-magnifying-glass absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
          </div>

          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
            Sign In
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition duration-300">
            Sign Up
          </button>
        </nav>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((item) => (
          <User {...item} getID={getUser} key={item.id} />
        ))}
        <button
          onClick={removeData}
          className="text-white bg-red-500 rounded w-32 h-10 hover:bg-red-700"
        >
          Remove All
        </button>
      </div>

      <footer className="bg-blue-900 w-full h-60 text-white flex flex-col justify-center items-center p-4">
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold">About MoviesHub</h2>
          <p className="mt-2 max-w-md mx-auto">
            MoviesHub is your ultimate destination for all things movies.
            Discover the latest releases, classic films, and hidden gems. Dive
            into reviews, trailers, and in-depth articles about your favorite
            films and actors. Join our community of movie enthusiasts today!
          </p>
        </div>
        <div className="flex space-x-6">
          <a href="/contact" className="hover:underline">
            Contact Us
          </a>
          <a href="/privacy" className="hover:underline">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:underline">
            Terms of Service
          </a>
        </div>
        <div className="mt-4 text-sm">
          &copy; 2024 MoviesHub. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default UserList;
