import {
  AnimatePresence,
  motion,
} from 'framer-motion';
import {
  IoMoon,
  IoSunny,
} from 'react-icons/io5';

import { Button } from '@nextui-org/react';

interface DarkModeToggleProps {
  isDarkMode: boolean;
  toggle: () => void;
}

const DarkModeToggle = ({ isDarkMode, toggle }: DarkModeToggleProps) => {
  return (
    <Button
      isIconOnly
      variant="light"
      size="sm"
      onClick={toggle}
      aria-label="Theme Toggle"
    >
      <AnimatePresence mode="wait" initial={false}>
        {!isDarkMode ? (
          <motion.div
            key="moon"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
          >
            <IoMoon size={18} />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
          >
            <IoSunny size={18} />
          </motion.div>
        )}
      </AnimatePresence>
    </Button>
  );
};

export default DarkModeToggle;
