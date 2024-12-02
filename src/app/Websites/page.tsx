import Text from "@/app/components/Text";
import Image from "next/image";
import website_svg from "@/../public/website.svg";
import WebsitesList from "@/app/components/WebsitesList";
export default function Websites() {

  return (
      <div className="flex flex-col items-center text-center justify-center ">
          {/* TITLE */}
          <div className={`flex items-center text-center justify-center flex-col mt-10`}>
              <div className={`flex items-center justify-center relative w-full`}>
                  <Text className="md:text-3xl sm:text-2xl font-bold ">
                      Website Projects
                  </Text>
                  <Image
                      src={website_svg} alt="Website Projects"
                      className={"absolute w-10 h-10 md:w-20 md:h-20 mb-3 ml-2 bottom-[-10] right-12 "}
                  />
              </div>

              <Text className={`text-center sm:text-xl mt-2  ml-10 mr-10 font-normal`}>
                  I’ve created templates and little projects that truly <br/>
                  spark my curiosity. Here are a few of my all-time <br/>
                  favorites that I’m proud to share!
              </Text>
          </div>

          <WebsitesList/>
      </div>
  );
}
