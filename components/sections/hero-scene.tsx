
"use client";

import { Suspense, useRef, type FC } from "react";
import { Canvas, useFrame, type RootState } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { Astronaut } from "@/components/portfolio/astronaut";
import { Loader } from "@/components/portfolio/loader";
import { useSceneActive } from "@/hooks/use-scene-active";

const Rig: FC = () => {
  useFrame((state: RootState, delta: number) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta,
    );
  });

  return null;
};

export const HeroScene: FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });

  const frame = useRef<HTMLElement>(null);
  const active = useSceneActive({ whenVisible: frame });

  return (
    <figure
      ref={frame}
      className="pointer-events-none absolute inset-0 z-[5]"
      style={{
        width: "100%",
        height: "100%",
      }}
      aria-hidden="true"
    >
      <Canvas
        camera={{
          position: [0, 1, 3],
          fov: 50,
          near: 0.1,
          far: 100,
        }}
        frameloop={active ? "always" : "never"}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "default",
        }}
      >
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={1.5} />

          <directionalLight
            position={[5, 5, 5]}
            intensity={2}
          />

          <Float
            speed={1.5}
            rotationIntensity={0.3}
            floatIntensity={0.5}
          >
            <Astronaut
              scale={isMobile ? 0.23 : 0.3}
              position={isMobile ? [0, -1.5, 0] : [1.3, -1, 0]}
            />
          </Float>

          <Rig />
        </Suspense>
      </Canvas>
    </figure>
  );
};