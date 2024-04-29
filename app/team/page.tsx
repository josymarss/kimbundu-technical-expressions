import React from 'react';

const Team = () => {
    return(
        <div className="flex items-center  mt-92 justify-center font-mulish flex-col">
            <div className="mt-24 relative">
                {/* Element */}
                <div className="bg-[url('/ceo.png')] bg-no-repeat bg-cover w-60 h-60 rounded-full bg-green-200">
                </div>
                <div className='bg-white rounded-md p-4 shadow-slate-400 shadow-2xl absolute top-10 left-44 '>
                    <p className='text-base w-72 text-justify'>Foi difícil encontrar material online organizado para estudar línguas nacionais, então decidi criar algo para que as pessoas pudessem não só estudar mais também contribuir.</p>
                </div>

                <div className='bg-white rounded-md p-4 shadow-slate-400 shadow-2xl absolute top-44 right-44 '>
                    <p className='text-md w-40 text-justify'><strong>Josemar Silva</strong></p>
                    <p className='text-sm w-40 text-justify mt-1'>Criador & CEO</p>
                </div>

                
            </div>
            <p className="mt-12 w-96 text-xl text-center">Engenheiro de software, Poliglota e estudandte de línguas Africanas</p>
        </div>
    );
}

export default Team;