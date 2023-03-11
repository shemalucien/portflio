import React from "react";
export default function ProfilePicture({ imageUrl, bgColor }) {
    return (
      <div className={`lg:max-w-lg lg:w-full md:w-1/2 w-3/6 rounded-full flex items-center justify-center bg-${bgColor}`}>
        <img src={imageUrl} alt="Profile" className="w-full h-full rounded-full" />
      </div>
    );
  };
  