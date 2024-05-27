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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {data.map((item) => (
        <User {...item} getID={getUser} key={item.id} />
      ))}
      <button onClick={removeData} className="text-white bg-red-500 rounded w-32 h-10 hover:bg-red-700">Remove All</button>
    </div>
  );
};

export default UserList;
