import React, { useState } from 'react';
import axios from 'axios';
import Productsdetails from '../components/Productsdetails';

const Product = () => {

    const [data, setData] = useState([]);
    const [showProductData, setShowProductData] = useState(true);
    const [loading, setLoading] = useState(false);


    const productDetails = async (name) => {
        setLoading(true);
        await axios.get(`https://ranekapi.origamid.dev/json/api/produto/${name}`)
            .then((result) => {
                setData(result?.data);
                setShowProductData(false);
                setLoading(false);
            }).catch((err) => {
                console.log(err);
            })
    }

    return (
        <div>
            <div>
                <button onClick={() => { productDetails("smartphone") }}>Smart phone</button>
                <button onClick={() => { productDetails("tablet") }}>Tablet</button>
                <button onClick={() => { productDetails("notebook") }}>Note book</button>
            </div>
            <div>
                {showProductData ? <h3>Plaese above Click Button</h3> : <Productsdetails data={data} />}
                {loading && <h1>Loading ...</h1>}
            </div>
        </div>
    )
}

export default Product
