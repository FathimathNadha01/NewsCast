import React from "react";

const Card = ({newsData,className,newstype}) => {
  return (
    <div className="w- h-full mx-auto p-">
      <div  className={`relative ${className} bg-black rounded-2xl overflow-hidden shadow-lg text-white`}>
        <img
          src={newsData?.og||"/Post-1.png"}
          alt="Business Meeting"
          className="w-full h-80 object-cover opacity-60"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-blue-600 text-xs uppercase font-semibold px-2 py-1 rounded">
            {newstype?newstype:'Business'}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 right-4 px-4">
          <p className="text-sm mb-1">Craig Bator - 27 Dec 2020</p>
          <a href={newsData?.link||''} className="text-2xl font-bold leading-tight">
           {newsData?.title||'no'}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
