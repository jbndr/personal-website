const colorVariants = {
  blue: "border-blue-700 text-blue-700 bg-blue-400 dark:border-blue-400 dark:text-blue-200 dark:bg-blue-900",
  yellow:
    "border-yellow-700 text-yellow-700 bg-yellow-400 dark:border-yellow-400 dark:text-yellow-200 dark:bg-yellow-900",
  cyan: "border-cyan-700 text-cyan-700 bg-cyan-400 dark:border-cyan-400 dark:text-cyan-200 dark:bg-cyan-900",
  red: "border-red-700 text-red-700 bg-red-400 dark:border-red-400 dark:text-red-200 dark:bg-red-900",
  orange:
    "border-orange-700 text-orange-700 bg-orange-400 dark:border-orange-400 dark:text-orange-200 dark:bg-orange-900",
  sky: "border-sky-700 text-sky-700 bg-sky-400 dark:border-sky-400 dark:text-sky-200 dark:bg-sky-900",
  green:
    "border-green-700 text-green-700 bg-green-400 dark:border-green-400 dark:text-green-200 dark:bg-green-900",
};

type ColorVariant = keyof typeof colorVariants;

interface ChipProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  color: ColorVariant;
}

const Chip = ({ children, color, icon = null }: ChipProps) => {
  return (
    <span
      className={`${colorVariants[color]} flex items-center justify-center gap-x-2 border-b-1 bg-opacity-20 px-2 py-1 font-medium dark:bg-opacity-20`}
    >
      {icon && icon}
      {children}
    </span>
  );
};

export default Chip;
