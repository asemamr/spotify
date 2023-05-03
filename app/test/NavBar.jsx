"use client"
import { useEffect, useRef, useState } from "react";

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const ref = useRef();

  
  useEffect(() => {
    function changeColor(e) {
      
      if (ref.current.scrollTop >= 200) {
        setNavbar(true)
      }
      else {
        setNavbar(false)
      }
    }
    
      ref.current.addEventListener("scroll", changeColor, true);
    
    return ref.current.removeEventListener("scroll", changeColor)
  })

  return ( 
    <div className={`overflow-y-scroll h-screen `} ref={ref}>
      <div className={`grid grid-cols-4 h-14 bg-transparent fixed top-0 w-full justify-center items-center ${navbar && "bg-white"} transition-colors duration-500`}>
        <h2>Home</h2>
        <h2>Main</h2>
        <h2>About</h2>
        <h2>Contact</h2>
      </div>
      <div className="h-screen bg-green-400"></div>
      <div className="h-screen bg-blue-400"></div>
    </div>
   );
}

export default NavBar;