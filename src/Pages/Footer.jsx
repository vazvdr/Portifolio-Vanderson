import React from 'react';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="text-center relative justify-center mt-[4%]">
            <div className="header-line absolute inset-x-0 bottom-18 h-[1px]"></div>
            <p className='py-6 font-semibold'>Copyright © {year} by Vanderson de Azevedo. All rights reserved.</p>
        </footer>
    );
}
