import { Camera } from "@react-three/fiber";
import { BufferGeometry, Material, Mesh, Texture } from "three";



export function refresh(tilesHorizontal: number, texture: Texture) {
    // texture.wrapS = 2048*4;
    // texture.wrapT = 2048*4;
    // console.log(texture);
    
    texture.repeat.set(1 / tilesHorizontal, 1 / 1);
  }

  

export function rightMovement(key: boolean, camera: Camera, ref: React.RefObject<Mesh<BufferGeometry, Material | Material[]>>, maxX: number, velocity: number) {
  if (!ref.current) {
    return;
  }

  if (key && ref.current.position.x < maxX + camera.position.x) {
    ref.current.position.x += velocity;
  } else if (key && camera.position.x < 83) {
    camera.position.x += velocity;
    ref.current.position.x += velocity;
  } else if (ref.current.position.x >= maxX + camera.position.x + 0.1) {
    ref.current.position.x = maxX;
  }
}


export function leftMovement(key: boolean, camera: Camera, ref: React.RefObject<Mesh<BufferGeometry, Material | Material[]>>, maxX: number, velocity: number) {
  if (!ref.current) {
    return;
  }

  if (key && ref.current.position.x > camera.position.x - maxX) {
    ref.current.position.x -= velocity;
  } else if (key && camera.position.x > 0) {
    camera.position.x -= velocity;
    ref.current.position.x -= velocity;
  }

  if (ref.current.position.x < -maxX) {
    ref.current.position.x = -maxX;
  }
}
 