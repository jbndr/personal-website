import { Button, Link } from "@nextui-org/react";
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";

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

function App() {
  const { isDarkMode, toggle } = useDarkMode();

  return (
    <div className={`${isDarkMode ? "dark" : "light"}`}>
      <div className="h-screen bg-zinc-50 px-6 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
        <div className="m-auto grid h-full max-w-3xl grid-rows-[auto_1fr_auto] py-8">
          <header className="flex items-center justify-between border-b-1 border-zinc-200 pb-6 dark:border-zinc-900">
            <span className="font-bold">Johannes Binder</span>
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
          <main className="flex flex-col gap-y-2 py-6">
            <span className="text-xl font-semibold">Experience</span>
            <div className="flex flex-wrap justify-between gap-2">
              <Chip icon={<BiLogoPython size={18} />} color="orange">
                Python
              </Chip>
              <Chip icon={<BiLogoJavascript size={18} />} color="yellow">
                JavaScript
              </Chip>
              <Chip icon={<BiLogoTypescript size={18} />} color="blue">
                TypeScript
              </Chip>
              <Chip icon={<BiLogoJava size={18} />} color="red">
                Java
              </Chip>
              <Chip icon={<BiLogoReact size={18} />} color="cyan">
                React
              </Chip>
              <Chip icon={<BiLogoFlutter size={18} />} color="sky">
                Flutter
              </Chip>
              <Chip icon={<BiLogoDjango size={18} />} color="green">
                Django
              </Chip>
            </div>
          </main>
          <footer className="mt-auto">
            <div className="flex w-full justify-between border-t-1 border-zinc-200 pt-6 text-sm dark:border-zinc-900">
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
