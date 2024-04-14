import React from "react";
import Card from "./Card";
import { useState, useEffect } from "react";
import {useSelector} from 'react-redux';
import { useOnline } from "../utils/useOnline";

const Home = () => {
  const [products, setProducts] = useState([]);
  const cartItems = useSelector((store) => store.cart.items);


  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  if (!products) return <h1>Loading ..........</h1>;
  const online=useOnline();
  if(!online) return <h1 className="text-bold text-4xl text-center">Offline !!, Please check your internet Connection 🔴</h1>

  return (
    <>
      <div className="flex flex-wrap">
        {products?.map((p) => {
          return (
            <Card
              key={p?.id}
              title={p?.title}
              description={p?.description}
              image={p?.image}
            />
          );
        })}
      </div>
    </>
  );
};

export default Home;
