"use client";

import { useCallback, useEffect, useState } from "react";

const CountdownTimer = ({ date }: { date: string }) => {
  const [timer, setTimer] = useState<{
    days: string | number;
    hours: string | number;
    minutes: string | number;
    seconds: string | number;
  }>({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const getTimeDifference = (countDownTime: number) => {
    const currentTime = new Date().getTime();
    const timeDifference = countDownTime - currentTime;
    let days =
      Math.floor(timeDifference / (24 * 60 * 60 * 1000)) >= 10
        ? Math.floor(timeDifference / (24 * 60 * 60 * 1000))
        : `0${Math.floor(timeDifference / (24 * 60 * 60 * 1000))}`;
    const hours =
      Math.floor((timeDifference % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)) >=
      10
        ? Math.floor(
            (timeDifference % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
          )
        : `0${Math.floor(
            (timeDifference % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
          )}`;
    const minutes =
      Math.floor((timeDifference % (60 * 60 * 1000)) / (1000 * 60)) >= 10
        ? Math.floor((timeDifference % (60 * 60 * 1000)) / (1000 * 60))
        : `0${Math.floor((timeDifference % (60 * 60 * 1000)) / (1000 * 60))}`;
    const seconds =
      Math.floor((timeDifference % (60 * 1000)) / 1000) >= 10
        ? Math.floor((timeDifference % (60 * 1000)) / 1000)
        : `0${Math.floor((timeDifference % (60 * 1000)) / 1000)}`;

    if (timeDifference < 0) {
      setTimer({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      });
      clearInterval(undefined);
    } else {
      setTimer({
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      });
    }
  };

  const startCountDown = useCallback(() => {
    const countDownDate = new Date(date);

    setInterval(() => {
      getTimeDifference(countDownDate.getTime());
    }, 1000);
  }, [date]);

  useEffect(() => {
    startCountDown();
  }, [startCountDown]);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full sm:gap-8">
      <div className="flex justify-center gap-3 md:gap-8">
        <div className="flex flex-col gap-5 relative">
          <div className="h-16 w-16  flex justify-between items-center bg-pink-100 rounded-lg">
            <div className="relative h-2.5 w-2.5  !-left-[6px] rounded-full bg-pink-300 invisible md:visible"></div>
            <span className="font-bellefair text-slate-800 md:text-lg font-semibold">
              {timer?.days}
            </span>
            <span className="font-bellefair text-slate-800 text-xs md:text-sm">
              D
            </span>
            <div className="relative h-2.5 w-2.5 -right-[6px] rounded-full bg-pink-300 invisible md:visible"></div>
          </div>
        </div>
        <div className="flex flex-col gap-5 relative">
          <div className="h-16 w-16 flex justify-between items-center bg-pink-100 rounded-lg">
            <div className="relative h-2.5 w-2.5 !-left-[6px] rounded-full bg-pink-300 invisible md:visible"></div>
            <span className="font-bellefair text-slate-800 md:text-lg font-semibold">
              {timer?.hours}
            </span>
            <span className="font-bellefair text-slate-800 text-xs md:text-sm">
              H
            </span>
            <div className="relative h-2.5 w-2.5 -right-[6px] rounded-full bg-pink-300 invisible md:visible"></div>
          </div>
        </div>
        <div className="flex flex-col gap-5 relative">
          <div className="h-16 w-16  flex justify-between items-center bg-pink-100 rounded-lg">
            <div className="relative h-2.5 w-2.5 !-left-[6px] rounded-full bg-pink-300 invisible md:visible"></div>
            <span className="font-bellefair text-slate-800 md:text-lg font-semibold">
              {timer?.minutes}
            </span>
            <span className="font-bellefair text-slate-800 text-xs md:text-sm">
              M
            </span>
            <div className="relative h-2.5 w-2.5 -right-[6px] rounded-full bg-pink-300 invisible md:visible"></div>
          </div>
        </div>
        <div className="-mr-5 flex flex-col w-0 relative invisible md:visible md:gap-5 md:w-full md:mr-0">
          <div className="h-16 w-16  flex justify-between items-center bg-pink-100 rounded-lg">
            <div className="relative h-2.5 w-2.5  !-left-[6px] rounded-full bg-pink-300 invisible md:visible"></div>
            <span className="font-bellefair text-slate-800 md:text-lg font-semibold">
              {timer?.seconds}
            </span>
            <span className="font-bellefair text-slate-800 text-xs md:text-sm">
              S
            </span>
            <div className="relative h-2.5 w-2.5  -right-[6px] rounded-full bg-pink-300 invisible md:visible"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CountdownTimer;
