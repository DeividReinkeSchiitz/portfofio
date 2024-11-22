"use client";
import {useEffect} from "react";
import Text from "@/app/components/Text";
import DownResume from "@/app/components/DownResume";
import Frameworks from "@/app/components/Frameworks";

export default function Home() {
  useEffect(() => {
  },[])

  return (
      <div className="flex flex-col items-center justify-center w-full h-screen">
          {/* TITLE */}
          <div className={`flex flex-col items-center justify-center flex-1`}>
              <Text className="text-sm sm:text-lg ">
                  Hi, Im {" "}
                <span>Deivid Reinke Schiitz</span>
              </Text>

              <Text className="text-center text-3xl md:text-6xl famil">
                  From <span> powerful </span> Backends <br/>
                  to intuitive <span>solutions</span><br/>
                  <span>&</span> Mobile Apps <span>&</span><br/>
                  Websites
              </Text>

              {/* DOWNLOAD RESUME */}
              <DownResume className={""}/>
          </div>



      {/*  FRAMEWORKS  */}
          <Frameworks/>
      </div>
  );
}
