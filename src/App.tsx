import { Button, Link } from "@nextui-org/react";
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

import {
  BiLogoPython,
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoJava,
  BiLogoFlutter,
  BiLogoDjango,
  BiLogoReact,
} from "react-icons/bi";

import DarkModeToggle from "./DarkModeToggle";
import Chip from "./Chip";

import { useDarkMode } from "usehooks-ts";

const tech = [
  {
    name: "Python",
    icon: <BiLogoPython />,
    color: "orange",
  },
  {
    name: "JavaScript",
    icon: <BiLogoJavascript />,
    color: "yellow",
  },
  {
    name: "TypeScript",
    icon: <BiLogoTypescript />,
    color: "blue",
  },
  {
    name: "Java",
    icon: <BiLogoJava />,
    color: "red",
  },
  {
    name: "React",
    icon: <BiLogoReact />,
    color: "cyan",
  },
  {
    name: "Flutter",
    icon: <BiLogoFlutter />,
    color: "sky",
  },
  {
    name: "Django",
    icon: <BiLogoDjango />,
    color: "green",
  },
];

function App() {
  const { isDarkMode, toggle } = useDarkMode();

  return (
    <div className={`${isDarkMode ? "dark" : "light"}`}>
      <div className="h-screen bg-zinc-50 px-6 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
        <div className="m-auto grid h-full max-w-3xl grid-rows-[auto_1fr_auto] py-8">
          <header className="flex items-center justify-between border-b-1 border-zinc-200 pb-4 dark:border-zinc-900">
            <div className="flex flex-col justify-center">
              <span className="text-xl font-bold">Johannes Binder</span>
              <span className="text-sm">Software Engineer</span>
            </div>
            <div className="flex gap-x-1">
              <Button
                href="https://www.linkedin.com/in/johannes-binder-b608a5160/"
                as={Link}
                isExternal
                isIconOnly
                size="sm"
                variant="light"
              >
                <IoLogoLinkedin color="currentColor" size={18} />
              </Button>
              <Button
                href="https://github.com/jbndr"
                as={Link}
                isExternal
                isIconOnly
                size="sm"
                variant="light"
              >
                <IoLogoGithub size={18} />
              </Button>
              <DarkModeToggle isDarkMode={isDarkMode} toggle={toggle} />
            </div>
          </header>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
          >
            <main className="flex flex-col gap-y-2 py-6">
              <motion.span
                className="text-xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Hey there, I'm Johannes.
              </motion.span>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className=" text-neutral-600 dark:text-neutral-400"
              >
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex flex-wrap items-start gap-2"
              >
                {tech.map((item) => (
                  <Chip icon={item.icon} color={item.color}>
                    {item.name}
                  </Chip>
                ))}
              </motion.div>
            </main>
          </motion.div>

          <footer className="mt-auto">
            <div className="flex w-full justify-between border-t-1 border-zinc-200 pt-12 text-sm dark:border-zinc-900">
              <span>By Johannes</span>
              <span>© 2023</span>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
