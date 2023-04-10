import data from './data';
import './App.css';
import { useState } from 'react';
import Card from './components/Card';

function App() {
  const [tours, setTour] = useState(data);

  function hnadleRefresh(){
    setTour(data);
  }

  
  if(tours.length===0){
    return(
      <div className='flex flex-col justify-center items-center w-[100vw] h-[100vh]'>
        <p className='font-bold text-2xl text-red-600'>OOPS!</p>
        <div className='text-xl'>No More Cities Left</div>
        <button onClick={hnadleRefresh} className='my-4 px-3 border-purple-600 border-solid border-2 rounded-md bg-purple-600 text-white select-none hover:bg-white hover:text-black'>Refresh</button>
      </div>
    ); 
  };
    
  
  
  function removeCity(id){
    let newTours=[];
    tours.forEach((tour)=>{
      if(tour.id!==id){
        newTours.push(tour);
      }
    });
    setTour(newTours);
    
  }

  return (
    <div>
      <h1 className=' text-red-600 text-center font-bold text-3xl py-4 px-6 border-dotted border-blue-600 border-4 rounded-lg w-[20rem] mx-auto my-4 '>
      Tour and Travels</h1>
      <div className=' flex flex-wrap gap-4 justify-center w-[1000px] mx-auto my-8'>
        {
          tours.map((tour)=>{
            return(
              <Card key={tour.id} city={tour} removeCity={removeCity}></Card>
            )
          })
        }
      </div>

    </div>
  );
}

export default App;
