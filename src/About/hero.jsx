import React from "react";

const features = [
  {
    title: "Premium Quality",
    description:
      "Handpicked mangoes with rich taste and freshness.",
  },
  {
    title: "Farm Fresh",
    description:
      "Directly sourced from trusted mango farms.",
  },
  {
    title: "Fast Delivery",
    description:
      "Safe packaging and quick delivery across Pakistan.",
  },
  {
    title: "Customer Trust",
    description:
      "Delivering quality and satisfaction in every order.",
  },
];

export default function Hero() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">

      {features.map((feature, index) => (
        <div
          key={index}
          className="
            group
            bg-white/90
            backdrop-blur-md
            border border-yellow-200
            rounded-3xl
            p-6
            shadow-lg
            hover:shadow-2xl
            hover:-translate-y-2
            transition-all
            duration-300
            relative
            overflow-hidden
          "
        >

          {/* Top Glow */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-green-700"></div>

          {/* Hover Background Effect */}
          <div className="
            absolute
            inset-0
            bg-gradient-to-br
            from-yellow-50
            to-green-50
            opacity-0
            group-hover:opacity-100
            transition
            duration-300
          "></div>

          {/* Content */}
          <div className="relative z-10">

            {/* Icon Circle */}
            <div className="
              w-14
              h-14
              rounded-2xl
              bg-gradient-to-br
              from-yellow-400
              to-green-700
              flex
              items-center
              justify-center
              text-white
              text-2xl
              shadow-lg
              mb-5
            ">
              🥭
            </div>

            <h3 className="
              font-bold
              text-xl
              text-gray-900
              mb-3
              group-hover:text-green-800
              transition
            ">
              {feature.title}
            </h3>

            <p className="text-gray-600 leading-relaxed">
              {feature.description}
            </p>

          </div>
        </div>
      ))}

    </div>
  );
}