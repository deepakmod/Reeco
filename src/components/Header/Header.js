import React from 'react';

function Header(props) {
    return (
        <div className="bg-white lg:px-28 px-10 z-10 py-5  flex flex-col gap-5" style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
            <div className="flex gap-3 items-center text-lg font-medium  text-gray-500 cursor-pointer">
                <span>Orders</span>
                <span className="material-symbols-outlined">
                arrow_forward_ios
                </span>
                <span className="underline underline-offset-2">Order 32457ABC</span>
            </div>
            <div className="flex items-center justify-between">
                <div className="font-bold text-4xl text-gray-700 ">Order 32457ABC</div>
                <div className="flex items-center gap-4">
                    <button className="border-2 border-[#1E633F] text-[#1E633F] px-7 py-2 rounded-full font-bold">Back</button>
                    <button className="bg-[#1E633F] text-white px-7 py-2 rounded-full font-bold">Approve Order</button>
                </div>
            </div>
        </div>
    );
}

export default Header;