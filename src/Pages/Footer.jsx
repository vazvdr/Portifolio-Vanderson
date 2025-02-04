import React from 'react';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="text-center relative justify-center mt-[4%]">
            <div className="absolute inset-x-0"
                style={{
                    borderImage: "linear-gradient(to right, #b4b4bb, #1e297b,  #130250) 4",
                    animation: "borderAnimation 1s infinite",
                }}
            ></div>
            <p className='py-6 font-semibold'>Copyright © {year} by Vanderson de Azevedo. All rights reserved.</p>
        </footer>
    );
}
