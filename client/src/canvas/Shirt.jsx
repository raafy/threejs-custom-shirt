import { Decal, useGLTF, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useSelector } from "react-redux";

export default function Shirt() {
  const logoDecal = useSelector((state) => state.global.logoDecal);
  const fullDecal = useSelector((state) => state.global.fullDecal);
  const isFullTexture = useSelector((state) => state.global.isFullTexture);
  const isLogoTexture = useSelector((state) => state.global.isLogoTexture);
  const color = useSelector((state) => state.global.color);
  const { nodes, materials } = useGLTF("/shirt_baked.glb");
  const logoTexture = useTexture(logoDecal);
  const fullTexture = useTexture(fullDecal);

  useFrame((_state, delta) =>
    easing.dampC(materials.lambert1.color, color, 0.25, delta)
  );

  const stateString = JSON.stringify(useSelector((state) => state.global));

  return (
    <group key={stateString}>
      <mesh
        castShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        material-roughness={1}
        dispose={null}
      >
        {isFullTexture && (
          <Decal
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={1}
            map={fullTexture}
          />
        )}
        {isLogoTexture && (
          <Decal
            position={[0, 0.04, 0.15]}
            rotation={[0, 0, 0]}
            scale={0.15}
            map={logoTexture}
            depthTest={false}
            depthWrite={true}
          />
        )}
      </mesh>
    </group>
  );
}
