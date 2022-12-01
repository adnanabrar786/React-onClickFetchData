import React from 'react'

const Productsdetails = ({ data }) => {

  console.log(data);


  return (
    <div>
      <h1>Productsdetails</h1>

      <h3>{data.nome}</h3>
      <p>R${data.preco}</p>
      <img src={data?.fotos[0]?.src} alt={data?.nome} />
    </div>
  )
}

export default Productsdetails
