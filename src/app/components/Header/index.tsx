"use client"

import React, {useEffect} from 'react'
import Text from "@/app/components/Text";
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface HeaderProps {
    className?: string;
    style?: React.CSSProperties;
}

function Header({className, style}: HeaderProps) {
    const currentPath = usePathname();

    useEffect(() => {
        console.log(currentPath)
    }, [currentPath])

    return (
        <div className={`flex text-white p-5 justify-center ${className}`} style={style}>
            <div className="flex w-full pt-3 pb-3 max-w-2xl items-center border-[#fafafa] border-[1px] rounded-2xl justify-evenly
            ">
                <Text hover className={`sm:text-xl sm:p-2 hover:opacity-80 ${currentPath  =='/' && "text-[var(--blue)]"}`}>
                    <Link href={"/"}>
                        Home
                    </Link>
                </Text>
                <Text hover className={`sm:text-xl sm:p-2 hover:opacity-80 ${currentPath =='/Websites' && "text-[var(--blue)]"}`}>
                    <Link href={"/Websites"}>
                        Websites
                    </Link>
                </Text>
                <Text hover className={`sm:text-xl sm:p-2 hover:opacity-80 ${currentPath == '/Mobiles' && "text-[var(--blue)]"}`}>
                    <Link href={"/Mobiles"}>
                        Mobiles
                    </Link>
                </Text>
                <Text hover className={`sm:text-xl sm:p-2 hover:opacity-80 ${currentPath == '/Others' && "text-[var(--blue)]"}`}>
                    <Link href={"/Others"}>
                        Others
                    </Link>
                </Text>
                <Text hover className={`sm:text-xl sm:p-2 hover:opacity-80 ${currentPath == '/Contact' && "text-[var(--blue)]"}`}>
                    <Link href={"/Contact"}>
                        Contact
                    </Link>
                </Text>
            </div>
        </div>
    )
}

export default Header