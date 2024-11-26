import './products.css'
import { Navigate, useNavigate } from 'react-router-dom'


export default function Products({items,setIndex}) {
 
  let Navigate = useNavigate();

  return (
    <div className="itemsContainer ">
          {
           
           items.map((e,idx)=>(
            <div key={e.id} className='MainCard'>
            <img src={e.image} alt={e.name} />
            <h2>{e.name}</h2>
            <h3>Price:${e.price}</h3>
            <button onClick={()=>{
              Navigate('/ProductsDetail'); 
              setIndex(idx);
              

            }}>Order-now</button>
            </div>
           ))

          }
    </div>
  )
}
