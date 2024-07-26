import { useState } from "react";
import { useEffect } from "react";

export default function Clock() {
  const [localTime, setLocalTime] = useState(new Date());
  const [timer, setTimer] = useState(1);

  const getNewDate = () => {
    let time = new Date();
    return time;
  };

  useEffect(() => {
    setLocalTime(getNewDate());
    let counter = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(counter);
  }, [timer]);

  const hours = localTime.getHours().toString().padStart(2, "0");
  const minutes = localTime.getMinutes().toString().padStart(2, "0");
  const seconds = localTime.getSeconds().toString().padStart(2, "0");

  return (
    <div>
      <div className="flex justify-center items-center gap-2 py-4 mt-4 px-[57px] rounded-t-lg border-[3px] border-[#A37e2c] cursor-default">
        <span className="w-10 bg-[#006039] text-white h-10 flex justify-center items-center text-xl rounded-full">{`${hours}`}</span>
        <span className="w-10 bg-[#006039] text-white h-10 flex justify-center items-center text-xl rounded-full">{`${minutes}`}</span>
        <span className="w-10 bg-[#006039] text-white h-10 flex justify-center items-center text-xl rounded-full">{`${seconds}`}</span>
      </div>
    </div>
  );
}
