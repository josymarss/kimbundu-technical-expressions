"use client";
import { useEffect, useState } from "react";
import { fakedata } from "../../fakedata";
import Head from "next/head";

export default function History() {
  const [history, setHistory] = useState();
  const onSearchText = () => {

  }
  useEffect(() => {
    console.table(fakedata);
  }, []);

  return (
    <div className="">
      <Head>
        <title>Zwelar | Histórias em línguas nacionais</title>
        <meta
          name="Zwelar | Gramática"
          description="Sobre a gramática na lingua nacional em kimbundu e na maior parte das línguas nacionais"
        />
      </Head>
      <div className="grid lg:grid-cols-4">
        {/* History and translation, the main history  */}
        <aside className="col-span-3 p-5">
          <input
            name=""
            type="text"
            placeholder="Pesquisar"
            onChange={(e) => onSearchText(e.target.value)}
            className="font-mulish text-sm mt-4 text-justify w-[500px] rounded-sm p-2 boder-none border-gray-200 bg-gray-50"
          />
          <div className="flex space-between gap-7 mt-8">
            <div className="">
              <h2 className="font-mulish text-justify text-3xl mt-4">
                {fakedata[0] ? fakedata[0].title : ""}
              </h2>
              <p className="font-mulish text-justify text-xl mt-3 w-[500px]">
                {fakedata[0] ? fakedata[0].lyric : ""}
              </p>
            </div>

            {/*  */}
            <div className="">
              <h2 className="font-mulish text-justify text-3xl mt-4">
                {" "}
                {fakedata[0] ? fakedata[0].titleTranslation : ""}
              </h2>
              <p className="font-mulish text-justify text-xl mt-3 w-[500px]">
                {fakedata[0] ? fakedata[0].translation : ""}
              </p>
            </div>
          </div>
        </aside>
        {/* a list of history */}
        <aside className="col-span-1 p-5 m-7">
            <h2 className="font-mulish text-justify text-xl mt-4 text-slate-900 ">Relacionados</h2>
            <article className="flex flex-col gap-3">
                {fakedata.map((music,index) => 
                   <div className="font-mulish text-xl text-justify bg-white shadow p-10 mt-3" key={index}>{music.titleTranslation}</div>
                )}
                <p>Ver todas histórias</p>
            </article>
        </aside>
      </div>
    </div>
  );
}