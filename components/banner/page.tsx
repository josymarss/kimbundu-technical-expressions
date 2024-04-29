import React from "react";
import Image from "next/legacy/image";
// import styles from './banner.module.css';
import "./style.css";

export default function Banner() {
  // const router = useState();
  return (
    <div className="bannerContainer">
      <div>
        <div className="chamadadeAccao">
            <h1>Já imaginou, <br/>falar um dos <br/><span >Idiomas</span> nacionais?</h1>
        </div>
        <p className="prgrph">Aprenda dentro e fora de Angola, e acabaram-se as <br/> desculpas</p>
        <div>
          <button className=" chamadaBtn">Vamos Zwelar?</button>
        </div>
      </div>

      <div className="bannerImamge">
        <Image src="/bannerImg.svg" width={660} height={660} alt="banner imge"/>
      </div>
    </div>
  );
}
