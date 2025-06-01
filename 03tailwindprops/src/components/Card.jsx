import React from "react";
import "../App.css"

function Card(props){
    console.log("props: ",props)
    return(
          
    <div className="w-60 flex flex-col rounded-md  border-2 min-h-[19rem] ">
        <div>
          <img
            src={props.src}
            alt="test"
            className="object-cover object-center rounded-t-md"
          />
        </div>
        <div className="flex flex-col py-3 px-3 pb-10 bg-gray-200 border-t-2  rounded-bl-xl rounded-br-xl">
          <div className=" bg-pink-100 rounded-md p-1 border-white">
          <div className="flex justify-between ">
            <h1 className="font-bold  ">{props.name}</h1>
            <h1>Price</h1>
          </div>
          <div className="flex  justify-between ">
            <p className="bg-amber-200 p-1.5 rounded-md">₹ {props.price}</p>
            <p>Stock {props.stock}</p>
          </div>
          </div>
        </div>
      </div>
      
    )
}

export default Card