"use client";
import React, { useContext } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useEffect, useState } from "react";
import Banner from "../banner/page";

import "./styles.css";

export function Header() {
  const pathname = usePathname();
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleMenuHandler = () => {
    setToggleMenu(!toggleMenu);
  };
  const NavItems = () => {
    return (
      <nav className="">
        <div></div>
        <ul className="menuLink">
          <li className="link">
            <Link className="active" href="/" passHref>
              Inicio
            </Link>
          </li>

          <li className="link">
            <Link className="" href="/grammar" passHref>
              <span className="">
                <span>Gramática</span>
              </span>
            </Link>
          </li>
          <li className="link">
            <Link href="/music" passHref>
              <span className="">
                <span>Música</span>
              </span>
            </Link>
          </li>
          <li className="link">
            <Link href="/history" passHref>
              <span className="">
                <span>Histórias</span>
              </span>
            </Link>
          </li>
          <li className="link">
            <Link href="/courses" passHref>
              <span className="">
                <span>Cursos</span>
              </span>
            </Link>
          </li>
          <li className="link">
            <Link href="/about" passHref>
              <span className="">
                <span>Sobre</span>
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    );
  };

  return (
    <>
      <header className="menuContainer">
        <h2 className="Logo">
          <Link href="/">Zwelar</Link>
        </h2>

        <NavItems />

        <div className="lgBtnCOntainer">
          <button className="btn">Criar conta / entrar</button>
        </div>
      </header>
       {pathname === "/" ? <Banner /> : ""} 
    </>
  );
}
