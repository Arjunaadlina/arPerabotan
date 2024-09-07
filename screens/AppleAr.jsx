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

const HelloWorldSceneAR = ({position1, scale1, rotation1, model, texture}) => {
  const [position, setPosition] = useState(position1);
  const [scale, setScale] = useState(scale1);
  const [rotation, setRotation] = useState(rotation1); // Start with a rotation to align to 'Left' orientation
  const [initialized, setInitialized] = useState(false);

  console.log('ini texture', texture)

  ViroMaterials.createMaterials({
    apel: {
      lightingModel: "Phong",
      diffuseTexture: texture,
    },
  });

  const moveObject = (newPosition) => {
    setPosition(newPosition);
  };

  const rotateObject = (rotateState, rotationFactor, source) => {
    if (rotateState === 3) {
      let newRotation = [rotation[0], rotation[1] - (rotationFactor * 0.5), rotation[2]];
      setRotation(newRotation);
    }
  };

  const scaleObject = (pinchState, scaleFactor, source) => {
    if (pinchState === 3) {
      let newScale = scale[0] * scaleFactor;
      setScale([newScale, newScale, newScale]);
    }
  };

  const anchorFound = () => {
    console.log('Image detected');
    // Only set initial position and rotation once to prevent jitter or randomness
    if (!initialized) {
      setPosition([0, 0, -0.3]);
      setRotation([75, 90, 0]);
      setInitialized(true);
    }
  };

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
          source={model}
          position={position}
          scale={scale}
          rotation={rotation}
          materials={["apel"]}
          type="GLB"
          onDrag={moveObject}
          onRotate={rotateObject}
          onPinch={scaleObject}
        />
    </ViroARScene>
  );
};

export default function Ar({ route }) {
  const item = route.params.item;
  console.log(item);

  return (
    <ViroARSceneNavigator
      autofocus={true}
      initialScene={{
        scene: () => (
          <HelloWorldSceneAR
            position1={item.position || [0, 0, -0.3]} // Ganti dengan nilai posisi awal yang diinginkan
            scale1={item.scale || [1, 1, 1]} // Ganti dengan nilai skala awal yang diinginkan
            rotation1={item.rotation || [75, 90, 0]} // Ganti dengan nilai rotasi awal yang diinginkan
            model={item.model3d} // Ganti dengan nama material yang diinginkan
            texture={item.texture} // Ganti dengan sumber tekstur yang diinginkan
          />
        ),
      }}
      style={styles.f1}
    />
  );
}

const styles = StyleSheet.create({
  f1: { flex: 1 },
});
