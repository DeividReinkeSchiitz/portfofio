import Text from "@/app/components/Text";
import Image from "next/image";
import phone_svg from "@/../public/phone.svg";
import battery_svg from "@/../public/battery.svg";
import MobilesList from "@/app/components/MobilesList";

export default function Mobiles() {
    return (
        <div className="flex flex-col items-center text-center justify-center mt-48">
            {/* TITLE */}
            <div className={`flex relative items-center text-center justify-center flex-col mb-10 max-w-xl`}>
                {/*Phone Icon*/}
                <Image
                    src={phone_svg} alt="Phone"
                    className={"absolute w-10 h-10 md:w-16 md:h-16 top-[-38px] right-20 md:right-0 "}
                />

                {/*Battery Icon*/}
                <Image
                    src={battery_svg} alt="Battery"
                    className={"absolute w-10 h-10 md:w-16 md:h-16 top-[-38px] md:bottom-[-60px] left-[35px]"}
                />

                <div className={`flex items-center justify-center w-full`}>
                    <Text className="md:text-3xl sm:text-2xl font-bold ">
                        Mobile Projects
                    </Text>
                </div>

                <Text className={`text-center sm:text-xl mt-2 ml-10 mr-10 font-normal`}>
                    I&#39;ve built cool <span>Mobile Apps</span> using anything from
                    Native to React Native. Here are some of my <span>favorite</span> {" "}
                    projects over the course of my journey.
                </Text>
            </div>

            <MobilesList/>
        </div>
    );
}
