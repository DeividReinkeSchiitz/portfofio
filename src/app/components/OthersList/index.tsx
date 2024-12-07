import React from 'react'
import getStaticData from "@/../public/static"
import Image from 'next/image'
import Text from "@/app/components/Text";
import ClientDiv from "@/app/components/ClientDiv";


function OthersStacks({stacks}: { stacks: string[] }) {
    return (
        <div className={`flex flex-wrap mt-2  `}>
            {stacks.map((stack, index) => (
                <p key={index} className={`mb-3 p-1 pl-4 pr-4 mr-2 text-sm                   
                border-[rgba(136,136,136,0.7)] border rounded-md `}>
                    {stack}
                </p>
            ))}
        </div>
    )
}


async function OthersList() {
    const static_data = await getStaticData()

    const cur_projects = []

    for (let i = 0; i < static_data.others.length; i++) {
        cur_projects.push(
            <div key={i} className={`flex flex-col max-w-[518px] p-10`}>
                {/* IMAGE SIDE  */}
                {/*Image*/}
                <div className={" w-full h-full max-h-[260] rounded-md max-w-[430]"}>
                    <Image
                        width={518}
                        height={317}
                        src={static_data.others[i].image} alt={static_data.others[i].name}
                        className={"h-auto w-auto object-fill "}
                    />
                </div>
                {/*  TEXT SIDE  */}
                <div className={`flex flex-col h-full items-baseline mt-8`}>
                    <div className={`flex w-full justify-between z-10 `}>
                        <div className={`flex items-center`}>
                            <Image
                                width={35}
                                height={35}
                                className={"h-[35px] w-[35px] mr-3"}
                                src={static_data.others[i].icon} alt={static_data.others[i].name}/>

                            <Text className={`text-2xl font-bold`}>
                                {static_data.others[i].name}
                            </Text>
                        </div>
                        <div className={`flex justify-between gap-x-10 items-center`}>
                            {
                                static_data.others[i].live &&
                                <ClientDiv open={static_data.others[i].live} >
                                    <Text className={`flex justify-center items-center hover:underline`}
                                          hover>
                                        <Image src={"globe.svg"} alt={"globe"} width={5} height={5}
                                               className={"mr-2 w-4 h-4 md:w-5 md:h-5 "}/>
                                        Live Demo
                                    </Text>
                                </ClientDiv>
                            }

                            {
                                static_data.others[i].github &&
                                <ClientDiv open={static_data.others[i].github}>
                                    <Text className={`flex justify-center items-center hover:underline `}
                                          hover>
                                        <Image src={"github.svg"} alt={"github"} width={6} height={6}
                                               className={"mr-2 w-6 h-6 md:w-6 md:h-6 "}/>
                                        Github
                                    </Text>
                                </ClientDiv>
                            }

                        </div>
                    </div>

                    <Text className={`mt-2 text-left justify-center `}
                          dangerouslySetInnerHTML={{__html: static_data.others[i].description}}/>

                    <OthersStacks stacks={static_data.others[i].stacks}/>
                </div>
            </div>
        )
    }

    // if number of projects is odd the add one empty div
    // if (static_data.others.length > 1 && static_data.others.length % 2 !== 0) {
    //     cur_projects.push(
    //         <div key={-1} className={`flex flex-col w-[518px] p-10 `}/>
    //     )
    // }

    return (
        <div className="flex items-center mt-20 flex-wrap justify-center max-w-screen-xl  ">
            {cur_projects}
        </div>
    )
}

export default OthersList