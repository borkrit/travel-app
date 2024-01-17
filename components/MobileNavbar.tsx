import { MENU_LINK } from "@/constants";
import Link from "next/link";


interface MobileNavbarProps {
    isOpen:boolean,
    handleOpen: any;
}

const MobileNavbar = ({isOpen,handleOpen}:MobileNavbarProps) => {
  return (
    <>{
        isOpen && (
            <div className="absolute z-10 top-0 w-full h-dvh bg-green-50  flexCenter  left-0  p-2">
                <ul className="flexCol gap-5">
                {
                    MENU_LINK.map(link=>(
                        <Link key={link.key} href={link.href} className="flexCenter hover:font-bold" onClick={handleOpen} >
                            {link.label}
                        </Link>
                    ))
                }
                </ul>
            </div>
        )
    }
    </>
  )
}

export default MobileNavbar