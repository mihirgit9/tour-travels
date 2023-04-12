import { useState } from "react";

function Card(props){
    let tour=props.city;
    let func = props.removeCity;
    const [readmore, setReadmore]=useState(true);
    let showmore = readmore ? "showmore" : "showless";
    let detail= `${tour.info.substring(0,100)}... `;
    let description = readmore ? detail : tour.info;

    function handleDesc(){
        setReadmore(!readmore);
    }

    return(
        <div className=" w-[30%] flex flex-col">
            <img src={tour.image} alt="img" className=" w-[100%] h-[250px] rounded-md hover:scale-[1.02] transition-all duration-300"></img>
            <p className=" mt-2 text-green-600 font-bold">₹ {tour.price}</p>
            <p className=" text-xl font-bold font-serif">{tour.name}</p>
            <div className=" px-2 text-justify text-sm">
                {description}
                <span onClick={handleDesc} className=" text-blue-500 cursor-pointer font-bold">
                {showmore}</span>
            </div>
            <button onClick={()=>{
                func(tour.id);
            }} className=" my-4 px-3 border-purple-600 border-solid border-2 rounded-md select-none hover:bg-purple-600 hover:text-white transition-all duration-300">
            Not Interested</button>
        </div>
    );
}

export default Card;