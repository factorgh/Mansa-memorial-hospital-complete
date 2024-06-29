/* eslint-disable react/prop-types */
import { useEffect, useState, useRef } from "react";

const CountdownTimer = ({ initialTime, patientId }) => {
  const [timer, setTimer] = useState("00:00:00");
  const [endTime, setEndTime] = useState(null);
  const timerRef = useRef(null);
  const [role, setRole] = useState("");

  useEffect(() => {
    setRole(JSON.parse(localStorage.getItem("user")));
  }, []);

  const getTimeRemaining = (endtime) => {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    return { total, hours, minutes, seconds };
  };

  const startTimer = (endtime) => {
    const { total, hours, minutes, seconds } = getTimeRemaining(endtime);
    if (total >= 0) {
      setTimer(
        `${hours > 9 ? hours : "0" + hours}:${
          minutes > 9 ? minutes : "0" + minutes
        }:${seconds > 9 ? seconds : "0" + seconds}`
      );
    } else {
      setTimer("00:00:00");
      if (timerRef.current) clearInterval(timerRef.current);
    }
  };

  const clearTimer = (endtime) => {
    if (timerRef.current) clearInterval(timerRef.current);
    const id = setInterval(() => {
      startTimer(endtime);
    }, 1000);
    timerRef.current = id;
  };

  const getDeadTime = (initialTime) => {
    let deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + initialTime);
    return deadline;
  };

  const loadTimer = () => {
    const savedEndTime = localStorage.getItem(`timer_${patientId}`);
    if (savedEndTime) {
      const parsedEndTime = new Date(savedEndTime);
      setEndTime(parsedEndTime);
      clearTimer(parsedEndTime);
    } else {
      const newEndTime = getDeadTime(initialTime);
      setEndTime(newEndTime);
      localStorage.setItem(`timer_${patientId}`, newEndTime);
      clearTimer(newEndTime);
    }
  };

  const addTime = (minutes) => {
    let newEndTime;
    if (timer === "00:00:00") {
      newEndTime = getDeadTime(minutes * 60);
    } else {
      newEndTime = new Date(Date.parse(endTime) + minutes * 60 * 1000);
    }
    setEndTime(newEndTime);
    localStorage.setItem(`timer_${patientId}`, newEndTime);
    clearTimer(newEndTime);
  };

  useEffect(() => {
    loadTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex">
      <div className="ms-1 pt-2" style={{ width: "6rem" }}>
        <span>{timer}</span>
      </div>

      {role.role === "admin" && (
        <span className="p-2 flex gap-2">
          <button
            className="bg-blue-400 rounded-md p-2 text-sm"
            onClick={() => addTime(1)}
          >
            + 1
          </button>
          <button
            className="bg-blue-400 rounded-md p-2 text-sm"
            onClick={() => addTime(5)}
          >
            + 5
          </button>
        </span>
      )}
    </div>
  );
};

export default CountdownTimer;
