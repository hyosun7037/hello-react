import React from "react";
// import Potato from "./Potato";

function Food({name, picture}){ //{fav} = props
return <div>
    <h2>I like {name}</h2>
    <img src = {picture} />
</div> //자바의 this같은 개념 .으로 찾기
}

const foodLike = [
  {
    name : "Kimchi",
  image : "https://m.jnmall.kr/web/product/big/201910/4b83072de272a51edffa420ab3b2fa98.jpg"
  },

  {
    name : "samgyeopsal",
  image : "https://lh3.googleusercontent.com/proxy/ce2V_MRoo7-mhtcCc-3XPrKnnVn62YCjGyGdI1mkkx5kpg2ZZuiNosqJPA_FjVqM11mNN4Mpuvbp8iNIawwicy-vDYUqCemchthECscpdu_XJ6G2DUdIpU4JlTc4C0v3VYOc1dxlJQ"
  },

  {
    name : "gopchang",
  image : "https://lh3.googleusercontent.com/proxy/KLqA0HhPBbJdQpEVeuFtAO2HukEQax9V39bFMsu0YXUhPclQ8yof0hq0gkhNwywCk3losLX7hrMyLAgJJcQ-WAlGMaRpty4ENt99T2Y_Vr3Q5fDC6zAnr3s5X71bwSGWOFf2fJIet8m_ULRQ-8rFoeqZl2axlv5TEg"
  }

]



function App() {
  return (
  <div>
  {foodLike.map(dish => (<Food name ={dish.name} picture ={dish.image} />) )}
  </div>
  );
}

export default App;
