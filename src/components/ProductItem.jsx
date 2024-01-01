import React from "react";

function ProductItem() {
  return (
    <>
      <div className="bg-[#f2f2f2]">
        <div className=" max-w-7xl mx-auto pb-16 grid gap-4 grid-cols-12">
          <div className="border-2 col-span-8  rounded-sm bg-white">
            <div className="border-2 h-[480px]"></div>
            <div className="border-2 h-20"></div>
            <div className="border-2 h-20"></div>
            <div className="border-2 h-20"></div>
          </div>
          <div className=" col-span-4 ">
            <div className="border-2 h-36 mb-2 bg-white rounded-sm"></div>
            <div className="border-2 h-36 mb-2 bg-white rounded-sm"></div>
            <div className="border-2 h-36 mb-2 bg-white rounded-sm"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductItem;
