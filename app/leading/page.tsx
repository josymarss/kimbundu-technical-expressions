"use client";
import React from "react";
import Image from "next/image";

import HeadComponent from "../../components/head/page";
import "./bnnerStayles.css";

export default function Leading() {
  return (
    <>
      <HeadComponent
        title="Zwelar | Aprenda Linguas nacionais"
        nameMeta="Sobre o site"
        descMeta="O melhor e site para aprender línguas nacionais"
      />
      {/* Inicio  Banner 2 */}
      <div className="bnrContainer">
        <Image src="/secondBanner.svg" width={660} height={660} alt="banner 2 "/>

        <div>
          <h1>Aprender Linguas nacionais nunca foi tão fácil!</h1>
          <br />
          <ul>
            <li>Aprenda dentro e fora de Angola, e acabaram-se as desculpas</li>
            <li>
              Aprenda na sua casa de casa, no seu computador ou seu telefone
            </li>
            <li>Pratique a quelaquer momento, sobre o que aprendeu</li>
            <li>
              Partilha com seus amigos e familiares, o quanto tens Zuelado
            </li>
          </ul>
        </div>
      </div>

      {/* mosaico  */}

      <div className="mosaiocoContainer">
        <div className="mosaico mosaico_1">
          <p>
            Olhe atentamente para as imagens, isso lhe ajuda a criar quandos
            mentais enquand ouve o significado sde cada palavra
          </p>
        </div>

        <div className="mosaico mosaico_2">
          <p>
            Praticar é a melhor forma de aprender, aqui você vai praticar nos
            sentidos da audição.
          </p>
          <button className="mosaico_btn">Bora Zwelar</button>
        </div>

        <div className="mosaico mosaico_1">
          <p>
            Por ser uma língua bantu interpretada, têm palavras com acentuações
            tónicas que se mal ditas acentuadas podem ter outro significado e
            sentido.
          </p>
        </div>
      </div>

      {/* Banner 3  */}
      
    
      <div className="bnrContainer">
       
        <div>
          <h1>Aprenda na diáspora</h1>
          <br />
          <p style={{width:560}}>O Zuelar permite que filhos de descendentes de reis e afro descentes aprendam a língua dos seus ancestrais aonde quer que estejam. Afro-brasileiros e Angolanos nascidos em Portugal podem reconectar-se com sua terra mãe.</p>
        </div>

        <Image src="/banner3.svg" width={660} height={660} alt="banner 3"/>

      </div>
      



      {/* Inicio seesao da musica */}

      <div className="musicContainer">

      <h1>Ouve músicas nas línguas <br/> nacionais e veja suas traduções</h1>
      <p>Todo usuário que entende pode adicionar letras de músicas</p>
      <Image src="/banner4.png"  width={600} height={700} alt="banner 4"/>
      </div>
      
      {/* rodape */}
      
    </>
  );
}
