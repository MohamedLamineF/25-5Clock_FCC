import "./App.css";
import { Footer } from "./components/Layout/footer";
import { Header } from "./components/Layout/header";
import { TimeControl } from "./components/Timer/TimeControl";
import { useDarkMode } from "./hooks/useDarkMode";
import { useTimer } from "./hooks/useTimer";

function App() {
  const { isDark, setIsDark } = useDarkMode();
  const {
    breakLength,
    sessionLength,
    timeLeft,
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
          className={`absolute inset-0 -z-10 h-full w-full items-center ${
            isDark
              ? "[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"
              : "[background:radial-gradient(125%_125%_at_50%_10%,#f5f5f5_40%,#63e_100%)]"
          }`}
        ></div>
        <main className="container mx-auto px-4 py-8 flex items-center justify-center">
          <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
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
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
