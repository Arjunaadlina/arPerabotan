import React, { useState } from "react";
import {
  ViroARScene,
  ViroARSceneNavigator,
  Viro3DObject,
  ViroAmbientLight,
  ViroDirectionalLight,
  ViroMaterials,
  ViroSpotLight,
  ViroARTrackingTargets,
  ViroARImageMarker
} from "@viro-community/react-viro";
import { StyleSheet } from "react-native";

const HelloWorldSceneAR = ({position1, scale1, rotation1}) => {// Start with a rotation to align to 'Left' orientation
  const [initialized, setInitialized] = useState(false);

  ViroMaterials.createMaterials({
    apel: {
      lightingModel: "Phong",
    },
  });

//   const moveObject = (newPosition) => {
//     setPosition(newPosition);
//   };

//   const rotateObject = (rotateState, rotationFactor, source) => {
//     if (rotateState === 3) {
//       let newRotation = [rotation[0], rotation[1] - (rotationFactor * 0.5), rotation[2]];
//       setRotation(newRotation);
//     }
//   };

//   const scaleObject = (pinchState, scaleFactor, source) => {
//     if (pinchState === 3) {
//       let newScale = scale[0] * scaleFactor;
//       setScale([newScale, newScale, newScale]);
//     }
//   };



  return (
    <ViroARScene>
        <ViroAmbientLight color="#ffffff" intensity={250} />
        <ViroDirectionalLight color="#FFFFFF" direction={[0, -0.5, 0]} />
        <ViroSpotLight
          position={[-0.9, -0.5, 0.3]}
          color="#ffffff"
          direction={[0, 0, -1]}
          attenuationStartDistance={5}
          attenuationEndDistance={10}
          innerAngle={5}
          outerAngle={20}
          castsShadow={true}
        />
        <Viro3DObject
          source={require('../assets/models/chair.obj')}
          position={[0, 0, 0]}
          scale={[0.005, 0.005, 0.005]}
          rotation={[0, 130, 0]}
          materials={["apel"]}
          type="OBJ"
        />
    </ViroARScene>
  );
};

export default function Kursi( ) {

  return (
    <ViroARSceneNavigator
      autofocus={true}
      initialScene={{
        scene: () => (
          <HelloWorldSceneAR/>
        ),
      }}
      style={styles.f1}
    />
  );
}

const styles = StyleSheet.create({
  f1: { flex: 1 },
});
