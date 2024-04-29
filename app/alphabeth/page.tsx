"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";

import ShowAndListComponent from "../showomponent/page";
import { dataAlphabet } from "../../data/datagrammar";

function Alphabet() {
  const [alphabet, setAlphabet] = useState([]);

  useEffect(() => {
    setAlphabet(dataAlphabet);
  }, []);

  return (
    <div className="mt-4 p-10 font-mulish">
      <Head>
        <title>Zwelar | Alfabeto</title>
        <meta
          name="Zwelar | Alfabeto"
          description="O alfabeto em kimbundu"
        />
      </Head>
      <h2 className="font-semibold text-3xl border-b p-2 mb-10">Alfabeto</h2>
      <p className="text-xl text-gray-600 indent-6 mb-8">
        {`O Kimbudu não possi algumas letras, tais como: 
                        "C", "R", "G", "P" e "Q". A letra "g" e "p" são compostas
                        como mostra o alfatbeto abaixo. Elas tornan-se "ng" e "ph"
                        respetivamente. para palavras formadas com a letra "c" e "q"
                        usa-se a letra "k" em seu lugar .`}
      </p>
      <h2 className="font-semibold text-xl">Pronúncia</h2>
      <p className="text-xl text-gray-600 indent-6 mb-8">
        {`
                              O kimbundu se fala do mesmo jeito que se pronúncia as suas letras e sílabas,
                              muito parecido com português e o alemão nesse quesito. Em baixo segue-se a 
                              tabela com as respectivas pronúncias de cada letra .`}
      </p>
      <div className="flex flex-row flex-wrap items-center justify-start mb-6">
        {alphabet.map((letter) => (
          <ShowAndListComponent key={letter.key} value={letter.value} />
        ))}
      </div>
    </div>
  );
}
export default Alphabet;