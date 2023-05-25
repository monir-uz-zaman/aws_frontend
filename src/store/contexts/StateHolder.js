import React, { useState, useContext } from "react";

// First create the context
const MyContext = React.createContext();

const StateHolder = (props) => {
  const [allCategories, setAllCategories] = useState([]);

  return (
    <MyContext.Provider
      value={{
        allCategories,
        setAllCategories,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => useContext(MyContext);

export default StateHolder;
