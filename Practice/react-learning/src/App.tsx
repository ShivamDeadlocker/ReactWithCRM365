//#region
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
//#endregion
import React from "react";
import "./App.css";
import LifecycleDemo from "./ClassComponentLifeCycle";
import EventHandlingInFunctionalComponent from "./EventHandlingInFunctionalComponent";
import FluentU from "./FluentU";
import MethodAsProps from "./MethodAsProps";
import MyArrowComponent from "./MyArrowComponent";
import MyClassComponent from "./MyClassComponent";
import MyComponent from "./MyComponent";
import PropsInClassComponent from "./PropsInClassComponent";
import { PropsInFunctionalC } from "./PropsInFunctionalC";
import { PropsInFunctionalCDestructing } from "./PropsInFunctionalC";
import SetStateInClassComponent from "./SetstateInClassComponent";
import StateInFunctionalC from "./StateInFunctionalC";

// import ToDoList from "./ToDoList";
// import type Counter from "./StateInClassC";

function App() {
  //Method As Props Example
  const showMessge = () => {
    alert("This is Method As A Props!!!");
  };

  return (
    // <> </>: It is Fragment; A Fragment groups multiple elements without creating an
    // extra HTML element in the browser.
    // Example: We don't wanted <div> tag here, We can also write into the the <div>
    //
    // Extra Wrappers Can:
    // increase DOM size
    //affect CSS
    //affect layouts (Flex/Grid)
    //make HTML messy

    <>
      <MyComponent />
      <br />
      <MyArrowComponent />
      <br />
      <MyClassComponent />
      <br />
      <StateInFunctionalC />
      <br />
      {/* <Counter /> */}
      <br />
      <PropsInFunctionalC name="Shivam" age={22} />
      <br />
      <PropsInFunctionalCDestructing name="Shivam" age={22} />
      <br />
      <PropsInClassComponent name="Shivam" age={22} />
      <br />
      <LifecycleDemo />
      <br />
      <FluentU />
      <br />
      {/* <ToDoList /> */}
      <MethodAsProps handleclick={showMessge} />
      <br />
      <SetStateInClassComponent />
      <br />
      <EventHandlingInFunctionalComponent />
    </>
  );

  //No Need For Now
  // const [count, setCount] = useState(0)

  // return (
  //   <>
  //     <section id="center">
  //       <div className="hero">
  //         <img src={heroImg} className="base" width="170" height="179" alt="" />
  //         <img src={reactLogo} className="framework" alt="React logo" />
  //         <img src={viteLogo} className="vite" alt="Vite logo" />
  //       </div>
  //       <div>
  //         <h1>Get started</h1>
  //         <p>
  //           Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
  //         </p>
  //       </div>
  //       <button
  //         type="button"
  //         className="counter"
  //         onClick={() => setCount((count) => count + 1)}
  //       >
  //         Count is {count}
  //       </button>
  //     </section>

  //     <div className="ticks"></div>

  //     <section id="next-steps">
  //       <div id="docs">
  //         <svg className="icon" role="presentation" aria-hidden="true">
  //           <use href="/icons.svg#documentation-icon"></use>
  //         </svg>
  //         <h2>Documentation</h2>
  //         <p>Your questions, answered</p>
  //         <ul>
  //           <li>
  //             <a href="https://vite.dev/" target="_blank">
  //               <img className="logo" src={viteLogo} alt="" />
  //               Explore Vite
  //             </a>
  //           </li>
  //           <li>
  //             <a href="https://react.dev/" target="_blank">
  //               <img className="button-icon" src={reactLogo} alt="" />
  //               Learn more
  //             </a>
  //           </li>
  //         </ul>
  //       </div>
  //       <div id="social">
  //         <svg className="icon" role="presentation" aria-hidden="true">
  //           <use href="/icons.svg#social-icon"></use>
  //         </svg>
  //         <h2>Connect with us</h2>
  //         <p>Join the Vite community</p>
  //         <ul>
  //           <li>
  //             <a href="https://github.com/vitejs/vite" target="_blank">
  //               <svg
  //                 className="button-icon"
  //                 role="presentation"
  //                 aria-hidden="true"
  //               >
  //                 <use href="/icons.svg#github-icon"></use>
  //               </svg>
  //               GitHub
  //             </a>
  //           </li>
  //           <li>
  //             <a href="https://chat.vite.dev/" target="_blank">
  //               <svg
  //                 className="button-icon"
  //                 role="presentation"
  //                 aria-hidden="true"
  //               >
  //                 <use href="/icons.svg#discord-icon"></use>
  //               </svg>
  //               Discord
  //             </a>
  //           </li>
  //           <li>
  //             <a href="https://x.com/vite_js" target="_blank">
  //               <svg
  //                 className="button-icon"
  //                 role="presentation"
  //                 aria-hidden="true"
  //               >
  //                 <use href="/icons.svg#x-icon"></use>
  //               </svg>
  //               X.com
  //             </a>
  //           </li>
  //           <li>
  //             <a href="https://bsky.app/profile/vite.dev" target="_blank">
  //               <svg
  //                 className="button-icon"
  //                 role="presentation"
  //                 aria-hidden="true"
  //               >
  //                 <use href="/icons.svg#bluesky-icon"></use>
  //               </svg>
  //               Bluesky
  //             </a>
  //           </li>
  //         </ul>
  //       </div>
  //     </section>

  //     <div className="ticks"></div>
  //     <section id="spacer"></section>
  //   </>
  // )
}

export default App;
