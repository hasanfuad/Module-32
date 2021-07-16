// import './App.css';

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
