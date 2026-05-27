export default function MangoBox({ name, url, price, kg }) {
  return (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:scale-105 transition duration-300 border border-yellow-100">

      {/* Image */}
      <div className="relative">
        <img
          src={url}
          alt={name}
          className="w-full h-72 object-cover"
        />

        <span className="absolute top-4 left-4 bg-yellow-500 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg">
          Premium Quality
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          {name}
        </h2>

        <p className="text-gray-600 text-base leading-relaxed mb-4">
          Sweet, juicy, and farm-fresh {name} mangoes directly from premium farms of Pakistan.
        </p>

        {/* Price */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-sm text-gray-500">Starting From</p>
            <h3 className="text-3xl font-bold text-yellow-600">
              Rs. {price}
            </h3>
          </div>

          <div className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-xl text-sm font-semibold">
            {kg} KG Box
          </div>
        </div>

        {/* Button */}
        <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-4 rounded-2xl shadow-lg transition duration-300 text-lg">
          Order Now
        </button>
      </div>
    </div>
  );
}
