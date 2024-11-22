import React from 'react'
import Image from 'next/image'

// import Download from public
import Download from "@/../public/download.svg"
import Text from "@/app/components/Text";

interface DownResumeProps {
    className?: string;
}

function DownResume ({className}: DownResumeProps) {

    const openDownloadUrl = () => {
        window.open("https://raw.githubusercontent.com/DeividReinkeSchiitz/DeividReinkeSchiitz.github.io/refs/heads/master/resume.pdf")
    }

    return (
        <div className={`flex items-center justify-center ${className} hover:cursor-pointer mt-5 hover:underline`}
            onClick={openDownloadUrl}
        >
            <Image src={Download} alt="Download Resume" className={"w-6 h-6 md:w-7 md:h-7 "}/>
            <Text className={"mt-1.5 ml-2 sm:text-md text-sm"}>
                Download Resume
            </Text>
        </div>
    )
}

export default DownResume
