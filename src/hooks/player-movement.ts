import { Camera } from "@react-three/fiber";
import { BufferGeometry, Material, Mesh, RepeatWrapping, Texture } from "three";



export function refresh(tilesHorizontal: number, texture: Texture) {
    texture.wrapS = RepeatWrapping;
    texture.wrapT = RepeatWrapping;
    texture.repeat.set(1 / tilesHorizontal, 1 / 1);
  }

  
export function rightMovement(key: boolean,camera: Camera, ref: React.RefObject<Mesh<BufferGeometry, Material | Material[]>>, maxX: number, velocity:number){
    if (ref.current &&
        key &&
        ref.current.position.x < maxX + camera.position.x
      ) {
console.log('1.1');

        ref.current.position.x += velocity;
      } else if (key && ref.current) {
        console.log('1.2');

        camera.position.x += velocity;
        ref.current.position.x += velocity;
      } else if (ref.current && ref.current.position.x >= maxX + camera.position.x + 0.1) {
        console.log('1.3');

        ref.current.position.x = maxX;
      }
}

export function leftMovement(key: boolean,camera: Camera, ref: React.RefObject<Mesh<BufferGeometry, Material | Material[]>>, maxX: number, velocity:number){
    if (ref.current && 
        key &&
        ref.current.position.x > camera.position.x - maxX
      ) {

        ref.current.position.x -= velocity;
      } else if (ref.current && key && camera.position.x > 0) {

        camera.position.x -= velocity;
        ref.current.position.x -= velocity;
      }
  
      if (ref.current && ref.current.position.x < -maxX) {

        ref.current.position.x = -maxX;
      }
}


   // //Up
    // if (ref.current.position.y > player.positionX) {
    //   ref.current.position.y -= player.velocity;
    // }

    // const position = ref.current.position.y.toFixed(2);
    // console.log(position);

    // if (keys.up.pressed && parseFloat(position) === player.positionY) {
    //   ref.current.position.y += player.velocity * 20;
    // }