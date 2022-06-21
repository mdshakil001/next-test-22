import { categoryNames } from "lib/constants/categoryNames";
import formatTitle from "lib/formatTitle";
import Link from "next/link";
import React from "react";
import { useState } from "react";

export default function CategoriesButtons() {
  const [showLess, setShowLess] = useState(true);

  return (
    // <div>buttons</div>
    <div className="flex flex-col px-2.5 mt-12">
      {categoryNames
        .slice(0, showLess ? 5 : categoryNames.length)
        .map((category, index) => (
          <Link key={index} href={`/categories/${category}`}>
            <a className="btn bg-blue-400 text-white font-bold font-title text-lg mb-4 px-12 py-2.5 rounded border-none hover:bg-blue-500 transition-all duration-300 h-24">
              {formatTitle(category)}
            </a>
          </Link>
        ))}

      <button
        className="btn bg-blue-400 text-white font-bold font-title text-lg  px-4 py-2.5 rounded border-none hover:bg-blue-500 transition-all duration-300 h-24"
        onClick={() => setShowLess(!showLess)}
      >
        {showLess ? "Show More" : "Show Less"}
      </button>
    </div>
    // <div className="grid grid-cols-2 gap-3 md:grid-cols-2 lg:grid-cols-3">
    //   {categoryNames
    //     .slice(0, showLess ? 5 : categoryNames.length)
    //     .map((category, index) => (
    //       <Link key={index} href={`/categories/${category}`}>
    //         <a className="btn bg-blue-400 text-white font-bold font-title text-lg px-4 py-2.5 rounded border-none hover:bg-blue-500 transition-all duration-300 h-24">
    //           {formatTitle(category)}
    //         </a>
    //       </Link>
    //     ))}

    //   <button
    //     className="btn bg-blue-400 text-white font-bold font-title text-lg px-4 py-2.5 rounded border-none hover:bg-blue-500 transition-all duration-300 h-24"
    //     onClick={() => setShowLess(!showLess)}
    //   >
    //     {showLess ? "Show More" : "Show Less"}
    //   </button>
    // </div>
  );
}
