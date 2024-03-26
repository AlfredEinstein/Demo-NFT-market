import React from "react";
import Model from "./Model";

function BidModel({
  isOpen,
  onClose,
  onBidSumbit,
  fullName,
  setFullName,
  email,
  setEmail,
  bidAmount,
  setBidAmount,
}) {
  const handleSubmit=(e)=>{
    e.preventDefault()
    onBidSumbit();
  }
  return (
    <Model isOpen={isOpen} onClose={onClose}>
      <div className="p-5">
        <h1 className="capitalize text-2xl font-bold mb-4 text-gray-500">
          Place your bit
        </h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your Full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="border p-2 mb-4 w-full text-gray-500"
          required
        />
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 mb-4 w-full text-gray-500"
          required
        />
        <input
          type="number"
          placeholder="Enter your Bid amount"
          value={bidAmount}
          onChange={(e) => setBidAmount(e.target.value)}
          className="border p-2 mb-4 w-full text-gray-500"
          required
        />
        <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">Submit Bid</button>
      </form>
    </Model>
  );
}

export default BidModel;
