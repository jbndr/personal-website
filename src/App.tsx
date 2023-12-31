import {
  BiLogoDjango,
  BiLogoFlutter,
  BiLogoJava,
  BiLogoJavascript,
  BiLogoPython,
  BiLogoReact,
  BiLogoTypescript,
} from 'react-icons/bi';
import {
  IoLogoGithub,
  IoLogoLinkedin,
} from 'react-icons/io5';
import { useDarkMode } from 'usehooks-ts';

import {
  Button,
  Link,
  Spacer,
} from '@nextui-org/react';

import Chip from './Chip';
import DarkModeToggle from './DarkModeToggle';

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
] as const;

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
                aria-label="Johannes Binder's LinkedIn Profile"
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
                aria-label="Johannes Binder's GitHub Profile"
              >
                <IoLogoGithub size={18} />
              </Button>
              <DarkModeToggle isDarkMode={isDarkMode} toggle={toggle} />
            </div>
          </header>
          <div>
            <main className="flex flex-col gap-y-2 py-6">
              <span className="text-xl">Hey, I'm Johannes.</span>

              <p className="text-neutral-600 dark:text-neutral-400">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
              </p>

              <div className="flex flex-wrap items-start gap-2">
                {tech.map((item) => (
                  <Chip key={item.name} icon={item.icon} color={item.color}>
                    {item.name}
                  </Chip>
                ))}
              </div>

              <Spacer y={4} />

              <span className="text-xl">Projects</span>

              <div className="flex flex-col gap-y-4">
                <div className="flex justify-between gap-x-12">
                  <div className="flex w-4/5 flex-col">
                    <span className="text-lg font-black">
                      Splines for Radial Charts
                    </span>
                    <span className="text-neutral-600 dark:text-neutral-400">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat.
                    </span>
                  </div>
                  <div className="aspect-video h-28 w-28 bg-neutral-500" />
                </div>

                <div className="flex justify-between gap-x-12">
                  <div className="flex w-4/5 flex-col">
                    <span className="text-lg font-black">
                      Solving the 3D Wave Equation Numerically
                    </span>
                    <span className="text-neutral-600 dark:text-neutral-400">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat.
                    </span>
                  </div>
                  <div className="aspect-video h-28 w-28 bg-neutral-500" />
                </div>
              </div>
            </main>
          </div>

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
