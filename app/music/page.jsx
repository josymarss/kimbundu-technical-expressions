"use client"

import React, { useEffect, useState } from 'react';
import singers from '../../data/singers'
import Image from 'next/image';

const Music = () => {
  const [lyric, setLyric] = useState()
  

  useEffect(()=>{
    // (async()=>{
    //   const teste = await fetch('../../data/singers');
    //   console.log(teste)
    // })()
    console.log(singers)
  },[]);

  const MusicCard = ({author, title, imagUrl}) => {
    return(
         <div className="w-[fit-content]  shadow-md bg-slate-50 p-2 mx-4 mt-4">
         <div className='border-solid bg-cover rounded-sm transition-all opacity-80 bg-slate-900' >
         <Image
                  width={500}
                  height={400}
                  quality={90}
                  intrinsec= 'true'
                  alt="singer"
                  src={`/music-images/${imagUrl}`}
          />
         </div>
         <p className="mt-2 text-[8pt] md:text-[12pt]">
           <strong className='text-[6pt] md:text-[10pt]'>{author}</strong><br/> {title}
         </p>
       </div>
    );
  }
  // /music-images/${imagUrl}

  const MusicLetter = ({lyric, author, title}) => {
    return (      
        <div className="lg:w-full">
            <h2 className="font-semibold text-[14pt] md:text-[16pt] text-slate-900 text-left">
              {title}
            </h2>
            <div className='flex flex-col flex-wrap'>
              <p className="text-[12pt] md:text-[14pt] text-green-500 mt-2 font-semibold">{author}</p>

              <p className="text-[12pt] md:text-[14pt]  text-justify mt-4">
                  {`Alukenn n'golafua N'ga mu binga kia Muene ondo kala beniaba Eme n'gondodiame`}
              </p>
              <p className="text-justify text-[12pt] md:text-[14pt]  w-96 mt-4">
                {`Mona mona muene Kissueia weza Mona mona muene Kalunga n'gumba`}
              </p>
              <p className="text-justify text-[12pt] md:text-[14pt]  w-96 mt-4">
                {`N'zambi awani banack mona N'ga muvalele Muene ondo kala beniaba Eme
                n'gondodiame`}
              </p>
            </div>
            <button className="text-xl  text-500 mt-2 font-semibold">Traduzir</button>
      </div>
  );
  }
  return (
    <div className="flex flex-col md:flex-row p-6 font-mulish w-full">
        {/* {/* MUISC LETTERS} */}
      <div className=''>
        <MusicLetter />
      </div>

      <div className="">
        <h2 className="text-slate-900 font-semibold  text-[12pt] mx-4 w-[100%]"> 
          Mais músicas 
        </h2>
        {/* {/* Cards} */}
        <div>
          <div className="grid gap-4">
            <MusicCard author="Ruy Mingas"  title="Birin birin" imagUrl='ruy.jpg'/>
            <MusicCard author="António Paulino"  title="Kamba Ba Laumba" imagUrl='antonio.jpg'/>
            <MusicCard author="Yuri da Cunha"  title="Kuma Kwakie" imagUrl='yuri.jpeg'/>
            <MusicCard author="Artur Nunes"  title="Mana" imagUrl='Artur.jpg'/>
            <MusicCard author="Bonga"  title="Mona Ki Ngi Xica" imagUrl='bonga.jpg'/>
            <MusicCard author="Edy Tussa"  title="Pekenina" imagUrl='edy.jpg'/> 
          </div>
          {/* <div className='flex w-[100%]'>
            <span>Anterior ...</span>
            <span> 1 2 3 4 5 ...</span>
            <span>Seguinte</span>
          </div> */}
        </div>
      </div> 
     
    </div>
  );
}

export default Music;
