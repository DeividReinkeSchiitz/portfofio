import React from 'react'
import getStaticData, {Stack} from "@/../public/static"
import Image from 'next/image'
import Text from "@/app/components/Text";
import ClientDiv from "@/app/components/ClientDiv";


function MobileStacks({stacks}: { stacks: Stack[] }) {
    const cur_stacks = []

    for (let i = 0; i < stacks.length; i++) {
        cur_stacks.push(
            <div key={i}
                 className={`hover:shadow-lg gap-x-2 items-center  pt-5 md:pt-8 hover:scale-105 font-normal hover:transform transition-transform duration-300 ease-in-out flex`}>
                <div className={`flex p-3 items-center justify-center rounded-md relative `}>
                    {/* Colored Square */}
                    <div className={"absolute w-[40px] h-[40px] md:w-[55px] md:h-[55px] opacity-30 rounded-md"}
                         style={{backgroundColor: stacks[i].color}}/>

                    {/* Stack icon */}
                    <div
                        className={"w-[25px] md:w-[30px] h-[25px] md:h-[30px] rounded-md flex items-center justify-center"}>
                        <Image src={stacks[i].icon} alt={stacks[i].name} width={30} height={30} className={``}/>
                    </div>
                </div>

                {/* Stack Title and Description */}
                <div className={"inline-block text-left md:pl-4  "}>
                    <Text className={"mb-[-3] pb-0 font-semibold"}>{stacks[i].name}</Text>
                    <Text className={"opacity-70 !text-xs sm:!text-base"}>{stacks[i].description}</Text>
                </div>
            </div>
        )
    }
    return (
        <div className={`sm:grid sm:grid-cols-2 sm:gap-x-2 sm:h-full sm:mt-5 sm:w-full 
            flex mt-5 w-full flex-wrap justify-left gap-x-5
        `}>
            {cur_stacks}
        </div>
    )
}

function MobileImages({images}: { images: string[] }) {
    return (
        <div className={"hidden md:flex"}>
            <div className={"max-w-[420px] w-[25vw] h-auto mt-5 absolute top-[-100] left-[-22vw] "}>
                <Image src={images[0]} alt={images[0]}
                       className={"w-full h-full object-fit rotate-[270deg]"}
                       quality={100}
                       width={1140} height={1024}
                />
            </div>

            <div className={"max-w-[420px] w-[25vw] h-auto mt-5 absolute top-[300] left-[-23vw] "}>
                <Image src={images[1]} alt={images[1]}
                       className={"w-full h-full object-fit rotate-[220deg]"}
                       quality={100}
                       width={1140} height={1024}
                />
            </div>

            <div className={"max-w-[420px] w-[25vw] h-auto mt-5 absolute top-[270] right-[-18vw] "}>
                <Image src={images[2]} alt={images[2]}
                       className={"w-full h-full object-fit "}
                       quality={100}
                       width={1140} height={1024}
                />
            </div>
        </div>
    )
}

async function MobilesList() {
    const static_data = await getStaticData()

    const cur_mobiles = []

    for (let i = 0; i < static_data.mobiles.length; i++) {
        cur_mobiles.push(
            <div key={i} className={"flex relative flex-col mb-18 p-10 max-w-2xl md:max-w-2xl"}>
                {/* Title */}
                <div className={`flex relative items-center`}>
                    <MobileImages images={static_data.mobiles[i].images}/>

                    {/*Icon*/}
                    <Image
                        width={35}
                        height={35}
                        className={"h-[35px] w-[35px] mr-5"}
                        src={static_data.mobiles[i].icon} alt={static_data.mobiles[i].name}/>
                    <Text className={`text-2xl font-bold text-left w-full`}>
                        {static_data.mobiles[i].name}
                    </Text>

                    {/*Links text*/}
                    <div className={`flex w-full justify-evenly z-10 `}>
                        <ClientDiv open={static_data.mobiles[i].github}>
                            <Text className={`flex justify-center items-center hover:underline `}
                                  hover>
                                <Image src={"github.svg"} alt={"github"} width={6} height={6}
                                       className={"mr-2 w-6 h-6 md:w-6 md:h-6 "}/>
                                Github
                            </Text>
                        </ClientDiv>
                    </div>
                </div>

                {/* Description */}
                <Text className={`mt-2 !text-base text-left w-full`}
                      dangerouslySetInnerHTML={{__html: static_data.mobiles[i].description}}/>

                <MobileStacks stacks={static_data.mobiles[i].stacks}/>
            </div>
        )
    }

    return (
        <div
            className="flex items-center h-full flex-col mt-20 w-full max-w-screen-xl md:gap-y-52
            xl:gap-y-64 2xl:gap-y-80 ">
            {cur_mobiles}
        </div>
    )
}

export default MobilesList