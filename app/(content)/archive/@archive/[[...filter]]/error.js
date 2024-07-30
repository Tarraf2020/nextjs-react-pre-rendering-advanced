"use client";

const FilteError = ({ error }) => {
  return (
    <div id="error">
      <h2>An error occured!</h2>
      <p>{error.message}</p>
    </div>
  );
};

export default FilteError;
