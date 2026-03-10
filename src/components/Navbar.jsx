import logo from "../assets/logo.png"; 

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full  h-18 bg-black/80 backdrop-blur-xl bg-fixed border-b border-white/10 transition-all duration-300">

      <div className="h-full px-8 flex justify-between items-center">
        
        {/* Logo */}
        <a href="#" className="flex items-center group">
          <img 
            src={logo} 
            alt="Logo" 
            className="h-40 w-auto transition-transform duration-300 group-hover:scale-110"
          />
        </a>

        {/* Menu */}
        <ul className="flex items-center space-x-10 text-white font-bold text-sm">
          {["Home", "News" , "About Us", "Products & Service", "Contact Us"].map((item, index) => (
            <li key={index} className="relative group cursor-pointer">
              <a href="#" className="transition-colors duration-300 group-hover:text-blue-500">
                {item}
              </a>

              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

      </div>
    </nav>
  )
}

export default Navbar;
