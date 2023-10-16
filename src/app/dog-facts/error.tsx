"use client";

const Error = ({ error }: any) => (
  <div className="page">
    <h1>An error has occurred: {error.message}</h1>
  </div>
);

export default Error;
