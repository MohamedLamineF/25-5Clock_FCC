import { useCallback, useEffect, useRef, useState } from "react";
import { formatTime } from "../utils/timeFormatter";

export function useTimer() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timer, setTimer] = useState(1500);
  const [isRunning, setIsRunning] = useState(false);
  const [isSession, setIsSession] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);
  const intervalRef = useRef<number>();
  const switchingRef = useRef(false);

  const playSound = useCallback(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = 0;
      audio.play();
    }
  }, []);

  const reset = useCallback(() => {
    clearInterval(intervalRef.current);
    setBreakLength(5);
    setSessionLength(25);
    setTimer(1500);
    setIsRunning(false);
    setIsSession(true);
    switchingRef.current = false;
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
  }, []);

  const toggleTimer = useCallback(() => {
    setIsRunning((prev) => !prev);
  }, []);

  const incrementBreak = useCallback(() => {
    if (!isRunning && breakLength < 60) {
      setBreakLength((prev) => Math.min(60, prev + 1));
    }
  }, [breakLength, isRunning]);

  const decrementBreak = useCallback(() => {
    if (!isRunning && breakLength > 1) {
      setBreakLength((prev) => Math.max(1, prev - 1));
    }
  }, [breakLength, isRunning]);

  const incrementSession = useCallback(() => {
    if (!isRunning && sessionLength < 60) {
      setSessionLength((prev) => Math.min(60, prev + 1));
      setTimer((sessionLength + 1) * 60);
      //   setTimer((prev) => Math.min(3600, prev + 60));
    }
  }, [sessionLength, isRunning]);

  const decrementSession = useCallback(() => {
    if (!isRunning && sessionLength > 1) {
      setSessionLength((prev) => Math.max(1, prev - 1));
      setTimer((sessionLength - 1) * 60);
    }
  }, [sessionLength, isRunning]);

  const switchTimer = useCallback(() => {
    if (switchingRef.current) return;
    switchingRef.current = true;
    playSound();

    setIsSession((prev) => !prev);
    setTimeout(() => {
      const newTime = isSession ? breakLength * 60 : sessionLength * 60;
      setTimer(newTime);
      switchingRef.current = false;
    }, 1000);
  }, [isSession, breakLength, sessionLength, playSound]);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer <= 0) {
            switchTimer();
            return 0;
          }
          return prevTimer - 1;
        });
      }, 1000);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning, switchTimer]);

  return {
    breakLength,
    sessionLength,
    timer: formatTime(timer),
    isRunning,
    isSession,
    audioRef,
    reset,
    toggleTimer,
    incrementBreak,
    decrementBreak,
    incrementSession,
    decrementSession,
  };
}
