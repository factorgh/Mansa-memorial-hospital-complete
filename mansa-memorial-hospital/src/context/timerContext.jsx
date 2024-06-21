/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

const TimerContext = createContext();

const TimerProvider = ({ children }) => {
  const [startTime, setStartTime] = useState(
    localStorage.getItem("startTime") || null
  );
  const [elapsedTime, setElapsedTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(
    function () {
      const intervalId = setInterval(() => {
        //Get current time
        if (startTime) {
          const currentTime = new Date();

          const elapsedMs = currentTime.getTime() - startTime;

          const hours = Math.floor(elapsedMs / (1000 * 60 * 60));

          const minutes = Math.floor(
            (elapsedMs % (1000 * 60 * 60)) / (1000 * 60)
          );

          const seconds = Math.floor((elapsedMs % (1000 * 60)) / 1000);

          setElapsedTime({ hours, minutes, seconds });
        }
      }, 1000);
      return () => clearInterval(intervalId);
    },
    [startTime, elapsedTime]
  );

  const updateStartTime = (time) => {
    localStorage.setItem("startTime", time);
    setStartTime(time);
  };

  return (
    <TimerContext.Provider value={{ elapsedTime, updateStartTime }}>
      {children}
    </TimerContext.Provider>
  );
};

export { TimerContext, TimerProvider };
