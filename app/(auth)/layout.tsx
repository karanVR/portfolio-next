import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="h-[100vh] flex justify-center items-center">
        {children}
      </div>
      <div className="sticky bottom-0 h-21 bg-gray-800 p-4 text-center">
        <p className="text-white">&#169; karan 2023 </p>{" "}
      </div>
    </>
  );
};

export default AuthLayout;
