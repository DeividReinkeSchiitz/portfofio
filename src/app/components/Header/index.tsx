import React from 'react'
import Text from "@/app/components/Text";
import Link from 'next/link'

interface HeaderProps {
    className?: string;
    style?: React.CSSProperties;
}

function Header({className, style}: HeaderProps) {
    const HoverText = ({children}: { children: React.ReactNode }) => {
        return <Text
            className={`hover:cursor-pointer hover:shadow-lg hover:scale-105 font-normal hover:transform transition-transform duration-300 ease-in-out`}>{children}</Text>
    }

    return (
        <div className={`flex text-white sm:text-lg text-sm p-8 justify-center ${className}`} style={style}>
            <div className="flex w-full pt-3 pb-3 max-w-2xl items-center border-[#fafafa] border-[1px] rounded-2xl justify-evenly
            ">
                <HoverText>
                    <Link href={"/"}>
                        Home
                    </Link>
                </HoverText>
                <HoverText>
                    <Link href={"/Websites"}>
                        Websites
                    </Link>
                </HoverText>
                <HoverText>
                    <Link href={"/Mobiles"}>
                        Mobiles
                    </Link>
                </HoverText>
                <HoverText>
                    <Link href={"/Others"}>
                        Others
                    </Link>
                </HoverText>
                <HoverText>
                    <Link href={"/Contact"}>
                        Contact
                    </Link>
                </HoverText>
            </div>
        </div>
    )
}

export default Header