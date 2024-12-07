import Text from "@/app/components/Text";
import Image from "next/image";
import React from "react";
import SocialMedias from "@/app/components/SocialMedias";
import RadiusBlur from "@/app/Contact/RadiusBlur";

export default function Contact() {
    return (
        <div className=" relative h-full w-full items-center overflow-hidden">
            <div className="flex flex-col h-full w-full items-center  justify-evenly">
                <RadiusBlur/>

                {/* TITLE */}
                <div className={`mt-20 flex w-full items-center text-center justify-center flex-col max-w-2xl `}>
                    <div className="flex items-center justify-center mb-1">
                        <Image src={"location.svg"} alt={"location"}
                               width={4} height={4}
                               className={"w-4 h-4 mr-1"}
                        />
                        <Text className="text-sm font-bold ">
                            Based in {" "}
                            <span>Brazil</span>
                        </Text>
                    </div>

                    <Text
                        className="!text-4xl tracking-wider text-center font-bold mb-3 underline decoration-[var(--blue)] underline-offset-8"
                        style={{textDecorationThickness: "0.15rem"}}
                    >
                        Let&#39;s Have a Chat!
                    </Text>

                    <Text className={`text-center !text-xl md:text-xl mt-2 ml-10 mr-10 font-normal`}>
                        Lets create something together. Feel free to {" "}
                        <span>reach me out </span> via LinkedIn, email,
                        or any <span>social media</span> platform.
                        I&#39;ll get back to you as soon as I can.
                    </Text>
                </div>
                <SocialMedias/>
            </div>
        </div>
    );
}
