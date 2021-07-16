// import './App.css';
import {useEffect, useState} from 'react'

function App() {
   const persons = ['Fuad','Fahad', 'Farhana'];
   const profession = ['Student', 'Worker', 'Student']

  const products = [
    {name: 'Photoshop', price: 49.99},
    {name: 'Illustrator', price: 39.99},
    {name: 'Premier', price: 99.99},
    {name: 'VFX', price: 109.99},
    {name: 'PDF', price: 79.99},
    {name: 'PDF', price: 79.99}
  ]

   
  return (
    <div className="App">
     <Person name={persons[0]} profession={profession[0]}/>

     <Counter/>

     <User/>

     {
       products.map((pd)=> <Product product={pd}/>)
     }
    </div>
  );
}



function Product(props){

  const {name, price} = props.product;

  const styles = {
    border: "2px solid goldenrod",
    padding: "10px",
    margin: "15px",
    borderRadius: "10px",
    backgroundColor: "green",
    width: "200px",
    height: "200px",
    textAlign: "center",
    color: "gold",
    float: "left"
  }

  return <div style={styles}>
    <h1>{name}</h1>
    <h3>${price}</h3>
    <button>Buy</button>
  </div>
}


function Counter(){
  const [count, setCount] = useState(10);
  const handleButton = (()=> {
    setCount(count + 1)
  })

  const handleMinusBtn = (()=>{
    setCount(count - 1)
  })


  return <div>
    <h1>Counter:{count} </h1>
    <button onClick={handleButton}>Increase</button>
    <button onClick={handleMinusBtn}>Decrease</button>
  </div>
}



function User(){
  const [user, setUser] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUser(data))
  }, [])
  return <div>
      <h1>Dynamic user: {user.length}</h1>
      <ul>
        {
          user.map((userName)=>{
            return <div style={{border: "1px solid red", margin: "10px"}}>
              <h2>{userName.name}</h2>
              <p>{userName.username}</p>
              <p>{userName.email}</p>
            </div>
          })
          }
      </ul>
  </div>
}









function Person(props){
  const styles = {
    border: '1px solid red',
    padding: '10px',
    margin: '15px',
    textAlign: 'center',
    backgroundColor: 'gray'
  }

  return <div style={styles}>
         <h1>Name:{props.name} </h1>
         <p>Profession:{props.profession} </p>
  </div>
}

export default App;
