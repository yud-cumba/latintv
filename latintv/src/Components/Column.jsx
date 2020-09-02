import React from 'react'

export default function Column(prop) {
  const { data } = prop;
  // delete products.image;
  const headers =  Object.values(data);

  return (
    <tr>
       {headers.map((data) => 
      <td key={data}>{data}</td>)}
    </tr>
  );
}
