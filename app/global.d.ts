// app/global.d.ts

// Jangan pakai `export { };` jika tidak ada ekspor, atau ubah jadi:
export {}; // Untuk menjadikan ini file modul

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
      meshLineGeometry: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      meshLineMaterial: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
