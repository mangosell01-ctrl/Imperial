import React, { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    mango: "",
    quantity: "",
  });

  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleBlur = (e) => {
    setTouched({ ...touched, [e.target.name]: true });
  };

  const isEmpty = (field) => touched[field] && !form[field];

  const handleOrder = (e) => {
    e.preventDefault();

    // ❌ Stop if any empty
    if (Object.values(form).some((v) => !v)) {
      return;
    }

    const sellerNumber = "923001234567";

    const message = `
🍋 New Mango Order

Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Address: ${form.address}

Mango: ${form.mango}
Quantity: ${form.quantity} KG
`;

    const url = `https://wa.me/${sellerNumber}?text=${encodeURIComponent(message)}`;

    window.location.href = url;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-yellow-50 px-4">

      <form
        onSubmit={handleOrder}
        className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-md border my-5 border-yellow-100"
      >

        <h2 className="text-3xl font-bold text-yellow-700 text-center mb-6">
          Mango Order Form 🍋
        </h2>

        {/* NAME */}
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Your Name"
          className={`w-full mb-3 p-3 border rounded-xl outline-none transition
          ${isEmpty("name") ? "border-red-500 focus:ring-red-400 focus:ring-2" : "focus:ring-yellow-400 focus:ring-2"}`}
        />

        {/* EMAIL */}
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Your Email"
          className={`w-full mb-3 p-3 border rounded-xl outline-none transition
          ${isEmpty("email") ? "border-red-500 focus:ring-red-400 focus:ring-2" : "focus:ring-yellow-400 focus:ring-2"}`}
        />

        {/* PHONE */}
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Phone Number"
          className={`w-full mb-3 p-3 border rounded-xl outline-none transition
          ${isEmpty("phone") ? "border-red-500 focus:ring-red-400 focus:ring-2" : "focus:ring-yellow-400 focus:ring-2"}`}
        />

        {/* ADDRESS */}
        <textarea
          name="address"
          value={form.address}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Full Address"
          className={`w-full mb-3 p-3 border rounded-xl h-24 resize-none outline-none transition
          ${isEmpty("address") ? "border-red-500 focus:ring-red-400 focus:ring-2" : "focus:ring-yellow-400 focus:ring-2"}`}
        />

        {/* MANGO */}
        <select
          name="mango"
          value={form.mango}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`w-full mb-3 p-3 border rounded-xl outline-none transition
          ${isEmpty("mango") ? "border-red-500 focus:ring-red-400 focus:ring-2" : "focus:ring-yellow-400 focus:ring-2"}`}
        >
          <option value="">Select Mango Variety</option>
          <option value="Sindhri">Sindhri</option>
          <option value="Chaunsa">Chaunsa</option>
          <option value="Anwar Ratol">Anwar Ratol</option>
        </select>

        {/* QUANTITY */}
        <input
          name="quantity"
          type="number"
          value={form.quantity}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Quantity (KG)"
          className={`w-full mb-5 p-3 border rounded-xl outline-none transition
          ${isEmpty("quantity") ? "border-red-500 focus:ring-red-400 focus:ring-2" : "focus:ring-yellow-400 focus:ring-2"}`}
        />

        {/* BUTTON */}
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-xl transition"
        >
          Place Order 🍋
        </button>

      </form>

    </div>
  );
};

export default ContactForm;