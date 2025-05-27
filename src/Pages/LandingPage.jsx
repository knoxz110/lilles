import React from 'react'
import landing1 from '../assets/1mg9.png'
import landing2 from '../assets/img9.png'
import landing3 from '../assets/img10.png'
import landing4 from '../assets/img11.png'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    const fullText = 'Order food anytime, anywhere';
    const [typedText, setTypedText] = useState('');
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      if (index < fullText.length) {
        const timeout = setTimeout(() => {
          setTypedText((prev) => prev + fullText[index]);
          setIndex(index + 1);
        }, 80);
        return () => clearTimeout(timeout);
      }
    }, [index, fullText]);
return (
    <div className=' w-[100%]  pt-[100px] ' >
        <header className="w-full min-h-[200px] flex items-center      justify-center md:hidden "
        >
            <div className="header-text pt-2 mx-5 flex flex-col items-center"
            >
                <h1 className="text-4xl text-[#ffd700] px-2.5">
                {typedText}
                <span className="animate-pulse">|</span>
                </h1>

                {index >= fullText.length && (
            <>
                <p className="text-[#fff] italic font-thin pt-2.5 text-[16px] px-5.5 opacity-0 animate-fade-in-up"
                >
                    Craving something delicious? Browse through our handpicked specials and treat yourself to meals that are tasty, affordable, and delivered lightning-fast. <span className='hidden md:block' >Whether you're working late or relaxing at home, we've got you covered. Sign in now to explore our full menu and place your order in seconds!</span> 
        
                </p>

                <Link
                to="/login"
                className="border text-[#002e2c] bg-[#ffd700] border-[#f7d308] py-2 mt-5 px-5 rounded
                animate-fade-in-up-delayed hover:bg-[#00302E] hover:text-[#ffd700] mb-8 
                shadow-lg hover:shadow-[#002e2c] transition duration-300 animate-glow"
                >
                    Login
                </Link>
            </>
            )}
    </div>
</header>

    <div className="w-[70%] relative mt-14 justify-center mx-auto mb-10 flex flex-col items-center md:mt-[150px] md:flex-row md:w-[35%] md:px-10 md:gap-5"
    >
        <img src={landing1} alt="chow....." className="block mx-auto mb-4 rounded-tr-[35%] md:w-[75%] "  />

        <img src={landing2} alt="chow....." className="block mx-auto mb-4  rounded-t-[47%] md:w-[75%]  " />

        <img src={landing3} alt="chow......" className="block mx-auto mb-4 rounded-t-[47%] md:w-[75%]  " />
        
        <img src={landing4} alt="chow......" className="block mx-auto rounded-tl-[35%] md:w-[75%] mb-4 " />
    </div>
    <header className="w-full min-h-[200px] hidden md:block items-center justify-center"
    >
        <div className="header-text pt-2  mx-5 flex flex-col items-center">
            <h1 className="text-4xl text-[#ffd700] px-2.5"
            >
                {typedText}
                <span className="animate-pulse">|</span>
            </h1>

            {index >= fullText.length && (
            <>
                <p className="text-[#fff] italic font-thin pt-2.5 text-[16px] px-5.5 opacity-0  animate-fade-in-up"
                >
                    Craving something delicious? Browse through our handpicked specials and treat yourself to meals that are tasty, affordable, and delivered lightning-fast. 
                    <span className='hidden md:block'
                     >Whether you're working late or relaxing at home, we've got you covered. Sign in now to explore our full menu and place your order in seconds!
                    </span> 
                </p>

                <Link
                to="/login"
                className="border text-[#002e2c] bg-[#ffd700] border-[#f7d308] py-2 mt-5 px-5 rounded
                animate-fade-in-up-delayed hover:bg-[#00302E] hover:text-[#ffd700] mb-8 
                shadow-lg hover:shadow-[#002e2c] transition duration-300 animate-glow"
                >
                 Login
                </Link>
            </>
            )}
        </div>
    </header>
        
    </div>
  )
}

export default LandingPage