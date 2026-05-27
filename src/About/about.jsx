import React from "react";
import Logoimg from "../assets/images/Logo.png";

export default function ImperialMangoAbout() {
  return (
    <>
      {/* HERO SECTION */}
      <section
        id="home"
        className="min-h-screen py-2 items-center relative overflow-hidden"
        style={{
          display: "flex",
          background:
            "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.75)), url('https://images.unsplash.com/photo-1553279768-865429fa0078?q=80&w=1800&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        {/* OVERLAY */}
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background:
              "radial-gradient(circle at top right, rgba(255,193,7,0.2), transparent 35%)",
          }}
        ></div>

        {/* CONTAINER */}
        <div className="max-w-7xl mx-auto relative z-10 px-5 w-full">

          {/* FLEX FIXED */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-14">

            {/* LEFT CONTENT */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">

              <div className="animate__animated animate__fadeInDown">
                <span
                  className="inline-block rounded-full px-6 py-3 mb-6 text-sm font-semibold tracking-wide"
                  style={{
                    background: "rgba(255,193,7,0.15)",
                    color: "#ffc107",
                    border: "1px solid rgba(255,193,7,0.3)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  PREMIUM MANGOES FROM PAKISTAN
                </span>
              </div>

              <h1
                className="text-white font-extrabold mb-6 leading-tight animate__animated animate__fadeInLeft"
                style={{
                  fontSize: "clamp(3rem, 7vw, 7rem)",
                }}
              >
                Taste The
                <span className="text-yellow-400 block">
                  Most Loved Mangoes
                </span>
                In Pakistan
              </h1>

              <p className="text-gray-300 text-lg leading-8 mb-10 animate__animated animate__fadeInUp">
                Farm-fresh, naturally sweet and export-quality mangoes
                delivered across Pakistan with premium packaging and
                unforgettable taste.
              </p>

              {/* BUTTONS */}
              <div className="flex flex-wrap gap-5 justify-center lg:justify-start animate__animated animate__zoomIn">

                <a
                  href="#order"
                  className="bg-yellow-400 hover:bg-yellow-300 text-black text-lg font-bold px-10 py-4 rounded-full shadow-2xl transition duration-300 hover:-translate-y-1"
                >
                  Order Now
                </a>

                <a
                  href="https://wa.me/923371483106"
                  target="_blank"
                  rel="noreferrer"
                  className="border-2 border-white text-white hover:bg-white hover:text-black text-lg font-semibold px-10 py-4 rounded-full transition duration-300"
                >
                  WhatsApp Order
                </a>

              </div>

              {/* STATS */}
{/* Premium Stats Section */}
<div className="mt-14">

  <div className="
    grid
    grid-cols-1
    sm:grid-cols-3
    gap-5
  ">

    {/* Card 1 */}
    <div className="
      relative
      overflow-hidden
      rounded-3xl
      bg-white/10
      backdrop-blur-xl
      border border-white/10
      p-7
      shadow-2xl
      hover:-translate-y-2
      transition-all
      duration-300
      group
    ">

      {/* Glow */}
      <div className="
        absolute
        top-0
        left-0
        w-full
        h-1
        bg-gradient-to-r
        from-yellow-400
        to-green-700
      "></div>

      <h2 className="
        text-yellow-400
        font-extrabold
        text-5xl
        mb-3
      ">
        100%
      </h2>

      <p className="
        text-white
        text-lg
        font-medium
      ">
        Fresh Mangoes
      </p>

      <span className="
        absolute
        -right-6
        -bottom-6
        text-8xl
        opacity-10
      ">
        🥭
      </span>
    </div>

    {/* Card 2 */}
    <div className="
      relative
      overflow-hidden
      rounded-3xl
      bg-white/10
      backdrop-blur-xl
      border border-white/10
      p-7
      shadow-2xl
      hover:-translate-y-2
      transition-all
      duration-300
      group
    ">

      <div className="
        absolute
        top-0
        left-0
        w-full
        h-1
        bg-gradient-to-r
        from-yellow-400
        to-green-700
      "></div>

      <h2 className="
        text-yellow-400
        font-extrabold
        text-5xl
        mb-3
      ">
        Fast
      </h2>

      <p className="
        text-white
        text-lg
        font-medium
      ">
        Delivery
      </p>

      <span className="
        absolute
        -right-6
        -bottom-6
        text-8xl
        opacity-10
      ">
        🚚
      </span>
    </div>

    {/* Card 3 */}
    <div className="
      relative
      overflow-hidden
      rounded-3xl
      bg-white/10
      backdrop-blur-xl
      border border-white/10
      p-7
      shadow-2xl
      hover:-translate-y-2
      transition-all
      duration-300
      group
    ">

      <div className="
        absolute
        top-0
        left-0
        w-full
        h-1
        bg-gradient-to-r
        from-yellow-400
        to-green-700
      "></div>

      <h2 className="
        text-yellow-400
        font-extrabold
        text-5xl
        mb-3
      ">
        Premium
      </h2>

      <p className="
        text-white
        text-lg
        font-medium
      ">
        Quality
      </p>

      <span className="
        absolute
        -right-6
        -bottom-6
        text-8xl
        opacity-10
      ">
        ⭐
      </span>
    </div>

  </div>
</div>
            </div>

            {/* RIGHT LOGO */}
            <div className="w-full lg:w-1/2 flex justify-center">

              <div className="relative">

                {/* Glow */}
                <div
                  className="absolute top-1/2 left-1/2 rounded-full -translate-x-1/2 -translate-y-1/2"
                  style={{
                    width: "430px",
                    height: "430px",
                    background: "rgba(255,193,7,0.25)",
                    filter: "blur(70px)",
                    zIndex: "0",
                  }}
                ></div>

                {/* Logo */}
                <img
                  src={Logoimg}
                  alt="Imperial Mango"
                  className="relative rounded-full shadow-2xl object-cover"
                  style={{
                    width: "430px",
                    height: "430px",
                    border: "8px solid rgba(255,193,7,0.9)",
                    zIndex: "1",
                    animation: "float 4s ease-in-out infinite",
                  }}
                />
              </div>
            </div>

          </div>
        </div>

        {/* FLOAT ANIMATION */}
        <style>
          {`
            @keyframes float {
              0% {
                transform: translateY(0px);
              }
              50% {
                transform: translateY(-15px);
              }
              100% {
                transform: translateY(0px);
              }
            }
          `}
        </style>
      </section>
    </>
  );
}