import "./App.css";
import { Footer } from "./components/Layout/footer";
import { Header } from "./components/Layout/header";
import { TimeControl } from "./components/Timer/TimeControl";
import { TimerDisplay } from "./components/Timer/TimerDisplay";
import { useDarkMode } from "./hooks/useDarkMode";
import { useTimer } from "./hooks/useTimer";

function App() {
  const { isDark, setIsDark } = useDarkMode();
  const {
    breakLength,
    sessionLength,
    timer,
    isRunning,
    isSession,
    audioRef,
    incrementBreak,
    decrementBreak,
    incrementSession,
    decrementSession,
    toggleTimer,
    reset,
  } = useTimer();
  return (
    <div className="min-h-screen flex flex-col">
      <Header isDark={isDark} onToggleTheme={() => setIsDark(!isDark)} />
      <div className="flex-1 relative">
        <div
          className={`absolute inset-0 -z-10 h-full w-full items-center dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] [background:radial-gradient(125%_125%_at_50%_10%,#f5f5f5_40%,#63e_100%)]`}
        ></div>
        <main className="container flex items-center justify-center min-h-[calc(100vh-8rem)] mx-auto">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl max-w-md">
            <div className="flex justify-around mb-8">
              <TimeControl
                label="Break Length"
                value={breakLength}
                onIncrement={incrementBreak}
                onDecrement={decrementBreak}
                labelId="break-label"
                lengthId="break-length"
                incrementId="break-increment"
                decrementId="break-decrement"
              />

              <TimeControl
                label="session Length"
                value={sessionLength}
                onIncrement={incrementSession}
                onDecrement={decrementSession}
                labelId="session-label"
                lengthId="session-length"
                incrementId="session-increment"
                decrementId="session-decrement"
              />
            </div>

            <TimerDisplay
              timeLeft={timer}
              timerLabel={isSession ? "Session" : "Break"}
              isRunning={isRunning}
              onStartStop={toggleTimer}
              onReset={reset}
            />

            <audio
              id="beep"
              ref={audioRef}
              src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
            />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
