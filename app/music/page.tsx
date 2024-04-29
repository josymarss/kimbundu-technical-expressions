"use client"

import React, { useEffect, useState } from 'react';
import singers from '../../data/singers.json';
import Image from 'next/image';

const Music = () => {
  const [singersContent, setSingersContent] = useState(singers);
  const [pageNumber, setPageNumber] = useState(1);
  const [singer, setSinger] = useState(1);

  useEffect(()=>{
    setSinger(singersContent[1])
  },[singersContent])
  
  const previousPageHandler = () => {
     pageNumber > 1 ? setPageNumber(pageNumber-1) : '';
  }
  const nextPageHandler = () => {
      setPageNumber(pageNumber+1);
  }

  const MusicCard = ({singer_, setSinger_}) => {
    const {name,music_title,pic} = singer_;
    
    const handlerMusicChange = () =>{
        setSinger_(singer_);
    }
    return(
         <div onClick={handlerMusicChange} className="w-[fit-content] shadow-md bg-slate-50 p-2 mx-4 mt-4 hover-card">
         <div className='border-solid w-[fit-content] h-auto bg-cover rounded-sm transition-all opacity-100 bg-slate-900' >
          <Image
                    width={120}
                    height={120}
                    quality={100}
                    intrinsec= 'true'
                    alt="singer"
                    src={`/music-images/${pic}`}
                    loading="lazy"
            />
         </div>
         <p className="mt-2 text-[8pt] md:text-[12pt]">
           <strong className='text-[6pt] md:text-[10pt]'>{name}</strong><br/> {music_title}
         </p>
       </div>
    );
  }
  // /music-images/${imagUrl}

  const Lyrics = ({lyric}) => {
    const lyricLine =  solitTextByLine(lyric);
  
     return (
       lyricLine ? lyricLine.map((text, index)=> <p key={index} className="text-[10pt] md:text-[12pt]  text-justify mt-4"> {text} </p>) : ''
     );
  }

  const MusicLetter = ({lyric, author, title}) => {
    return (      
        <div className="w-[80%] flex flex-col flex-wrap">
            <h2 className="font-semibold text-[14pt] md:text-[16pt] text-slate-900 text-left">
              {title}
            </h2>
            <div className='flex flex-col flex-wrap text-center '>
              <p className="text-[10pt] md:text-[12pt] text-green-500 mt-2 font-semibold text-left">{author}</p>
               <Lyrics lyric ={lyric}/>
            </div>
            {/* <button className="text-xl  text-500 mt-2 font-semibold">Traduzir</button> */}
      </div>
  );
  }
  return (
    <div className="flex flex-col md:flex-row  p-2 md:p-6 font-mulish w-full">
        {/* {/* MUISC LETTERS} */}
      <div className='md:w-[50%]'>
        <MusicLetter 
          lyric={singer.lyric} 
          author={singer.name} 
          title={singer.music_title}
          />
      </div>

      <div className='md:w-[50%]'>
        <h2 className="text-slate-900 font-semibold text-[12pt] mx-4 w-[100%]"> 
          Mais músicas 
        </h2>
        {/* {/* Cards} */}
        <div>
          <div className="grid grid-cols-2 place-content-center lg:grid-cols-3 item-center">
          {
              singersContent.map((singer_)=> <MusicCard 
                                        key={singer_.id} 
                                        singer_ = {singer_}
                                        setSinger_ = {setSinger}
                                        />)
            } 
          </div>
          <div className='flex w-full justify-center mt-5'>
            <span 
              className='pagechange-button'
              onClick={previousPageHandler}>
                  Anterior
            </span>
            <span>{pageNumber}</span>
            <span 
              className='pagechange-button'
              onClick={nextPageHandler}>
                Seguinte
            </span>
          </div>
        </div>
      </div> 
     
    </div>
  );
}

function solitTextByLine(text){
  let lines;
  if(text) {
    lines =  text.split(/\n/);
  } else {
     lines = ["Sem letras de momento..."];
  }  
    return lines
}
export default Music;
