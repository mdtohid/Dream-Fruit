import {useEffect, useState } from "react";

function useProduct(){
    const [products, setProducts] = useState([]);
    useEffect(() => {
            fetch('Fruits')
            .then(res => res.json())
            .then( data => {
                setProducts(data);
                console.log(data);
            })
    }, []);

    return [products];
}

export default useProduct;