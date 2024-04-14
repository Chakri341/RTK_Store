import React from "react";
import {addToCart, clearCart} from '../utils/cartSlice';
import {useDispatch} from  'react-redux';


const Card = ({title,description, image}) => {
  const dispatch=useDispatch();
  const handleBuy=()=>{
  dispatch(addToCart({title,description, image}));
}

  return (
    <div>
      <div className="card w-60 text-black shadow-xl m-2 p-2">
        <figure>
          <img
            src={image}
            alt="Shoes"
            height={100}
            width={100}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title.slice(0,20)}....</h2>
          <p>{description.slice(0,40)}....</p>
          <div className="card-actions justify-center">
            <button className="btn btn-primary" onClick={handleBuy}>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
