import React from "react";

const Title = ({title, desc}) => {
  return (
    <>
      <h3 className="text-5xl font-bold capitalize pb-6 text-gray-800 dark:text-white">
        {title}
      </h3>
      <p className="text-xl pb-4 leading-7 text-gray-600 dark:text-gray-300 border-b border-gray-300 w-full">
        {desc}
      </p>
    </>
  );
};

export default Title;
