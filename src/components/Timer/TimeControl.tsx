import { TimeControlProps } from "../../types";
import { Minus, Plus } from "lucide-react";
export function TimeControl({
  label,
  value,
  onIncrement,
  onDecrement,
  labelId,
  lengthId,
  incrementId,
  decrementId,
}: TimeControlProps) {
  return (
    <div className="flex flex-col items-center space-y-2">
      <h2
        id={labelId}
        className={`text-lg font-medium text-gray-700 dark:text-gray-200`}
      >
        {label}
      </h2>
      <div className="flex items-center space-x-4">
        <button
          id={decrementId}
          onClick={onDecrement}
          className={`p-2 rounded-full dark:hover:bg-gray-700 hover:bg-gray-200 transition-colors`}
        >
          <Minus size={20} className={"dark:text-gray-300 text-gray-600"} />
        </button>
        <span
          id={lengthId}
          className={`text-xl font-semibold min-w-[2ch] text-center dark:text-gray-200 text-gray-800`}
        >
          {value}
        </span>
        <button
          id={incrementId}
          onClick={onIncrement}
          className={`p-2 rounded-full dark:hover:bg-gray-700 hover:bg-gray-200 transition-colors`}
        >
          <Plus size={20} className={"dark:text-gray-300 text-gray-600"} />
        </button>
      </div>
    </div>
  );
}
