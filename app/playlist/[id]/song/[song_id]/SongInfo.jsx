
import Image from "next/image";
import stringCollapse from "../../../../../lib/stringCollapse";

function SongInfo({ images, name, artist, img_info, current, hidden }) {
  // console.log("the image in the song info", images)
  return (
    <div className={`flex max-w-xl space-x-4 items-center ${hidden && "hidden md:flex"} `} >
      <div className={img_info && "rounded-md overflow-hidden"}>
        <Image src={!img_info ? images[2].url ?? images[1].url ?? images[0].url : images[1].url ?? images[0].url}
          className="object-cover"
          alt="the image of the track" 
          width={!img_info ? 48 : 64}
          height={!img_info ? 48 : 64}
          />
        
      {/* <img
          src={!img_info ? images[2].url ?? images[1].url ?? images[0].url : images[1].url ?? images[0].url}
          className={`${!img_info ? "w-12 h-12" : "w-16 h-16"} object-cover`}
          alt=""
      /> */}
      </div>
      
      <div className="font-semibold">
        <h2 className={current ? "text-green-500" : "text-white"}>{stringCollapse(name)}</h2>
        <p className="text-gray-400 text-sm mt-2">{ artist}</p>
      </div>
    </div>
   );
}

export default SongInfo;