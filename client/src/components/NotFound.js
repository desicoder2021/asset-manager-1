import React from "react";
import { useLocation } from "react-router-dom";
import { Message } from "primereact/message";

const NotFound = () => {
  const location = useLocation();
  console.log("location", location);
  const content = <div>No route available for {location.pathname} url</div>;

  return (
    <>
      <Message
        className='w-full text-center mt-2'
        severity='error'
        content={content}
      />
    </>
  );
};

export default NotFound;
