import { Spinning, Floating, HDRI, StandardEnvironment } from "spacesvr";
import TransparentFloor from "../ideas/TransparentFloor";
import CloudySky from "../ideas/CloudySky";
import { Stars } from "@react-three/drei";
import Interior from '../ideas/Interior/Interior-test'

export default function Starter() {
  return (
    <StandardEnvironment>
      <HDRI
        src="/lilienstein_4k.hdr"
        // hideBackground={false} // set to true to only apply radiance
      />
      <Interior position={[0,0.01,0]} />
      <ambientLight />
      {/* <Stars /> */}
      <mesh rotation-x={-Math.PI / 2}>
        <planeBufferGeometry args={[500, 500]} />
        <meshStandardMaterial color="gray" />
      </mesh>
      {/* <group position={[0, 0, -4]}>
        <Floating>
          <Spinning xSpeed={0.2} ySpeed={0.4} zSpeed={0.3}>
            <mesh>
              <torusKnotBufferGeometry args={[1, 0.2]} />
              <meshStandardMaterial color="blue" />
            </mesh>
          </Spinning>
        </Floating>
      </group>
      <CloudySky color="white" />*/}
      {/* <TransparentFloor opacity={1} />  */}
    </StandardEnvironment>
  );
}
