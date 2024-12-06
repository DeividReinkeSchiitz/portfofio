import Text from "@/app/components/Text";
import DownResume from "@/app/components/DownResume";
import Frameworks from "@/app/components/Frameworks";

export default function Home() {
  return (
      <div className="flex flex-col items-center justify-center w-full h-full">
          {/* TITLE */}
          <div className={`flex flex-col items-center justify-center flex-1`}>
              <Text className="text-xl">
                  Hi, I am {" "}
                <span>Deivid Reinke Schiitz</span>
              </Text>

              <Text className=" md:!text-6xl !text-4xl text-center font-bold">
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
