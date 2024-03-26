import React, { useState } from "react";
import { AiFillHeart, AiOutlineClockCircle } from "react-icons/ai";
import { FaEthereum } from "react-icons/fa";
import BidModel from "../../components/Modal/BidModel";
function Card({ item }) {
  const { img, title, price, likes, sale } = item;
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [bitAmount, setBitAmount] = useState(price);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const toggleModel = () => {
    setIsModelOpen(!isModelOpen);
  };
  const handleBidSubmit=()=>{
    const data={
      "name":fullName,
      "email":email,
      "amount":bitAmount
    };
    console.log(data);
    toggleModel();
  };
  return (
    <div className="flex group flex-col space-y-10 items-center rounded-lg overflow-hidden border border-slate-400/10 pb-8 hover:shadow-xl duration-500 ease-in-out hover:shadow-white/5 relative">
      <div className="flex flex-col items-start relative">
        <img src={img} alt={title} className="object-cover" />
        {sale && (
          <div className="flex space-x-2 items-center justify-center px-4 py-1 bg-gradient-to-r from-red-400 via-fuchsia-500 to-indigo-500 rounded-xl absolute bottom-5 left-5">
            <AiOutlineClockCircle />
            <p> 66 : 08 : 19 : 27</p>
          </div>
        )}
      </div>
      <div className="px-6 w-full flex flex-col space-y-3">
        <h3 className="w-full flex justify-center">{title}</h3>
        <div>
          <div className="flex justify-between">
            <div className="flex space-x-2 text-indigo-600 items-center">
              <FaEthereum size={18} />
              <p className="text-sm font-semibold">{price} ETH</p>
            </div>
            <div className="flex space-x-2 text-indigo-600 items-center">
              <AiFillHeart size={18} className="text-red-600" />
              <p className="text-sm text-slate-400 font-semibold">{likes}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute hidden top-1/4 left-1/3 md:right-1/4 md:left-1/4 group-hover:flex animate-bounce transition-all ease-in-out duration-1000">
        <button
          className="text-sm px-6 py-2 bg-indigo-600 rounded-md hover:bg-indigo-700"
          onClick={() => toggleModel()}
        >
          Place bit
        </button>
      </div>
      <BidModel
        isOpen={isModelOpen}
        onClose={toggleModel}
        onBidSumbit={handleBidSubmit}
        fullName={fullName}
        setFullName={setFullName}
        email={email}
        setEmail={setEmail}
        bidAmount={bitAmount}
        setBidAmount={setBitAmount}
      />
    </div>
  );
}

export default Card;
