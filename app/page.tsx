import Image from "next/image";
import Hero from "./components/Hero";
import ScrollSection from "./components/ScrollSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <ScrollSection />
      <Footer />
    </main>
  );
}


// import React, { ReactNode, useLayoutEffect, useRef } from 'react'
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import gsap from 'gsap';
// import { useGSAP } from '@gsap/react';
// import styles from './style.module.css';

// interface Props {
//   children: ReactNode;
// }

// const phrases = [
//   "Los Flamencos National Reserve", 
//   "is a nature reserve located", 
//   "in the commune of San Pedro de Atacama", 
//   "The reserve covers a total area", 
//   "of 740 square kilometres (290 sq mi)"
// ]

// function AnimatedText({children}: Props) {
//   const text = useRef(null);

//   useGSAP( () => {
//     gsap.registerPlugin(ScrollTrigger);

//     gsap.from(text.current, {
//       duration: 5,
//       opacity: 0,
//       left: "-200px",
//       ease: "power3.Out",
//       scrollTrigger: {
//         trigger: text.current,
//         scrub: true,
//         start: "0px bottom",
//         end: "bottom+=400px bottom",
//         // markers: true
//       },
//     })
//   }, [])

//   return <p ref={text}>{children}</p>
// }

// export default function Index() {

//   return (
//     <div id="Trigger" className={styles.description} >
//       {
//         phrases.map( (phrase, index) => {
//           return (
//             <AnimatedText key={index}>
//               {phrase}
//             </AnimatedText>
//           )
//         })
//       }
//     </div>
//   )
// }