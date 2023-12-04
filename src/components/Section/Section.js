import React from 'react';

function Section(props) {
    return (
        <div className=" lg:px-28 px-10 py-8">
            <div className="bg-white border border-gray-200 p-6 flex items-stretch rounded-xl justify-around">
                <div className="flex flex-col flex-1 border-r-2 px-8">
                    <span className="font-medium text-lg text-gray-500">Supplier</span>
                    <span className="text-xl text-gray-700 font-bold">East coast fruits</span>
                    <span className="text-xl text-gray-700 font-bold">& vegetables</span>
                </div>
                <div className="flex flex-col  flex-1  border-r-2  px-8">
                    <span className="font-medium text-lg text-gray-500">Shipping Date</span>
                    <span className="text-xl text-gray-700 font-bold">Thu, Feb 10</span>
                </div>
                <div className="flex flex-col border-r-2  flex-1  px-8">
                    <span className="font-medium  text-lg text-gray-500">Total</span>
                    <span className="text-xl text-gray-700 font-bold">$ 15,0285.3</span>
                </div>
                <div className="flex flex-col border-r-2  flex-1  px-8">
                    <span className="font-medium text-lg text-gray-500">Category</span>

                    <div className="flex gap-4  text-gray-700 pt-2">
                        <span className="material-symbols-outlined">
                        grocery
                        </span>

                        <span className="material-symbols-outlined">
                        liquor
                        </span>

                        <span className="material-symbols-outlined">
                        ac_unit
                        </span>

                        <span className="material-symbols-outlined">
                        cake
                        </span>
                    </div>

                </div>
                <div className="flex flex-col border-r-2  flex-1  px-8">
                    <span className="font-medium  text-lg text-gray-500">Department</span>
                    <span className="text-xl text-gray-700 font-bold">300-444-678</span>
                </div>
                <div className="flex flex-col  flex-1  px-8">
                    <span className="font-medium text-lg text-gray-500">Status</span>
                    <span className="text-xl text-gray-700 font-bold">Awaiting your</span>
                    <span className="text-xl text-gray-700 font-bold">approval</span>
                </div>
            </div>
        </div>
    );
}

export default Section;