import Contact from "./components/Contact";
import Header from "./components/Header";
import Home from "./components/Home";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Partners from "./components/Partners";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <main className="grid gap-12 sm:gap-16 md:gap-24 lg:gap-32 px-4 overflow-hidden">
        <a
          href="#"
          className="py-2 px-6 bg-amber-400 dark:text-neutral-900 mx-auto my-12 flex gap-2 shadow-xl hover:shadow-none transition-shadow  focus:outline-none focus-visible:ring-4 ring-neutral-900 rounded-md ring-offset-4 ring-offset-white dark:ring-amber-400 dark:ring-offset-neutral-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>

          <span>Download the App</span>
        </a>
        <Main />
        <Partners />
        <Home />
      </main>
      <Contact />
    </>
  );
}

export default App;
