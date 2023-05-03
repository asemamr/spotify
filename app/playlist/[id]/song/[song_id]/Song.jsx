"use client"
import stringCollapse from "../../../../../lib/stringCollapse";
import milliToMinutes from "../../../../../lib/milliToMinutes";
import SongLink from "./SongLink";
import SongInfo from "./SongInfo"
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import jsonData from "/svgData.json";
import AnimatedSvg from "./AnimatedSvg";

function Song({ order, track, pathname }) {
  //the track have another property called track
  const [currentSong, setCurrentSong] = useState(false);
  const router = useRouter();
  const pathnameUrl = usePathname();
  const arr = pathnameUrl.split("/");
  const songId = arr[arr.length - 1];

  order = String(order);
  const interTrack = track.track;
  useEffect(() => {
    if (interTrack.id === songId) {
      setCurrentSong(true);
    } else {setCurrentSong(false)}
  }, [currentSong, interTrack, songId])
  

  const artist = track.track.album.artists[0].name;
  const date = track.added_at.split("T")[0];
  const link = `/playlist/${pathname}/song/${interTrack.id}`;
  return (
    <div onClick={() => router.push(link)}  className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-3 space-x-8 p-2 items-center hover:bg-slate-600 rounded-lg cursor-pointer transition-colors">
      <div className={`flex items-center ${currentSong ? "space-x-3" : "space-x-4"} w-fit col-span-2 lg:col-span-1`}>
        {!currentSong ? <p>{order.length === 1 ? order + "\u00A0\u00A0" : order}</p> :
        <AnimatedSvg data={jsonData} />}
        <SongInfo name={interTrack.name} artist={artist} images={interTrack.album.images} current={currentSong} />
      </div>
      <p className="hidden md:block">
        {stringCollapse(interTrack.album.name, 30)}
      </p>
      <div className="flex justify-end lg:justify-between">
        <p className="hidden lg:block">{date}</p>
        <p>{milliToMinutes(interTrack.duration_ms)}</p>
      </div>
    </div>
  );
}

export default Song;
