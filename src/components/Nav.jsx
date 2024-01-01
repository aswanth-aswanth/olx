import React from "react";

function Nav() {
  const data = [
    { id: 1, name: "cars" },
    { id: 2, name: "motorcycles" },
    { id: 3, name: "mobile phones" },
    { id: 4, name: "for sales : houses and appartments" },
    { id: 5, name: "scooters" },
    { id: 6, name: "commercials & other vehicles" },
    { id: 7, name: "for rent : houses & appartments" },
  ];

  return (
    <div className="shadow-md">
      <div className="max-w-7xl mx-auto flex py-2 px-4">
        <div className="flex items-center text-sm font-semibold mr-4">
          <h3 className=" text-nowrap">ALL CATEGORIES</h3>
          <button className="px-2">
            <svg width="24px" height="24px" viewBox="0 0 1024 1024" data-aut-id="icon" fillRule="evenodd">
              <path d="M85.392 277.333h60.331l366.336 366.336 366.336-366.336h60.331v60.331l-408.981 409.003h-35.307l-409.045-409.003z"></path>
            </svg>
          </button>
        </div>
        <div className="flex gap-x-4 capitalize text-sm font-normal w-[calc(100%-152px)]">
          {data.map((item) => {
            return <div className=" min-w-[32px] whitespace-nowrap text-ellipsis overflow-hidden cursor-pointer" key={item.id}>{item.name}</div>;
          })}
        </div>
      </div>
    </div>
  );
}

export default Nav;
