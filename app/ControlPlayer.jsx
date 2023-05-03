"use client";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect, useRef, useCallback } from "react";
import { secondsToMinutes } from "../lib/milliToMinutes.js";
import Volume from "./Volume.jsx";
import Controls from "./Controls.jsx"

function ControlPlayer({ src, next, prev }) {
  const router = useRouter();
  const pathname = usePathname();
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(new Audio(src));
  const { duration } = audioRef.current;
  const intervalRef = useRef();
  const arr = pathname.split("/");
  const playlistId = arr[2];


  const PushNextOrPrev = useCallback(
    (nextOrPrev) => {
      if (nextOrPrev === "next") {
        router.push(`/playlist/${playlistId}/song/${next}`);
      } else if (nextOrPrev === "prev") {
        router.push(`/playlist/${playlistId}/song/${prev}`);
      }
    },
    [playlistId, router, next, prev]
  );

  function changeRange(value) {
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = value;
    setTrackProgress(audioRef.current.currentTime);
  }
  const startTimer = useCallback(() => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        PushNextOrPrev("next");
        clearInterval(intervalRef.current);
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, [1000]);
  }, [intervalRef, audioRef, PushNextOrPrev]);

  useEffect(() => {
    const ref = audioRef.current;
    isPlaying ? ref.play() : ref.pause();
    isPlaying && startTimer();

    return () => {
      clearInterval(intervalRef);
      ref.pause();
    };
  }, [isPlaying, next, startTimer, intervalRef]);

  return (
    <div className="col-span-5 md:col-span-4 flex items-center">
      <div className="flex flex-col items-center flex-1">
        <Controls isPlaying={isPlaying} onPlayPause={() => setIsPlaying(!isPlaying) } onNextPrev={PushNextOrPrev} />
        <div className="w-full flex space-x-2">
          <p>{secondsToMinutes(trackProgress)}</p>
          <input
            type="range"
            min={1}
            step={1}
            value={trackProgress}
            max={isNaN(duration) ? 0 : duration}
            maxLength={100}
            className="w-full"
            onChange={(e) => changeRange(e.target.value)}
            onMouseUp={() => startTimer()}
          />
          <p className="test-white">
            {secondsToMinutes(isNaN(duration) ? 0 : duration)}
          </p>
        </div>
      </div>
      <Volume audio={audioRef.current} />
    </div>
  );
}
export default ControlPlayer;