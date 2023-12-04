import React from 'react';
import Tables from "./Tables";
function Main(props) {
    return (
        <div className=" lg:px-28 px-10 pb-10">
            <div className="bg-white border border-gray-200 p-10  rounded-xl ">
                <div className="flex items-center justify-between">
                    <div className="rounded-full border-2 w-[600px] overflow-hidden flex items-center">
                        <input id="search" className="w-full outline-0 p-2 px-5" type="text" placeholder="Search..."/>
                        <label htmlFor="search" className="mr-5 flex flex-1 cursor-pointer">
                            <i className="ti ti-search text-gray-600 text-xl"></i>
                        </label>
                    </div>
                    <div className="flex items-center gap-14">
                        <button className="border-2 border-[#1E633F] text-[#1E633F] px-7 py-2 rounded-full font-bold">Add item</button>
                        <i className="ti ti-printer text-[#1E633F] text-4xl cursor-pointer"></i>
                    </div>
                </div>
                <Tables />
            </div>
        </div>
    );
}

export default Main;