import React from "react";
// import Potato from "./Potato";

function Food(props){ //{fav} = props
return <h1>I like {props.fav}</h1> //자바의 this같은 개념 .으로 찾기
}

function App() {
  return (
  <div><h1>Hello!</h1>
  <Food fav="kimchi" />
  <Food fav="ramen" />
  <Food fav="samfiopsal" />
  <Food fav="chukumi" />
  <Food fava="chukumi" />
  </div>
  );
}

export default App;
