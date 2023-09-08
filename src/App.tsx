import { Button, Link } from "@nextui-org/react";
import {
  IoLogoLinkedin,
  IoLogoGithub,
  IoLogoPython,
  IoLogoJavascript,
  IoLogoReact,
} from "react-icons/io5";

import DarkModeToggle from "./DarkModeToggle";
import Chip from "./Chip";

import { useDarkMode } from "usehooks-ts";

function App() {
  const { isDarkMode, toggle } = useDarkMode();

  return (
    <main className={`${isDarkMode ? "dark" : "light"}`}>
      <div className="h-screen bg-zinc-50 px-6 py-8 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
        <div className="m-auto flex w-full max-w-3xl flex-col gap-y-8">
          <header className="flex w-full items-center justify-between border-b-1 border-zinc-200 pb-5 dark:border-zinc-900">
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
          <div className="flex gap-4">
            <Chip icon={<IoLogoPython size={18} />} color="blue">
              Python
            </Chip>
            <Chip icon={<IoLogoJavascript size={18} />} color="yellow">
              JavaScript
            </Chip>
            <Chip icon={<IoLogoReact size={18} />} color="cyan">
              React
            </Chip>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
