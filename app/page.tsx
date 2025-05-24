'use client';

import Lanyard from "./components/Lanyard/Lanyard";
// import Image from 'next/image'; // Uncomment if needed in future

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <div className="container border mx-auto h-screen">
        <div className="grid grid-cols-12">
          <div className="col-span-6">winda</div>
          <div className="col-span-6">
            <Lanyard position={[0,0,20]} gravity={[0,-40,0]} />
          </div>
        </div>
      </div>
    </div>
  );
}
