import logo from "../../assets/logo.svg";
const Navbar = () => {
    return (
        <nav  className="bg-[#1E633F] text-slate-300 text-2xl sticky top-0 left-0 right-0" >
            <div className="flex items-center justify-between lg:px-28 px-10 py-6 ">
                <div className="flex items-center gap-20">
                    <img
                        src={logo}
                        alt="keep"
                        width="100"
                        height="40"
                    />
                    <div className="lg:flex hidden items-center justify-between gap-16">
                        <button className="hover:text-white" > Store</button>
                        <button className="hover:text-white" > Orders</button>
                        <button className="hover:text-white" > Analytics</button>
                    </div>
                </div>

                <div className="flex gap-2">

                    <span className="material-symbols-outlined lg:hidden flex ">
                        menu
                    </span>

                    <div className="lg:flex hidden items-center justify-between gap-16">
                        <div className="relative">
                            <div className="absolute top-0 rounded-full bg-[#3DCA72] text-[8px] z-10 px-[4px] leading-4 ">12</div>
                            <span className="material-symbols-outlined cursor-pointer hover:text-white text-4xl" style={{transform: "scaleX(-1)"}}>
                                shopping_cart
                            </span>
                        </div>
                        <button className="hover:text-white flex items-center gap-1" >
                            <span>Hello, James</span>
                            <span className="material-symbols-outlined">expand_more</span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
