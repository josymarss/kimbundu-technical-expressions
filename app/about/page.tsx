'use client';

 function About() {
  return (
    <div className="w-full p-8 pt-[0] font-mulish">
      <h2 className="font-mulish text-slate-800 font-semibold text-xl mt-10">{`Sobre a língua e Projecto`}</h2>
      <p className="font-mulish text-x mt-2 text-justify">
      {`Este é um projecto que visa colocar o Kimbundu, Tchokwe, Kikongo, Kwanyama, Mbunda*, Nhaneka*, Fyote* e Ngangela como uma língua 
            oficial em Angola e nesta secção temos como prioridade traduzir 
            palavras do inglês técnico usado no mundo das tecnologias modernas
            que não existem no actual idioma. Esta começa por se trasncrever a
            visão de um acordo ortográfico que achamos inexistente nessas línguas. 

            Este projecto visa ensinar línguas nacionais, Ramificar um acordo ortográfico inclusão de
             palavras mais modernas e técnicas. A criação de um acordo ortográfico não oficial é
              para que no futuro essas línguas sejam oficiais em todo o país, cada uma referindo a sua respetiva localidade no território nacional.`}
      </p>

        <p className="font-mulish text-x mt-4 text-justify">{`Existe sessões que nos apegamos para começar a estruturar e alavancar este projecto essas que incluem:`}</p>
        <ol className="ml-9 font-mulish text-[12pt] mt-2 text-justify list-disc">
            <li>{`Actualização e correção do alfabeto`}</li>
            <li>{`Actualização De palavras modernas no mundo das tecnologias`}</li>
            <li>{`Actualização De palavras no mundo económico e socio-político`}</li>
            <li>{`Palavras gerais e diálogo do dia á dia`}</li>
            <li>{`Gramática de âmbitop geral`}</li>
            <li>{`Acordoortográfico`}</li>
        </ol>
        <p className="font-mulish text-x mt-2 text-justify">
            {`O alfabeto, gramática, música e histórias, são apenas algumas das categorias que visam dar 
            maior entendimento aos estudadnes e estusiastas da língua. A
              criação de conteúdo por partes dos usuários por meio de sugestões via comentários Ajuda os professores
               reavaliar seus conteúdos de forma correcta e actualizada sobre informaçãoes que possam não saber 
               uma vez que a língua sofreu várias mudanças ao longo dos anos. `}
        </p>
        
      <p className="font-mulish text-x mt-2 text-justify">
      {` O Kimbundu é uma das línguas banta mais faladas em Angola,
                    onde é uma das línguas nacionais. 
                    O português tem muitos empréstimos lexicais desta 
                    língua obtidos durante a colonização portuguesa do
                    território angolano e através dos escravos angolanos
                    levados para o Brasil. É falada por cerca de 3 000 000
                    de pessoas em Angola como primeira ou segunda língua.`}
      </p>
      <p className="font-mulish text-x mt-2 text-justify">
                    {`O kimbundu é a língua da região de Luanda,
                    Catete*, Malanje e as áreas de fronteira no Norte
                    (Dembos - variante crioula kimbundu/kikongo) e
                    no Centro (Kuanza Sul - variante crioula 
                    kimbundu/Umbundu). É falada por mais de um 
                    milhão e meio de pessoas. Faz parte da grande 
                    família de línguas africanas a que a partir do
                    século passado os europeus convencionaram 
                    chamar Bantu (bantu significa «pessoas», e 
                    é plural de muntu. Em Kimbundu mutu designa 
                    «pessoa», com o plural em atu).`}
      </p>
      <h2 className="font-mulish text-slate-800 font-semibold text-xl mb-2 mt-4 text-justify">
      {`Como contribuir?`}
      </h2>
      <p className="font-mulish text-x text-justify">
               {` Para contribuir, é necessário ter um pouco de conhecimento
                de línguas, ou pelo menos saber que na língua Kimbundu não
                existem certas letras, acima colocamos um asterísticos de palavras que 
                estão erradas segundo o nosso conhecimento adquirido ao longo dos estudos feitos.
                portanto esta tradução não oficial
                segue parâmetros linguísticos estudados pelo mantedor 
                deste projeto. Vale lembrar que algumas palavras não são
                traduzidas do inglês técnico por não possuírem tradução
                literal e/ou semântica para outros idiomas, nestes 
                casos essas palavras serão mantidas do idioma original como 
                por exemplo temos a palavra "bit", "byte" e outras. Se quer ajudar
                apenas sugira uma palavra técnica que aí não aparece
                e nós iremos rapidamente adicionar no nosso vocabulário de palavras técnicas.
                No caso de ser um programador, este é um projecto open source e no repoitório podes encontrar 
                toda a informação necessária para poder contribuir. clique no link que está no menu
                com o nome github e será reencaminhado para o código fonte do projecto.`}
     </p>
    </div>
  );
}

export default About;