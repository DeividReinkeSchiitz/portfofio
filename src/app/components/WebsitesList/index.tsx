import React from 'react'
import getStaticData, {Stack} from "@/../public/static"
import Image from 'next/image'
import Text from "@/app/components/Text";
import ClientDiv from "@/app/components/ClientDiv";


function WebStacks(stacks: Stack[]) {
    const cur_stacks = []


    for (let i = 0; i < stacks.length; i++) {
        cur_stacks.push(
            <div key={i}
                 className={`hover:shadow-lg hover:scale-105 font-normal hover:transform transition-transform duration-300 ease-in-out flex p-3`}>
                <div className={`flex p-3 items-center justify-center rounded-md relative`}>
                    {/* Colored Square */}
                    <div className={"absolute w-[55px] h-[55px] opacity-30 rounded-md"}
                         style={{backgroundColor: stacks[i].color}}/>
                    <div className={"w-[30px] h-[30px] rounded-md flex items-center justify-center"}>
                        <Image src={stacks[i].icon} alt={stacks[i].name} width={30} height={30}/>
                    </div>
                </div>
                <div className={"inline-block text-left pl-4 "}>
                    <Text className={"mb-[-3] pb-0 font-semibold"}>{stacks[i].name}</Text>
                    <Text className={"opacity-70 !text-sm"}>{stacks[i].description}</Text>
                </div>
            </div>
        )
    }
    return (
        <div className={`grid grid-cols-2 mt-5 items-center justify-center`}>
            {cur_stacks}
        </div>
    )
}


async function WebsitesList() {
    const static_data = await getStaticData()

    const cur_websites = []

    for (let i = 0; i < static_data.websites.length; i++) {
        cur_websites.push(
            <div key={i}
                 className={`relative flex flex-col-reverse ${(i % 2 != 0) ? "md:flex-row-reverse" : "md:flex-row"} 
                 items-center text-center justify-evenly mb-18 p-10 max-w-2xl md:max-w-5xl h-full `}>
                {/* IMAGE SIDE  */}
                <div className={`flex flex-col items-center justify- p-5 relative`}>
                    {/*Image*/}
                    <Image
                        width={518}
                        height={317}
                        src={static_data.websites[i].image} alt={static_data.websites[i].name}
                        className={"h-auto w-auto  border border-gray-300 rounded-3xl mb-3"}
                    />
                    {/*Blur*/}
                    <Image
                        width={779}
                        height={779}
                        src={"/blur.svg"} alt={"blur"}
                        //w-10/11 h-10/11 md:w-[518px] md:h-[317px]
                        className={`absolute blur-lg opacity-50 z-0
                            ${(i % 2 == 0) ? "right-[100]" : "left-[100]"} 
                        `}
                    />

                    {/*Link text*/}
                    <div className={`flex w-full justify-evenly z-10 `}>
                        <ClientDiv open={static_data.websites[i].live}>
                            <Text className={`flex justify-center items-center hover:underline`}
                                  hover>
                                <Image src={"globe.svg"} alt={"globe"} width={5} height={5}
                                       className={"mr-2 w-4 h-4 md:w-5 md:h-5 "}/>
                                Live Demo
                            </Text>
                        </ClientDiv>

                        <ClientDiv open={static_data.websites[i].github}>
                            <Text className={`flex justify-center items-center hover:underline `}
                                  hover>
                                <Image src={"github.svg"} alt={"github"} width={6} height={6}
                                       className={"mr-2 w-6 h-6 md:w-6 md:h-6 "}/>
                                Github
                            </Text>
                        </ClientDiv>
                    </div>
                </div>

                {/*  TEXT SIDE  */}
                <div className={`flex text-left flex-col h-full z-10 ml-4`}>
                    <Text className={`text-2xl font-bold `}>
                        {static_data.websites[i].name}
                    </Text>
                    <Text className={`mt-2 text-base justify-center  mr-8`}
                          dangerouslySetInnerHTML={{__html: static_data.websites[i].description}}/>
                    {WebStacks(static_data.websites[i].stacks)}
                </div>
            </div>
        )
    }

    return (
        <div className="flex  flex-col items-center text-center justify-center mt-20 ">
            {cur_websites}
        </div>
    )
}

export default WebsitesList