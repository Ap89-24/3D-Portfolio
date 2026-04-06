import SlotCounter from "react-slot-counter";
import { counterItems } from "../constants";

//const CountUp = CountUpModule.default || CountUpModule;

const AnimatedCounter = ({trigger }) => {

  return (
    <div id="counter" className="padding-x-lg xl:mt-0 mt-32">
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item, index) => (
          <div
            key={item.label || index}
            className="bg-zinc-900 rounded-lg p-10 flex flex-col items-center justify-center"
          >
            <div className="counter-number text-white text-5xl font-bold mb-2">

              {/* 🔥 Only render when triggered */}
              <SlotCounter
                key={trigger} // 🔥 THIS IS THE MAGIC
                value={`${item.value}${item.suffix || ""}`}
                duration={2}
              />

            </div>
            <div className="text-white text-lg">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;
