import React from 'react';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="text-center p-4 relative mt-[5%]">
            <div className="absolute inset-x-0 top-0 h-[2px]"
                style={{
                    borderImage: "linear-gradient(to right, #6b21a8, #3b82f6, #6b21a8) 1",
                    animation: "borderAnimation 1s infinite",
                }}
            ></div>
            <p>Copyright © {year} by Vanderson de Azevedo. All rights reserved.</p>
        </footer>
    );
}
