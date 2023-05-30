import { Link } from "react-router-dom"
import Styles from "./Styles2/Baner.module.css"
import { useState, useEffect } from "react"
/* import img1 from "../assets/banner-images/salty.png"
import img2 from "../assets/banner-images/drinks.png"
import img3 from "../assets/banner-images/sweety.png" */


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

  /* let i=0;
  const span = ([i]) =>{
    return (imges[i])
  } */

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
            <button onClick={prevImg} className={Styles["arrow--left"]}>I</button>
            <button onClick={nextImg} className={Styles["arrow--right"]}>D</button>
      </article>
  
    </section>
      {/* <article className={Styles["container-Baner__sliders"]}>
        <button >1</button>
        <button >1</button>
        <button >1</button>
      </article> */}
      
      
    </>
  )
}

export default Baner