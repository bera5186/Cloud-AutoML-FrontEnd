import React from "react";

// custom css
// import "./pricing.homepage.styles.css"

const Pricing = () => {
    return(
        <div className="container flex items-center justify-between">
            <div className="wrapper hover-grad w-1/3 mx-5 flex flex-col justify-center items-center bg-white shadow-md bg-gradient-to-br hover:from-pink-500 hover:to-orange-500 transition-all duration-500 ease-in">
                <h3 className="text-2xl">
                    Basic
                </h3>
                <section className="flex justify-around items-baseline my-3">
                    <span className="text-base">$</span>
                    <h1 className="text-5xl font-bold">
                        50
                    </h1>
                </section>
                <ul className="divide-y-2">
                    <li>Lorem Ipsum , Blah</li>
                    <li>Lorem Ipsum , Blah</li>
                    <li>Lorem Ipsum , Blah</li>
                    <li>Lorem Ipsum , Blah</li>
                </ul>
                
            </div>

            <div className="wrapper hover-grad w-1/3 mx-5 flex flex-col justify-center items-center bg-white shadow-md bg-gradient-to-br hover:from-pink-500 hover:to-orange-500 transition-all duration-500 ease-in">
                <h3 className="text-2xl">
                    Basic
                </h3>
                <section className="flex justify-around items-baseline my-3">
                    <span className="text-base">$</span>
                    <h1 className="text-5xl font-bold">
                        50
                    </h1>
                </section>
                <ul className="divide-y-2">
                    <li>Lorem Ipsum , Blah</li>
                    <li>Lorem Ipsum , Blah</li>
                    <li>Lorem Ipsum , Blah</li>
                    <li>Lorem Ipsum , Blah</li>
                </ul>
                
            </div>

            <div className="wrapper hover-grad w-1/3 mx-5 flex flex-col justify-center items-center bg-white shadow-md bg-gradient-to-br hover:from-pink-500 hover:to-orange-500 transition-all duration-500 ease-in">
                <h3 className="text-2xl">
                    Basic
                </h3>
                <section className="flex justify-around items-baseline my-3">
                    <span className="text-base">$</span>
                    <h1 className="text-5xl font-bold">
                        50
                    </h1>
                </section>
                <ul className="divide-y-2">
                    <li>Lorem Ipsum , Blah</li>
                    <li>Lorem Ipsum , Blah</li>
                    <li>Lorem Ipsum , Blah</li>
                    <li>Lorem Ipsum , Blah</li>
                </ul>
                
            </div>
        </div>
    );
};

export default Pricing;