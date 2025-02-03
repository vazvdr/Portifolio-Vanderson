import React from 'react';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="text-center relative justify-center mt-[4%]">
            <div className="absolute inset-x-0"
                style={{
                    borderImage: "linear-gradient(to right, #6b21a8, #3b82f6, #6b21a8) 1",
                    animation: "borderAnimation 1s infinite",
                }}
            ></div>
            <p className='py-6 font-semibold'>Copyright © {year} by Vanderson de Azevedo. All rights reserved.</p>
        </footer>
    );
}
