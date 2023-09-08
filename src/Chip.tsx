interface ChipProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  color: string;
}

const Chip = ({ children, color, icon = null }: ChipProps) => {
  const colorTheme = `border-${color}-400 text-${color}-500 bg-${color}-900`;

  return (
    <span
      className={`flex items-center justify-center gap-x-2 border-t-1 bg-opacity-20 px-2 py-1 ${colorTheme}`}
    >
      {icon && icon}
      {children}
    </span>
  );
};

export default Chip;
