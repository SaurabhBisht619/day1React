import React from 'react'

function App() {
  let greeting="";
  let date = new Date();
  let hour = date.getHours;

  if(hour>20&&hour<24){
    greeting="Good Night";
  }
  else if(hour>0&&hour<12){
    greeting="Good Morning";
  }
  else if(hour>=12&&hour<18){
    greeting="Good afternoon";
  }else if(hour>=18&&hour<20){
    greeting="Good evening";
  }
    return (
       <div>
           <h1>Hey Saurabh {greeting}</h1>
       </div>
  )
}

export default App;
