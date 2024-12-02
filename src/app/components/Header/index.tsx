import React from 'react'
import Text from "@/app/components/Text";
import Link from 'next/link'

interface HeaderProps {
    className?: string;
    style?: React.CSSProperties;
}

function Header({className, style}: HeaderProps) {
    return (
        <div className={`flex text-white p-8 justify-center ${className}`} style={style}>
            <div className="flex w-full pt-3 pb-3 max-w-2xl items-center border-[#fafafa] border-[1px] rounded-2xl justify-evenly
            ">
                <Text hover className={"sm:text-xl sm:p-2"}>
                    <Link href={"/"}>
                        Home
                    </Link>
                </Text>
                <Text hover className={"sm:text-xl sm:p-2"}>
                    <Link href={"/Websites"}>
                        Websites
                    </Link>
                </Text>
                <Text hover className={"sm:text-xl sm:p-2"}>
                    <Link href={"/Mobiles"}>
                        Mobiles
                    </Link>
                </Text>
                <Text hover className={"sm:text-xl sm:p-2"}>
                    <Link href={"/Others"}>
                        Others
                    </Link>
                </Text>
                <Text hover className={"sm:text-xl sm:p-2"}>
                    <Link href={"/Contact"}>
                        Contact
                    </Link>
                </Text>
            </div>
        </div>
    )
}

export default Header