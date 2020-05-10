import React from "react";
// import Potato from "./Potato";
import PropTypes from "prop-types";


class App extends React.Component{

  // 바꿀값
  state = {
    count: 0
  };

  add = () => {};
  minus = () => {};

  render(){
    return (
  <div>
    <h1>The number is {this.state.count}</h1>
    <button onClick={this.add}>Add</button>
    <button onClick={this.minus}>Minus</button>
  </div>
    );
  }
}


// const foodLike = [
//   {
//     id :1,
//     name : "Kimchi",
//     image : "https://m.jnmall.kr/web/product/big/201910/4b83072de272a51edffa420ab3b2fa98.jpg",
//     rating : 5 // 우리가 전달받은 props가 우리가 예상한 props인지 확인할 때 사용, String X, 숫자 형식
//   },

//   {
//     id : 2,
//     name : "samgyeopsal",
//     image : "https://lh3.googleusercontent.com/proxy/ce2V_MRoo7-mhtcCc-3XPrKnnVn62YCjGyGdI1mkkx5kpg2ZZuiNosqJPA_FjVqM11mNN4Mpuvbp8iNIawwicy-vDYUqCemchthECscpdu_XJ6G2DUdIpU4JlTc4C0v3VYOc1dxlJQ",
//     rating : 4.9
//   },

//   {
//     id :3,
//     name : "gopchang",
//     image : "https://lh3.googleusercontent.com/proxy/KLqA0HhPBbJdQpEVeuFtAO2HukEQax9V39bFMsu0YXUhPclQ8yof0hq0gkhNwywCk3losLX7hrMyLAgJJcQ-WAlGMaRpty4ENt99T2Y_Vr3Q5fDC6zAnr3s5X71bwSGWOFf2fJIet8m_ULRQ-8rFoeqZl2axlv5TEg",
//     rating : 4.8
//   }

// ]


// function Food({name, picture, rating}){ //{fav} = props
// return (
//   <div>
//       <h2>I like {name}</h2>
//       <h4>{rating}/3</h4>
//       <img src = {picture} alt={name}/>
//   </div> //자바의 this같은 개념 .으로 찾기
//   );
// }

// Food.prototype = {
//   name: PropTypes.string.isRequired,
//   picture: PropTypes.string.isRequired,
//   rating: PropTypes.number.isRequired
// }


// function App() {
//   return (
//   <div>
//   {foodLike.map(dish => (
//   <Food 
//     key= {dish.id} 
//     name = {dish.name} 
//     picture = {dish.image}
//     rating = {dish.rating}
//   />))}
//   </div>
//   );
// }

export default App;
