'use client'

import React, { useState } from 'react';
import Image from 'next/image';
// import styles from './banner.module.css';

export default function Banner(){
    // const router = useState();
    // bg-[url('/bg-image.png')]
    return(
        // bg-[url('/bg-image.png')]
        <div className="bg-slate-500 w-[100%] h-[100%]">
            <img
              src="/bg-image.png"
              alt='image'
          />
            {/* <Image
              quality={100}
              alt="banner"
              src="/landing-images/sing.png"
            /> */}
            {/* bg-[url('/banner-image.png')] bg-center w-full h-screen  bg-no-repeat */}
            {/* <button>Come;ar agora</button> */}
        </div>
    );

}