import React, { useState } from "react";
import Button from "./Button";
import AnimatedCounter from "./AnimatedCounter";

const Page = () => {
  const [trigger, setTrigger] = useState(0);

  return (
    <>
      <Button
        text="Show Stats"
        id="counter"
        onTrigger={() => setTrigger(prev => prev + 1)} // 🔥 change key
      />

      <AnimatedCounter trigger={trigger} />
    </>
  );
};

export default Page;