"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Head from "next/head";


export default function Grammar() {
  const router = useRouter();

  return (
    <>
      

      <div className="mt-11 p-10 font-mulish">
        <Head>
          <title>Zwelar | Gramática</title>
          <meta
            name="Zwelar | Gramática"
            description="Sobre a gramática na lingua nacional em kimbundu e na maior parte das línguas nacionais"
          />
        </Head>
        <h2 className="font-semibold text-3xl border-b p-2 mb-10">Tópicos</h2>
        <ul>
          <li
            className="font-semibold text-xl font-sans hover:text-slate-700 hover:italic hover:font-semibold hover:cursor-pointer mb-1"
            onClick={() => router.push("/alfabeth")}
          >
            <span>Alfabeto e pronúncia</span>
          </li>
          <li className="font-semibold text-xl font-sans mb-1">
            Números
            <ul className="p-3">
              <li
                className="font-semibold text-xl font-sans hover:text-slate-700 hover:italic hover:font-semibold hover:cursor-pointer mb-1"
                onClick={() => router.push("/numbers/cardinals")}
              >
                <span>- Cardinais</span>
              </li>
              <li
                className="font-semibold text-xl font-sans hover:text-slate-700 hover:italic hover:font-semibold hover:cursor-pointer mb-1"
                onClick={() => router.push("/numbers/ordinals")}
              >
                <span>- Ordinais</span>
              </li>
            </ul>
          </li>
          <li
            className="font-semibold text-xl font-sans hover:text-slate-700 hover:italic hover:font-semibold hover:cursor-pointer mb-1"
            onClick={() => router.push("/animals")}
          >
            <span>Animais</span>
          </li>
          <li className="font-semibold text-xl font-sans hover:text-slate-700 hover:italic hover:font-semibold hover:cursor-pointer mb-1">
            <span>Familiares</span>
          </li>
          <li className="font-semibold text-xl font-sans hover:text-slate-700 hover:italic hover:font-semibold hover:cursor-pointer mb-1">
            <span>Corpo humano</span>
          </li>
          <li className="font-semibold text-xl font-sans hover:text-slate-700 hover:italic hover:font-semibold hover:cursor-pointer mb-1">
            <span>Saudações</span>
          </li>
          <li className="font-semibold text-xl font-sans hover:text-slate-700 hover:italic hover:font-semibold hover:cursor-pointer mb-1">
            <span>Como fazer perguntas</span>
          </li>
          <li
            className="font-semibold text-xl font-sans hover:text-slate-700 hover:italic hover:font-semibold hover:cursor-pointer mb-1"
            onClick={() => router.push("/plural")}
          >
            <span>O plural em kimbundu</span>
          </li>
        </ul>
      </div>
    </>
  );
}
