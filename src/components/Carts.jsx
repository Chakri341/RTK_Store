import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../utils/cartSlice';
import Card from './Card';
import { useOnline } from '../utils/useOnline';
import EmptyCart from './EmptyCart';


const Carts = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const handleClear = () => {
    dispatch(clearCart())
  }

  const online=useOnline();
  if(!online) return <h1 className="text-bold text-4xl text-center">Offline !!, Please check your internet Connection 🔴</h1>


  if (!cartItems) return <h1>still loading </h1>
  return (
    <>
    {cartItems.length==0?(<EmptyCart/>):(<>
      <div className='m-2 p-2 text-3xl text-bold text-black'>
        <h1 className=''>Cart Items</h1>
      </div>
      <div className="flex flex-wrap">
        {cartItems?.map((p, i) => {
          return (
            <Card
              key={i}
              title={p?.title}
              description={p?.description}
              image={p?.image}
            />
          )
        })}
      </div>
      <div className='flex justify-center'>
        <button className='m-2  p-2 bg-slate-900 text-white' onClick={handleClear}>Clear Cart</button>
      </div>
      </>)}
    </>
  )
}

export default Carts;
