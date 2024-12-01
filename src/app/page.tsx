"use client"
import React, { useState } from 'react';
import coder from "@/app/Public/coder.jpg"

const Home = () => {
    const [expression, setExpression] = useState<string>("");

    const handleClick = (value: string) => {
        if (value === '=') {
            try {
                const result = eval(expression); // Caution: Use a safer alternative in production
                setExpression(result.toString());
            } catch (error) {
                console.error("Error evaluating the expression", error);
                setExpression("Error");
            }
        } else if (value === 'C') {
            setExpression("");
        } else {
            setExpression(expression + value);
        }
    };
 
    return (
        <div
              className="bg-cover bg-center w-full h-screen opacity-70"
              style={{ backgroundImage: `url(${coder.src})`}}>
                <div>
            <center>
                <div className='bg-gradient-to-r from-[#b8cbb8]  via-[#cf6cc9] to-[#ee609c] w-[700px] rounded-lg py-10'><h1 className="text-center text-6xl font-black text-white">Welcome to Calculate Me!</h1></div>
            </center>
            <div className="flex justify-center">
                <div className="flex justify-center bg-gradient-to-r from-[#b8cbb8]  via-[#cf6cc9] to-[#ee609c] w-[350px] h-[520px] rounded-lg mt-40 scale-125">
                    <div id="row" className="mt-8">
                        {/* Display the expression */}
                        <input
                            id="input"
                            className="border-solid border-[1px] border-yellow-100 rounded-lg w-full p-5 mb-4 text-left text-gray-900 text-xl"
                            type="text"
                            value={expression}
                            readOnly
                        />
                        <center>
                            <div className="w-[300px] h-[1px] bg-white opacity-50" />
                        </center>
                        <div id="row" className="space-y-6 mt-5">
                            {[
                                ['C', '%', 'M+', 'M-'],
                                ['7', '8', '9', '/'],
                                ['4', '5', '6', '*'],
                                ['1', '2', '3', '+'],
                                ['0', '=', '.', '-'],
                            ].map((row, rowIndex) => (
                                <div key={rowIndex} className="flex justify-center space-x-6">
                                    {row.map((button) => (
                                        <button
                                            key={button}
                                            className="border-solid border-[1px] border-yellow-100 opacity-90 rounded-lg h-5 w-5 py-10 px-10 bg-gradient-to-r from-pink-400 to-purple-400 text-center text-2xl hover:bg-gradient-to-r hover:from-red-400 hover:to-blue-400"
                                            onClick={() => handleClick(button)}
                                        >
                                            {button}
                                        </button>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Home;
