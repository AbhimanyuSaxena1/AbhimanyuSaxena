import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import TextType from './TextType';


const Loader = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    let counterValue = 0;
    const counterElement = counterRef.current;

    const updateCounter = () => {
      if (counterValue >= 100) return;
      counterValue += Math.floor(Math.random() * 10) + 1;
      if (counterValue > 100) counterValue = 100;
      if (counterElement) counterElement.textContent = counterValue;

      const delay = Math.floor(Math.random() * 200) + 50;
      setTimeout(updateCounter, delay);
    };
    updateCounter();
    const timeline = gsap.timeline();

    gsap.to(".counter", 0.25, {
      delay: 3.5,
      opacity: 0,
    });
    gsap.to(".bar", 1.5, {
      delay: 3.5,
      height: 0,
      stagger: {
        amount: 0.5,
      },
      ease: "power4.inOut",
    });
    gsap.from(".h1", 1.5, {
      delay: 4,
      y: 700,
      stagger: {
        amount: 0.5,
      },
      ease: "power4.inOut",
    });
    gsap.from(".hero", 2, {
      delay: 4.5,
      y: 400,
      ease: "power4.inOut",
    });
  }, []);

  return (
  <main>
      <h1
        ref={counterRef}
        className="counter font-[PhatBoy] fixed w-full h-full flex justify-end items-end text-white z-[60] py-20 md:py-8 px-8 text-[7rem] md:text-[20rem]"
      >
        0
      </h1>
      <div className="overlay fixed w-full h-full top-0 flex z-[50] pointer-events-none">
        <div className="bar w-[10vw] h-full bg-blue-600"></div>
        <div className="bar w-[10vw] h-full bg-blue-600"></div>
        <div className="bar w-[10vw] h-full bg-blue-600"></div>
        <div className="bar w-[10vw] h-full bg-blue-600"></div>
        <div className="bar w-[10vw] h-full bg-blue-600"></div>
        <div className="bar w-[10vw] h-full bg-blue-600"></div>
        <div className="bar w-[10vw] h-full bg-blue-600"></div>
        <div className="bar w-[10vw] h-full bg-blue-600"></div>
        <div className="bar w-[10vw] h-full bg-blue-600"></div>
        <div className="bar w-[10vw] h-full bg-blue-600"></div>
        <div className="bar w-[10vw] h-full bg-blue-600"></div>
        <div className="bar w-[10vw] h-full bg-blue-600"></div>
        <div className="bar w-[10vw] h-full bg-blue-600"></div>
        <div className="bar w-[10vw] h-full bg-blue-600"></div>
        <div className="bar w-[10vw] h-full bg-blue-600"></div>
        <div className="bar w-[10vw] h-full bg-blue-600"></div>
        <div className="bar w-[10vw] h-full bg-blue-600"></div>
      </div>
  <div className="gap-10">
  <nav className="fixed py-8 flex bg-white shadow-2xl items-center z-[50] text-black top-0 h-16 w-full px-4 md:px-20">
    <div className="logo flex items-center justify-start h-full">
      <img src="./logo.webp" className="w-32 md:w-40" alt="" />
    </div>
    <div className="flex-1 flex items-center justify-end">
      <div className="hidden md:flex gap-10 text-2xl items-center">
        <a href="#home" className="cursor-pointer hover:text-blue-700 transition-colors">Home</a>
        <a href="#games" className="cursor-pointer hover:text-blue-700 transition-colors">Games</a>
        <a href="#about" className="cursor-pointer hover:text-blue-700 transition-colors">About</a>
        <a href="/earn-more" className="cursor-pointer hover:text-blue-700 transition-colors">Learn More</a>
      </div>
      <button className="md:hidden flex items-center justify-center p-2 rounded-lg bg-blue-700 hover:bg-blue-900 transition-colors ml-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
    {menuOpen && (
      <div className="absolute md:hidden top-16 left-0 w-full bg-white shadow-2xl flex flex-col items-center gap-6 py-8 z-[60] animate-fade-in">
        <button className="cursor-pointer hover:text-blue-700 transition-colors text-2xl bg-transparent border-none" onClick={() => { setMenuOpen(false); document.getElementById('home')?.scrollIntoView({behavior: 'smooth'}); }}>Home</button>
        <button className="cursor-pointer hover:text-blue-700 transition-colors text-2xl bg-transparent border-none" onClick={() => { setMenuOpen(false); document.getElementById('games')?.scrollIntoView({behavior: 'smooth'}); }}>Games</button>
        <button className="cursor-pointer hover:text-blue-700 transition-colors text-2xl bg-transparent border-none" onClick={() => { setMenuOpen(false); document.getElementById('about')?.scrollIntoView({behavior: 'smooth'}); }}>About</button>
        <a href="/earn-more" className="cursor-pointer hover:text-blue-700 transition-colors text-2xl" onClick={() => setMenuOpen(false)}>Learn More</a>
      </div>
    )}
  </nav>
        <div className="flex flex-col gap-8 md:gap-16 w-full items-center justify-center mt-24 md:mt-32">
          <div id="hero" className="header flex flex-col gap-6 md:flex-row px-4 md:px-10 w-full h-auto md:h-100 justify-between pt-10 md:pt-20 md:p-8 leading-none">
            <h1 className="font-[PhatBoy] text-4xl md:text-[18rem]">
              Play <span className="text-2xl md:text-[10rem]">incredible</span>
            </h1>
            <img className="md:hidden w-full rounded-2xl" src="https://www.vrbeginnersguide.com/wp-content/uploads/2023/12/person-holding-a-PS5-controller.jpg" alt="" />
          </div>
          <div className="her w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 px-4 md:px-16 py-10 md:py-16 h-auto md:h-[100vh] bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-xl shadow-xl">
            <div className="text w-full md:w-1/2 flex flex-col items-start justify-center mb-6 md:mb-0">
              <h1 className="font-[PhatBoy] text-3xl md:text-5xl text-blue-900 mb-4">PS5</h1>
              <p className="text-base md:text-2xl text-gray-700 leading-relaxed">Feel incredible gaming possibilities that go beyond the extraordinary with PlayStation®5 and PS5® Digital Edition consoles.</p>
            </div>
            <div className="image w-full md:w-1/2 flex items-center justify-center">
              <img src="./ps5.webp" className="w-full max-w-md rounded-xl shadow-xl object-contain" alt="PS5 Console" />
            </div>
          </div>
          
          <section className="bento-grid w-full flex justify-center items-center px-4 md:px-10  md:py-16 mt-0 ">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-6xl">
              {/* ...existing bento grid items... */}
            </div>
          </section>
          
          {/* <div className="image w-full md:w-1/2 flex items-center justify-center">
            <img src="./ps5.webp" className="w-full max-w-md rounded-xl shadow-xl object-contain" alt="PS5 Console" />
          </div> */}
        </div>

        {/* Bento Grid Section */}
       <div className="text w-full flex items-center mt-8 md:mt-66 justify-center">
         <TextType 
          text={["Stunning games on PS5"]}
          typingSpeed={75}
          pauseDuration={1000}
          showCursor={true}
          cursorCharacter="|"
          className="text-center font-[PhatBoy] text-2xl text-black"
        />
       </div>
  <section id="games" className="bento-grid w-full flex justify-center items-center px-4 md:px-10 py-8 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-6xl">
            <div className="col-span-2 row-span-2 rounded-xl overflow-hidden">
              <img src="https://th.bing.com/th/id/OIP.8ld7V0kKlVrPvqvXdGNvZgHaLG?w=204&h=306&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="Bento 1" className="w-full h-full object-cover" />
            </div>
              <div className="rounded-xl overflow-hidden">
                <img src="https://th.bing.com/th/id/OIP.-Vzte8MV_FPgd6qZ92zRewHaNK?w=208&h=326&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="Bento 2" className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl active:scale-95 cursor-pointer" />
              </div>
              <div className="rounded-xl overflow-hidden">
                <img src="https://th.bing.com/th/id/OIP.awkG77i0PSW2pFmTaALp-gHaKz?w=206&h=302&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="Bento 3" className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl active:scale-95 cursor-pointer" />
              </div>
            <div className="col-span-2 rounded-xl overflow-hidden">
              <img src="https://th.bing.com/th/id/OIP.fbEhwsgbZXd-f8iYJKn9HgHaLG?w=204&h=306&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="Bento 4" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden">
              <img src="https://th.bing.com/th/id/OIP.s4DAPhiIosFnHf4FKsxJYgHaKe?w=208&h=294&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Bento 5" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden">
              <img src="https://th.bing.com/th/id/OIP.B5cS_X7tv_zZFfEWXDkP9wHaKe?w=208&h=294&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Bento 6" className="w-full h-full object-cover" />
            </div>
            <div className=" rounded-xl overflow-hidden">
              <img src="https://th.bing.com/th/id/OIP.C2bA4BC-86M0tyTCUYwG_gHaKe?w=208&h=294&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="Bento 7" className="w-full h-full object-cover" />
            </div>
             <div className="rounded-xl overflow-hidden">
              <img src="https://th.bing.com/th/id/OIP.-Vzte8MV_FPgd6qZ92zRewHaNK?w=208&h=326&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="Bento 8" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Loader;
