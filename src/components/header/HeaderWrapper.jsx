import { useHeader } from "../../hooks/useHeader";
import HeaderMobile from "./HeaderMobile";
import HeaderDesktop from "./HeaderDesktop";
import { SiAlienware } from "react-icons/si";

const HeaderWrapper = () => {
    const header = useHeader();

    return (
        <>
            <header className="fixed top-0 left-0 w-full z-50 h-[70px] flex justify-between items-center backdrop-blur-lg">
                <div className="header-line absolute inset-x-0 bottom-0 h-[1.5px]"></div>
                <a href="/" className="flex items-center">
                    <SiAlienware size={50} />
                    <span className="w-[30px] h-38 font-bold text-lg  text-center" style={{ fontFamily: "DoctorGlitch" }}>
                        {header.t("header.developer")}
                    </span>
                </a>

                <HeaderMobile {...header} />
                <HeaderDesktop {...header} />
            </header>

            {header.showScrollButton && (
                <button
                    onClick={header.scrollToTop}
                    className="scroll-to-top-button w-10 h-10 fixed bottom-28 mr-[1%] p-2 shadow-lg 
          rounded-lg transform hover:scale-110 transition duration-300 border border-zinc-400 z-50"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mx-auto text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                    </svg>
                </button>
            )}
        </>
    );
};

export default HeaderWrapper;