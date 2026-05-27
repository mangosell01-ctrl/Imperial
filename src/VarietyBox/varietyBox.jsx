import React from "react";
import MangoBox from "./box";

const VarietyBox = () => {
  return (
    <div>   
         {/* SEPARATOR */}
      <div className="text-center my-10">
        <h2 className="text-5xl font-bold text-yellow-700 my-2">
        Mango Varieties
        </h2>
        <p className="text-gray-500">
          Choose your favorite premium mango box
        </p>
      </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center mx-5">

      <MangoBox
        url="https://images.unsplash.com/photo-1591073113125-e46713c829ed?q=80&w=1200&auto=format&fit=crop"
        name="Sindhri Mango"
        price="3000"
        kg="5"
      />
      <MangoBox
        url="https://images.unsplash.com/photo-1591073113125-e46713c829ed?q=80&w=1200&auto=format&fit=crop"
        name="Sindhri Mango"
        price="2000"
        kg="5"
      />
      <MangoBox
        url="https://images.unsplash.com/photo-1591073113125-e46713c829ed?q=80&w=1200&auto=format&fit=crop"
        name="Sindhri Mango"
        price="2500"
        kg="5"
      />

    </div>
    </div>
  );
};

export default VarietyBox;