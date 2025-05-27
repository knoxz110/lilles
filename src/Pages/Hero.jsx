import { useState } from 'react'
import { Link } from 'react-router-dom'
import img1 from '../assets/smack.png'
import img2 from '../assets/img8.png'
import img3 from '../assets/img12.png'
import img4 from '../assets/img7.png'
import img5 from '../assets/chef.png'
import { PlayIcon } from 'lucide-react'
import { ArrowBigRightDashIcon } from 'lucide-react'
import { ArrowBigLeftDashIcon } from 'lucide-react'


 const testimonials = [
  { name: "Sophia R.", quote: "The pasta was heavenly! I can't wait to come back.", role: "Food Blogger" },
  { name: "David M.", quote: "Cozy vibes, friendly staff, and amazing steaks.", role: "Local Guide" },
  { name: "Liam K.", quote: "Best Sunday brunch I've had in years!", role: "Regular Customer" },
  { name: "Emma G.", quote: "The desserts are to die for. Highly recommend the tiramisu!", role: "Pastry Enthusiast" },
  { name: "James T.", quote: "Fresh ingredients, beautiful plating, and rich flavors.", role: "Chef" },
  { name: "Olivia B.", quote: "A must-visit for any food lover in town.", role: "Travel Blogger" },
  { name: "Noah C.", quote: "Great service and even better wine list.", role: "Wine Connoisseur" },
  { name: "Ava L.", quote: "The ambiance and the risotto were unforgettable.", role: "Event Planner" },
  { name: "William F.", quote: "This place is a hidden gem!", role: "Neighborhood Resident" },
];

const Hero = () => {
   
      const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(testimonials.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const startIndex = currentSlide * itemsPerSlide;
  const currentTestimonials = testimonials.slice(startIndex, startIndex + itemsPerSlide);

  return (
    <div className='bg-white ' >
        <div className='mt-10  '>
            <div className='block md:flex md:items-center md:px-8'
            >
                <section className="block ml-9.5 pt-13 md:pt-6"
                >
                    <h1 className="text-3xl  sm:text-5xl font-bold mb-3 md:max-w-120 text-[#00302e]">
                        Eat Good Food to Live a Happier Life Today!
                    </h1>
                    <p className="text-base sm:text-lg max-w-110 text-gray-700">
                    Nourish your body with wholesome meals and experience the joy of better health, more energy, and a brighter mood because good food is the first step to a happier you.
                    </p>
                    <Link to="/menu" className="mt-6 inline-block bg-[#00302e] text-white text-sm sm:text-base font-medium py-4 px-6 rounded-full shadow-md hover:bg-[#002522] transition"
                    >
                        Get Started
                    </Link>
                </section>
                <div className=' md:flex justify-center items-center'>
                    <img src={img1} alt="food" className='w-[45%] h-auto md:w-[50%]  rounded-tr-[35%] rotate-90 ml-29 md:ml-50 rounded-bl-[35%] md:rounded-bl-[0%] md:rounded-tr-[0%]' />
                </div>
            </div>
            <div className='block items-center text-center justify-center md:px-'>
                <h2 className='text-[35px] py-2 font-semibold ' >Our Special Dish</h2>
                <p className='text-[17px] text-[#a59393d8] pb-6 ' 
                >
                    Made with the best ingredients
                </p>
                <div className='block md:flex px-[14%] pr-16 items-center w-[100%] justify-center md:gap-10 md:px-18'
                >
                    <div className=' w-[106%] items-center justify-center block  h-[380px] rounded-4xl mb-9 ' 
                    >
                         <div className="  bg-contain bg-no-repeat bg-center w-full h-[160px] mb-12 "  style={{ backgroundImage: `url(${img2})` }}
                        ></div>
                         <p className='text-[18px] font-medium italic px-4 '>
                         Perfectly cooked Jollof rice served with tender chicken and golden, crispy fried plantains — a truly delicious experience.
                        </p> 
                    </div>
                    <div className=' w-[106%] items-center justify-center block h-[380px] rounded-4xl mb-12 shadow-2xl   ' 
                    >
                         <div className="  bg-contain  bg-no-repeat bg-center w-[94%] mr-4 h-[160px] mb-12 "  style={{ backgroundImage: `url(${img3})` }}
                        ></div>
                         <p className='text-[17px] px-4 font-medium italic '>
                         Enjoy a generous plate of perfectly cooked Jollof spaghetti topped with tender meatballs so rich, savory — a classic made to satisfy.
                        </p> 
                    </div>
                    <div className=' w-[106%] items-center justify-center mb-12 block h-[380px] rounded-4xl   ' 
                    >
                         <div className="  bg-contain bg-no-repeat bg-center w-full h-[160px] mb-12 "  style={{ backgroundImage: `url(${img4})` }}
                        ></div>
                         <p className='text-[18px] font-medium italic px-4 '>
                         Delight in a wholesome serving of soft Eba paired with rich, flavorful vegetable soup — a true taste of home and tradition.
                        </p> 
                    </div>
                   
                </div>
            </div>
            <div className='block items-center  text-center mb-[37px] bg-[conic-gradient(at_top_right,_white,_#e1e1f15b)] justify-center md:px-'
            >
              <h2 className='text-[35px]  py-2 font-semibold ' >Our Popular Menu</h2>
              <p className='text-[17px] text-[#a59393d8] pb-6 ' 
              >
                  Made with the best ingredients
              </p>
              <div 
                className='block  md:flex px-[14%] pr-16 items-center w-[100%] justify-center md:gap-10    md:px-18'
              >
                    <div className='  items-center max-w-sm w-full justify-center block h-[380px] rounded-4xl mb-12 bg-white shadow-2xl' 
                    >
                         <div className="  bg-contain bg-no-repeat bg-center w-full h-[160px] mb-12 "  style={{ backgroundImage: `url(${img2})` }}
                        ></div>
                         <p className='text-[18px] font-medium italic px-4 '>
                         Perfectly cooked Jollof rice served with tender chicken and golden, crispy fried plantains — a truly delicious experience.
                        </p> 
                    </div>
                    <div className=' w-[106%] items-center justify-center block h-[380px] rounded-4xl mb-12 bg-white shadow-2xl   ' 
                    >
                         <div className="  bg-contain  bg-no-repeat bg-center w-[94%] mr-4 h-[160px] mb-12 "  style={{ backgroundImage: `url(${img3})` }}
                        ></div>
                         <p className='text-[17px] px-4 font-medium italic '>
                         Enjoy a generous plate of perfectly cooked Jollof spaghetti topped with tender meatballs so rich, savory — a classic made to satisfy.
                        </p> 
                    </div>
                    <div className='w-[106%] items-center justify-center block h-[380px] rounded-4xl mb-12 bg-white shadow-2xl'
                    >
                         <div className="  bg-contain bg-no-repeat bg-center w-full h-[160px] mb-12 "  style={{ backgroundImage: `url(${img4})` }}
                        ></div>
                         <p className='text-[18px] font-medium italic px-4 '>
                         Delight in a wholesome serving of soft Eba paired with rich, flavorful vegetable soup — a true taste of home and tradition.
                        </p> 
                    </div>
                   
                </div>
                <Link to="/menu"
                    className=" bg-[#00302e] w-[190px] text-white  items-center mb-[20px] justify-center md:ml-[43%] ml-[29%]  rounded-4xl flex py-4.5 hover:bg-white hover:text-[#00302e] transition"
                >
                 <p>Load more menu</p>  <PlayIcon className="hidden md:flex w-5 h-5 cursor-pointer" />
                </Link>
                 <div className='h-4' ></div>
            </div>
           
           
            <div className='flex md:flexitems-center justify-center mb-7 ml-3.5 md:ml-0 md:gap-20  '>
                <div>
                    <h2 
                    className="text-[24px] mb-3 md:mt-12 sm:text-3xl font-bold  md:max-w-120 text-[#00302e]"
                    >
                        Taste The Passion Of Our Chefs In Every Dish
                    </h2>
                    <p className="text-base sm:text-lg max-w-110 text-gray-700">
                    Nourish your body with wholesome meals and experience the joy of better <span className='hidden md:flex' >flavorful vegetable soup — a true taste of home and tradition.</span>
                    </p>
                </div>
                <div>
                    <img src={img5} alt="food" className='w-[115%] md:w-[70%] hidden md:mb-10 md:ml-20 mb-4 ' />
                </div>
                
            </div>
             <div className=" py-4 px-4">
      <h2 className="text-4xl font-bold text-center text-[#00302e] mb-8">
        What Our Diners Say
      </h2>

      <div className="flex flex-wrap justify-center gap-6 mb-8">
        {currentTestimonials.map((t, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-6 max-w-sm w-full text-center border "
          >
            <p className="text-gray-600 italic mb-4">"{t.quote}"</p>
            <h4 className="text-lg font-semibold text-[#00302e]">{t.name}</h4>
            <p className="text-sm text-amber-500">{t.role}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-4">
        <button
          onClick={prevSlide}
          className="bg-[#00302e] text-white px-4 py-2 rounded hover:bg-[#00452e]  transition"
        >
          <ArrowBigLeftDashIcon className="w-5 h-5 inline-block mr-2" />
        </button>
        <button
          onClick={nextSlide}
          className="bg-[#00302e] text-white px-4 py-2 rounded hover:bg-[#00452e] transition"
        >
          <ArrowBigRightDashIcon className="w-5 h-5 inline-block mr-2" />
        </button>
      </div>
    </div>

        </div>
    </div>
  )
}

export default Hero