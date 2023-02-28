import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const items = [
  {
    id: 1,
    content: "have a side hustle"
  },
  {
    id: 2,
    content: "make a difference"
  },
  {
    id: 3,
    content: "make an income"
  },
  {
    id: 4,
    content: "have an impact"
  }
];

const Test01 = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((state) => {
        if (state >= items.length - 1) return 0;
        return state + 1;
      });
    }, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="w-full text-center" style={{ position: "relative" }}>
      <h1 className="text-6xl font-extrabold tracking-tight text-white md:text-8xl">
        A place for creators to
        <div className="mask">
          <AnimatePresence>
        
            <motion.div
              key={items[index].id}
              initial={{ y: '100%' }}
              animate={{ y: '-100%'}}
              exit={{ y: '-200%' }}
              transition={{ duration: .75, ease: "easeInOut", delay: 1.3 }}
              style={{ position: "absolute" }}
              className="w-full text-center animation"
            >
              <h1 className="text-center text-6xl font-extrabold tracking-tight text-aanred md:text-8xl">{items[index].content}</h1>
            </motion.div>
            
          </AnimatePresence>
        </div>
     
      </h1>
    </div>
  );
};

export default Test01;