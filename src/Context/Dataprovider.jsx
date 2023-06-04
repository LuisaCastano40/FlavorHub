import { useState, createContext, useEffect } from "react";
import { Data } from "../Data/Products";

export const DataContext = createContext();

export const DataProvider = (props)=>{
    const [productos,setProductos] = useState([]);
    const [menu,setMenu] = useState(false);
    const [carrito,setCarrito] = useState([]);
    const [total,setTotal] = useState(0);

    useEffect(()=>{
        // const producto = DataSalty
        setProductos(Data)
    },[])


    const addCarrito = (id) => {

        console.log("holi, me llamaste?")
        const check = carrito.every(item => {
            console.log(item)
            return item.id !== id;
        })

        if (check){
            const data = productos.filter(producto=>{
                return producto.id == id
                
            })
            console.log(data)
            setCarrito([...carrito, ...data])
            }
        else{
                alert("el producto ya ha sido añadido al carrito")
            }
 
        }

        useEffect(()=>{
            let dataCarrito= JSON.parse(localStorage.getItem('dataCarrito'))

            if(dataCarrito == null || dataCarrito == undefined){
                localStorage.setItem('dataCarrito', {});
             } else{
                if(Object.keys(dataCarrito).length>0){
                    console.log(Object.keys(dataCarrito).length)
                    setCarrito(dataCarrito)
                }
             }

        },[])

        useEffect(()=>{
           localStorage.setItem('dataCarrito', JSON.stringify(carrito))
        },[carrito])
        
        useEffect(()=>{
            const getTotal = ()=>{
                const resultado = carrito.reduce((acumulador,item)=>{
                    return acumulador + (item.precio*item.cantidad);
                },0)
                setTotal(resultado);
            }
            getTotal();
        },[carrito])


    const value = {
        productos: [productos],
        menu:[menu, setMenu],
        addCarrito: addCarrito,
        carrito: [carrito,setCarrito],
        total: [total, setTotal]
    }

    return(
        <DataContext.Provider value = {value}>
            {props.children}
        </DataContext.Provider>
    )
}