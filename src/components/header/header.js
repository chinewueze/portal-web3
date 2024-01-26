"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Sidebar } from "../Sidebar/sidebar";
export const Header = () => {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <>
            {showMenu &&
                <div>
                    <Sidebar />
                </div>
            }
            <div
                onClick={()=> showMenu? setShowMenu(false): " "}
                className="w-full min-h-[7vh]  justify-between  flex items-center lg:text-[28px] sm:text-base font-medium  lg:pr-[125px] lg:pl-[125px] sm:pl-[2px] sm:pr-[8px]">
                <div className="flex items-center shrink-0 h-[40px] sm:w-[120px] lg:w-[185px]">
                    <div className="">
                        <Image src="/assets/images/logo-ellipse.svg" alt="logo-image" width={40} height={40} />
                    </div>
                    <div>
                        <Link href=""> PORTAL </Link>
                    </div>
                </div>
                <div className="flex shrink-0 items-center lg:gap-[30px] sm:gap-[5px]  ">
                    <div>
                        <Link href="/"> Home </Link>
                    </div>
                    <div>
                        <Link href="/usdc"> USDC </Link>
                    </div>
                    <div>
                        <Link href="wormholscan">  Wormholscan </Link>
                    </div>
                </div>
                <div className=" shrink-0 mx-1">
                    <button
                        onClick={() => setShowMenu(true)}
                    >
                        <Image src="/assets/icons/icon-burger.svg" alt="" width={0} height={0} className="lg:w-[33.34px] lg:h-[19px] sm:w-[21.88px] sm:h-[19.14px]" />
                    </button>
                </div>
            </div>
            <div className="w-full h-[45px]  bg-[url(/assets/images/nav-bottom.png)] bg-cover bg-center">
            </div>
        </>
    )
}