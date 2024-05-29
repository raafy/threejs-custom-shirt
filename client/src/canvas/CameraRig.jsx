import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useRef } from "react";
import { useSelector } from "react-redux";

export default function CameraRig({ children }) {
  const group = useRef();
  const isIntro = useSelector((state) => state.global.intro);

  useFrame((state, delta) => {
    const isBreakpoint = window.innerWidth <= 1260;
    const isMobile = window.innerWidth <= 600;

    let targetPosition = [-0.4, 0, 2];

    if (isIntro) {
      if (isBreakpoint) {
        targetPosition = [0, 0, 2];
      }
      if (isMobile) {
        targetPosition = [0, 0.2, 2.5];
      }
    } else {
      if (isMobile) {
        targetPosition = [0, 0, 2.5];
      } else {
        targetPosition = [0, 0, 2];
      }
    }

    easing.damp3(state.camera.position, targetPosition, 0.25, delta);

    easing.dampE(
      group.current.rotation,
      [state.pointer.y / 10, -state.pointer.x / 5, 0],
      0.25,
      delta
    );
  });

  return <group ref={group}>{children}</group>;
}
