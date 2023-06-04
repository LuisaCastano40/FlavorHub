import { Link } from "react-router-dom"
import Styles from "./Styles2/Baner.module.css"
import { useState, useEffect } from "react"
import img1 from "../assets/Icons/arrow-d.png"
import img2 from "../assets/Icons/arrow-i.png"


export function Baner({imges}) {

  const [imgActual,setImgActual] = useState(0);
  const cantidad = imges.length;
  
  //retorno prematuro para evitar errores
  if(!Array.isArray(imges) || cantidad==0){
    return;
  }

  const nextImg = ()=>{
    if (imgActual == cantidad-1){
      setImgActual(0);
    }else{
      setImgActual(imgActual+1)
    }
  }
  const prevImg = ()=>{
    if (imgActual == 0){
      setImgActual(cantidad-1);
    }else{
      setImgActual(imgActual-1)
    }
  }


  return (
    <>  
    <section className={Styles["container__carrusel"]}>
      
        {imges.map ((img,index)=>{
          return (
            <article className={Styles["container-Baner__images"]}>
              {imgActual == index &&(<img key={index} src={img} alt="img-Baner"/>)}
            </article>
          )
          })}

      <article className={Styles["container-Baner__arrows"]}>
            <button onClick={prevImg} className={Styles["arrow--left"]}> <img src={img2} alt="Izq" /> </button>
            <button onClick={nextImg} className={Styles["arrow--right"]}> <img src={img1} alt="Izq" /> </button>
      </article>
  
    </section>
      
      
    </>
  )
}

export default Baner