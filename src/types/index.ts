export interface HeaderProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

export interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}
export interface TimeControlProps {
  label: string;
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
  labelId: string;
  lengthId: string;
  incrementId: string;
  decrementId: string;
}

export interface TimerDisplayProps {
  timeLeft: string;
  timerLabel: string;
  isRunning: boolean;
  onStartStop: () => void;
  onReset: () => void;
}
