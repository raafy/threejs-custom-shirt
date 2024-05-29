import { AnimatePresence, motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { CustomButton } from "../components";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";
import { setIntro } from "../store/globalSlice";

export default function Home() {
  const isIntro = useSelector((state) => state.global.intro);
  const dispatch = useDispatch();
  return (
    <AnimatePresence>
      {isIntro && (
        <motion.section className="home" {...slideAnimation("left")}>
          <motion.header {...slideAnimation("down")}>
            <img
              src="./threejs.png"
              alt="logo"
              className="object-contain w-8 h-8"
            />
          </motion.header>
          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                LET&apos;S <br className="hidden xl:block" /> DO IT.
              </h1>
            </motion.div>
            <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-5"
            >
              <p className="max-w-md text-base font-normal text-gray-600">
                Create your unique and exclusive shirt with our brand-new 3D
                customization tool. <strong>Unleash your imagination</strong>{" "}
                and define your own style
              </p>
              <CustomButton
                type="filled"
                title="Customize It"
                handleClick={() => dispatch(setIntro(false))}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              ></CustomButton>
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
