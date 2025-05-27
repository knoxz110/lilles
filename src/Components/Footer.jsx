import { AiOutlineInstagram, AiOutlineTwitter, AiFillYoutube, AiFillMail } from 'react-icons/ai'
import { PiXLogoLight } from 'react-icons/pi'
import { FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-black/80 text-white  py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 border-b border-gray-700 pb-10">
        <div>
          <h5 className="text-lg font-semibold mb-4">Company</h5>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline hover:text-[#ffd700]">About Us</a></li>
            <li><a href="#" className="hover:underline hover:text-[#ffd700]">Careers</a></li>
            <li><a href="#" className="hover:underline hover:text-[#ffd700]">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h5 className="text-lg font-semibold mb-4">Support</h5>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline hover:text-[#ffd700]">Help Center</a></li>
            <li><a href="#" className="hover:underline hover:text-[#ffd700]">Safety Center</a></li>
          </ul>
        </div>

        <div>
          <h5 className="text-lg font-semibold mb-4">Legal</h5>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline hover:text-[#ffd700]">Cookies Policy</a></li>
            <li><a href="#" className="hover:underline hover:text-[#ffd700]">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline hover:text-[#ffd700]">Terms of Service</a></li>
            <li><a href="#" className="hover:underline hover:text-[#ffd700] ">Dispute Resolution</a></li>
          </ul>
        </div>

        <div>
          <h5 className="text-lg font-semibold mb-4">Stay Updated</h5>
          <form className="space-y-3">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 rounded bg-[#fff] text-[#000] placeholder-[#000] focus:outline-none"
            />
            <button
              type="submit"
              className="w-full bg-[#ffd700] text-black py-2 rounded hover:bg-gray-300 text-sm hover:text-[#ffd700] transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mt-6 gap-4 px-4">
        <p className="text-sm text-gray-400">&copy; {year} LILIES. All rights reserved.</p>
        <div className="flex space-x-4 text-xl">
          <a href="#" className="hover:text-green-500"><FaWhatsapp /></a>
          <a href="#" className="hover:text-pink-400"><AiOutlineInstagram /></a>
          <a href="#" className="hover:text-red-600"><AiFillMail /></a>
          <a href="#" className="hover:text-blue-400"><PiXLogoLight /></a>
          <a href="#" className="hover:text-red-600"><AiFillYoutube /></a>
          
        </div>
      </div>
    </footer>
  )
}

export default Footer
