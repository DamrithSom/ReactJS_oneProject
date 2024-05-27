import React from "react";

const User = (props) => {
  const { id, image, title, type ,getID} = props;
  const handlerClick = () => {
    getID(id)
  }
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img className="w-full transition duration-300 transform hover:scale-110" src={image} alt={title} />
      <div className="px-6 py-4">
        <h1 className="font-bold text-xl mb-2 text-white">{title}</h1>
        <h2 className=" text-base mb-4 text-blue-500">{type}</h2>
        <button onClick={handlerClick} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Trailer
        </button>
      </div>
    </div>
  );
};

export default User;
