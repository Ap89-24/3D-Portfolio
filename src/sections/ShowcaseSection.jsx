import { FaGithub } from "react-icons/fa";

const ShowcaseSection = () => {
  return (
    <div id="work" className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/*//? LEFT */}
          <div className="first-project-wrapper">
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
                href="https://github.com/Ap89-24/Expense-Tracker"
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
            <div className="project">
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

            <div className="project">
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
    </div>
  );
};

export default ShowcaseSection;
