"use client"
import { SpeakerXMarkIcon, SpeakerWaveIcon } from "@heroicons/react/24/solid"
import { useEffect, useState } from "react";
function Volume({ audio }) {
  const [fadeIn, setFadeIn] = useState(false);
  const defaultVolume = localStorage.getItem("volume");
  const [volume, setVolume] = useState(defaultVolume ? JSON.parse(defaultVolume) : 0.5);
  audio.volume = volume
  function changeVolume(value) {
    setVolume(() => value);
    audio.volume = volume;
  }
  
  useEffect(() => {
    function fadeOut(target) {
      if (target.id !== "click") {
          setFadeIn(false)
        }
    }
    window.addEventListener("click", (e) => fadeOut(e.target))
    return window.removeEventListener("click", (e) => fadeOut(e.target))
  },)

  useEffect(() => {
    localStorage.setItem("volume", JSON.stringify(volume));
  }, [volume])
  
  return ( 
    <div className="w-14 text-center md:w-auto">
      <button onClick={() => setFadeIn(!fadeIn)} className="md:hidden mx-auto w-10 h-10" id="click">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6" id="click" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" id="click" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
        </svg>
      </button>
      {fadeIn && <div className="flex items-center space-x-1 absolute -top-10 bg-slate-800 right-4 p-4 rounded-md shadow-md w-fit h-5 md:hidden">
          <button>
            <SpeakerXMarkIcon className="w-6"/>
          </button>
          <input
            type="range"
            min={0.0}
            max={1}
            step={0.1}
            onChange={(e) => changeVolume(e.target.value)}
            defaultValue={volume}
          />
          <button>
            <SpeakerWaveIcon className="w-6"/>
          </button>
        </div>}
      <div className="pl-10 items-center space-x-2 hidden md:flex">
        <button>
          <SpeakerXMarkIcon className="w-6"/>
        </button>
        <input
          type="range"
          min={0.0}
          max={1}
          step={0.1}
          onChange={(e) => changeVolume(e.target.value)}
          defaultValue={volume}
        />
        <button>
          <SpeakerWaveIcon className="w-6"/>
        </button>
      </div>
      </div>
   );
}

export default Volume;