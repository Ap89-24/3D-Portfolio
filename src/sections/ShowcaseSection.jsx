import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { FaGithub } from "react-icons/fa";
import {useGSAP} from "@gsap/react"
import { motion } from "framer-motion";
import TitleHeader from "../components/TitleHeader";



gsap.registerPlugin(ScrollTrigger)

const ShowcaseSection = () => {

  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {

    const projects = [project1Ref.current , project2Ref.current , project3Ref.current];

     projects.forEach((project , index) => {
          gsap.fromTo(
            project,
            {
              y: 50 , 
              opacity: 0
            },
            {
              y: 0,
              opacity: 1 ,
              duration: 1,
              delay: 0.3 * (index + 1),
              scrollTrigger: {
                trigger: project,
                start: 'top bottom-=100'
              }
            },
          )
     })

          gsap.fromTo(
      sectionRef.current,
      {opacity: 0},
      {opacity: 1 , duration: 1.5}
     );
  } , [])

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
      <motion.h1
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
       class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center leading-tight  drop-shadow-[0_0_20px_rgba(168,85,247,0.5)] mb-7">
           <TitleHeader title={" Things I’ve Built"} sub={"🚀 My  Projects"} />
      </motion.h1>
        <div className="showcaselayout">
          {/*//? LEFT */}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <img
                src="/images/myproduct1.png"
                alt="evenza"
                className="object-contain"
              />
            </div>

            <div className="text-content">
              <h2>
                Smart AI-powered platform to discover, create, and manage events
                effortlessly.
              </h2>
              <p className="text-white-50 md:text-xl">
                From personalized event recommendations to seamless creation and
                real-time management, our AI simplifies every step—helping you
                organize unforgettable experiences faster and smarter.
              </p>
              <a
                href="https://github.com/Ap89-24/AI-Event-Organizer"
                target="_blank"
                className="flex items-center gap-2 text-purple-600 hover:underline"
              >
                <FaGithub size={20} />
                View Source Code
              </a>
            </div>
          </div>
          {/*//? RIGHT */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#ffefdb]">
                <img src="/images/myproduct2.png" alt="Expense Management" />
              </div>
              <h2 className="mb-5">Expense Tracker</h2>
              <p className="text-white-50 md:text-xl mb-4">
                Built a full-stack Expense Tracker application that allows users
                to manage their income and expenses efficiently. It features
                secure authentication using JWT and cookies, interactive data
                visualization through charts, and a responsive UI for seamless
                usage across devices.
              </p>
              <a
                href="https://github.com/Ap89-24/Expense-Tracker"
                target="_blank"
                className="flex items-center gap-2 text-purple-600 hover:underline"
              >
                <FaGithub size={20} />
                View Source Code
              </a>
            </div>

            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#ffe7db]">
                <img src="/images/project3.png" alt="Expense Management" />
              </div>
              <h2 className="mb-5">A Startup Showcase App</h2>
              <p className="text-white-50 md:text-xl mb-4">
                Built a full-stack Expense Tracker application that allows users
                to manage their income and expenses efficiently. It features
                secure authentication using JWT and cookies, interactive data
                visualization through charts, and a responsive UI for seamless
                usage across devices.
              </p>
              <a
                href="https://github.com/Ap89-24/Expense-Tracker"
                target="_blank"
                className="flex items-center gap-2 text-purple-600 hover:underline"
              >
                <FaGithub size={20} />
                View Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
