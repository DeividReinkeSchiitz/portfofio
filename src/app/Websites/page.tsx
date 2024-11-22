import Text from "@/app/components/Text";
import Image from "next/image";
import website_svg from "@/../public/website.svg";
export default function Websites() {

  return (
      <div className="flex flex-col items-center  w-full h-screen ">
          {/* TITLE */}
          <div className={`flex items-center justify-center flex-col mt-10`}>
                <div className={`flex items-center justify-center relative w-full`}>
                    <Text className="text-xl md:text-3xl font-bold ">
                        Website Projects
                    </Text>
                    <Image src={website_svg} alt="Website Projects" className={"absolute w-10 h-10 md:w-20 md:h-20 mb-3 ml-2 bottom-[-10] right-12 "}/>
                </div>

              <Text className={`text-center text-sm sm:text-xl mt-5  pl-10 pr-10 font-medium`}>
                  I&#39;ve built websites using anything from React, <br/>
                  Firebase and Node.js, Here are some of my favorite <br/>
                  projects over the course of my  journey.
              </Text>
          </div>
      </div>
  );
}
