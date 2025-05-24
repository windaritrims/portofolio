export {};

declare module '*.glb' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module 'meshline' {
  import { BufferGeometry, Material } from 'three';

  export class MeshLineGeometry extends BufferGeometry {}
  export class MeshLineMaterial extends Material {}
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: any;
      meshLineMaterial: any;
    }
  }
}
