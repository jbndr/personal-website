import { Button, Link } from "@nextui-org/react";
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";

import { useDarkMode } from "usehooks-ts";
import DarkModeToggle from "./DarkModeToggle";

function App() {
  const { isDarkMode, toggle } = useDarkMode();

  return (
    <main className={`${isDarkMode ? "dark" : "light"}`}>
      <div className="px-6 h-screen py-8 bg-zinc-50 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
        <div className="flex w-full m-auto max-w-3xl">
          <header className="w-full flex items-center justify-between pb-5 border-b-1 border-zinc-200 dark:border-zinc-900">
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
        </div>
      </div>
    </main>
  );
}

export default App;
