import Text from "@/app/components/Text";
import DownResume from "@/app/components/DownResume";
import Frameworks from "@/app/components/Frameworks";
import React from "react";

export default function Home() {
    return (
        <div className="relative mt-48 flex-col self-center items-center justify-center w-full h-full">
            <div className="flex flex-col items-center justify-center w-full h-full">
                {/* TITLE */}
                <div className={`flex flex-col items-center justify-center flex-1 font-light`}>
              <span
                  className="font-light bg-gradient-to-r from-pink-50 to-[var(--blue)] inline-block text-transparent bg-clip-text">
                   Hi, I am {" "} Deivid Reinke Schiitz
              </span>

                    <Text  className=" md:!text-6xl !text-4xl text-center font-bold">
                        From <span> Powerful </span> Backends <br/>
                        to intuitive <span>solutions</span><br/>
                        <span>&</span> Mobile Apps <span>&</span><br/>
                        Websites
                    </Text>

                    <Text  className=" md:!text-6xl !text-4xl text-center font-bold">
                    </Text>



                    {/* DOWNLOAD RESUME */}
                    <DownResume className={""}/>
                </div>

                {/*  FRAMEWORKS  */}
                <Frameworks/>
            </div>
        </div>
    );
}
