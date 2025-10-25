import { motion } from "motion/react";

const App = () => {
  return (
    <div>
      {/* <motion.div
        animate={{ x: 1000, rotate: 720, y: 500 }}
        transition={{ duration: 3, delay: 1.5 }}
        className="w-[200px] h-[200px] bg-red-600 border-3 border-white"
      ></motion.div>
      <motion.div
        animate={{ x: 1000 }}
        transition={{ duration: 3, delay: 1.5 }}
        className="w-[200px] h-[200px] bg-green-600 rounded-full border-3 border-white"
      ></motion.div> */}
      {/* <motion.h1
        animate={{ x: 1000, y: 200 }}
        transition={{ duration: 2 }}
        className="text-4xl"
      >
        This is Sifat
      </motion.h1> */}

      {/* <motion.img
        animate={{ x: 1000, rotate: 720 }}
        transition={{
          duration: 2,
          delay: 1,
          // repeat: Infinity,
          repeat: 2,
          ease: "anticipate",
        }}
        src="https://e7.pngegg.com/pngimages/407/726/png-clipart-cartoon-school-cartoon-child-child-photography-thumbnail.png"
        alt=""
      /> */}
      <motion.div
        initial={{ x: 0, y: 0 }}
        animate={{
          x: [0, 800, 800, 0, 0],
          y: [0, 0, 300, 300, 0],
          rotate: [0, 360, 0, -360, 0],
        }}
        transition={{ duration: 2, delay: 1 }}
        className="w-[200px] h-[200px] border-2 border-red-600 bg-purple-500"
      ></motion.div>
    </div>
  );
};

export default App;
