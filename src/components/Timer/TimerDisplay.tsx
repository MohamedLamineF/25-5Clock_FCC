import { Pause, TimerIcon } from "lucide-react";
import { TimerDisplayProps } from "../../types";

export function TimerDisplay({
  timeLeft,
  timerLabel,
  isRunning,
  onStartStop,
  onReset,
}: TimerDisplayProps) {
  return (
    <div className="flex flex-col items-center space-y-2">
      <h2
        id="timer-label"
        className={`text-lg font-medium dark:text-gray-200 text-gray-700`}
      >
        {timerLabel}
      </h2>

      <div
        id="time-left"
        className={`text-4xl font-semibold dark:text-gray-100 text-gray-800`}
      >
        {timeLeft}
      </div>

      <div className="flex items-center space-x-4">
        <button
          id="start_stop"
          onClick={onStartStop}
          className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
        >
          {isRunning ? (
            <Pause size={20} className="mr-2" />
          ) : (
            <TimerIcon size={20} className="mr-2" />
          )}
          <span className="ml-2">{isRunning ? "Pause" : "Start"}</span>
        </button>

        <button
          id="reset"
          onClick={onReset}
          className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
