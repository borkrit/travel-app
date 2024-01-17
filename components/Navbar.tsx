'use client'

import Image from "next/image"
import Link from "next/link"
import logo from '@/public/hilink-logo.svg'
import mobileIcon from '@/public/menu.svg'
import Button from "./Button";
import MobileNavbar from "./MobileNavbar";
import { useState } from "react"
import { MENU_LINK } from "@/constants"



const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    const handleOpenMenu = ()=>{
        setIsOpen(!isOpen)
    }


  return (
    <>
    <nav className="flexBetween max-container padding-container relative z-30 py-5 " >
        <Link href='/'>
            <Image src={logo} alt="Logo"  width={74}  height={29} />
        </Link>

        <ul className=" hidden h-full gap-12 lg:flex ">
        {
            MENU_LINK.map(link=>(
                <Link key={link.key} href={link.href} className="flexCenter hover:font-bold" >
                    {link.label}
                </Link>
            ))
        }
        </ul>

        <div className="hidden lg:flexCenter">
            <Button type="button" title="Login" icon="/user.svg" variant="btn_dark_green" />
        </div>

        <Image 
            src={mobileIcon} 
            alt="menu" 
            className=" inline-block cursor-pointer lg:hidden z-30 " 
            width={32} height={32} 
            onClick={handleOpenMenu}
            
        />

        {
            isOpen && <MobileNavbar isOpen={isOpen} handleOpen={handleOpenMenu} />
        }
        
        
    </nav>
    
    </>
    
  )
}

export default Navbar