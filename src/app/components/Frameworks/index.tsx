import React from 'react'
import getStaticData from "@/../public/static"
import Image from 'next/image'
import Text from "@/app/components/Text";

async function Frameworks() {
    const static_data = await getStaticData()

    const cur_frameworks = []

    for (let i = 0; i < static_data.frameworks.length; i++) {
        cur_frameworks.push(
            <div key={i} className={`flex items-center justify-evenly border-[1px] p-2 pl-3 pr-3 rounded-md
                hover:shadow-lg hover:scale-105 hover:transform transition-transform duration-300 ease-in-out
                `}
                 style={{borderColor: static_data.frameworks[i].color}}
            >
                <Image
                    width={8}
                    height={8}
                    src={static_data.frameworks[i].icon} alt={static_data.frameworks[i].name}
                    className={"w-6 h-6 md:w-8 md:h-8"}/>
                <Text className={`sm:text-lg ml-2 `}
                      style={{color: static_data.frameworks[i].color}}
                >{static_data.frameworks[i].name}
                </Text>
            </div>
        )
    }


    return (
        <div className="grid md:grid-cols-4 gap-x-12 gap-y-7 grid-cols-2 p-5 mb-10 ">
            {cur_frameworks}
        </div>
    )
}

export default Frameworks