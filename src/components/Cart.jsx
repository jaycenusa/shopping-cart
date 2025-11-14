import { useState } from "react";
import { Link } from "react-router-dom";
const Checkout = () => {
    const [open, setOpen] = useState(false);
  
//   const total = cart.reduce((accumulator, prod) => {
//     return accumulator + (prod.qty * products[prod.id].price);
//   }, 0);

  return (
    <div className="min-h-80 rounded px-3 py-4 bg-white border border-[#F1DFE4] flex flex-col justify-center grow">
      {/* <BasicModal open={open} onClose={() => setOpen(false)} /> */}
      <p className="text-xl font-bold">Order Summary</p>
      <div className="flex justify-between mb-4 mt-4">
        <p className="text-[#686163] ">Subtotal</p>
        <p className="text-[#686163] ">0</p>
      </div>
      <div className="flex justify-between mb-4">
        <p className="text-[#686163]">Shipping</p>
        <p className="text-[#686163]">FREE</p>
      </div>
      <hr className="bg-[#F4E6EA] h-px border-0 mb-4" />
      <div className="flex justify-between">
        <p className="font-bold text-xl ">Total</p>
        <p className="text-[#FF1F4A] font-bold text-xl">$0</p>
      </div>
      <div className="mt-4 flex flex-col gap-4">
        {/* <Link onClick={() => setOpen(true)} className="bg-[#261675] text-white rounded-xl w-full py-3 font-bold cursor-pointer hover:bg-[#3B2D83] text-center">Proceed to Checkout</Link> */}
        <Link to="/shop" className="bg-[#E3E6FA] text-black rounded-xl w-full py-3 font-bold cursor-pointe text-center">Continue Shopping</Link>
      </div>
    </div>
  )
}

const Cart = () => {
    return (
      <div className="text-black bg-[#F9F8F8] px-6 py-10 mb-10 h-screen">
        <h1 className="mb-6 text-4xl font-extrabold">Shopping Cart</h1>
        <div className="flex gap-4 flex-wrap justify-center items-start">
          <div className="min-w-[65%] rounded-xl grow border bg-white border-[#F1DFE4]">
            <div className="flex gap-2 justify-between border-b w-full p-4 bg-[#F9F9FE] border-[#F1DFE4] font-bold">
              <p className="w-[45%]">Product</p>
              <p className="flex-1">Price</p>
              <p className="flex-1">Quantity</p>
              <p className="flex-1">Actions</p>
            </div>
          </div>
          <Checkout
          />
        </div>
      </div>
  )
}

export default Cart;