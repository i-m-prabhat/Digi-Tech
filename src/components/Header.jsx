import React,{useState} from 'react'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'

function Header() {
    const [toggle,setToggle] = useState(false);

  return (
    <div className='bg-[#4a62ff] p-4'>
      <div className="max-w-[1240px] py-[10px] items-center flex justify-between mx-auto">
        <div className='text-3xl font-bold'>
            DiGi Tech
        </div>
{
    toggle ?
     <AiOutlineClose onClick={()=> setToggle(!toggle)} className='text-2xl text-white md:hidden block'/>
     :       
        <AiOutlineMenu onClick={()=> setToggle(!toggle)} className='text-2xl text-white md:hidden block'/>
}
       
        <ul className='md:flex hidden text-white gap-10'>
            <li>Home</li>
            <li>Company</li>
            <li>Resource</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        {/* Responsive menu */}
        <ul className='md:hidden text-white fixed w-full h-screen
         bg-black left-[-100%] top-[87px]'>
            <li className='p-5'>Home</li>
            <li className='p-5'>Company</li>
            <li className='p-5'>Resource</li>
            <li className='p-5'>About</li>
            <li className='p-5'>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Header