import Navbar from './components/Navbar';
import Top from "./components/Top"
import Card from './components/Card';
import Data from "./data"
import './App.css';

function App() {

  const cardData = Data.map(item =>
    <Card
      key={item.id} //to remove the "Warning: Each child in a list should have a unique "key" prop."
      cardImg={item.coverImg}
      rating={item.stats.rating}
      views={item.stats.reviewCount}
      country={item.location}
      title={item.title}
      price={item.price}
      openSpots={item.openSpots}
    />

    // <Card
    //   key={item.id} //to remove the "Warning: Each child in a list should have a unique "key" prop."
    //   item={item} // instead of passing lots of props throught any component, we can pass entire object and then can use it's elements through the component itself
    //   {...item} // Or we can pass the entire object using spread operator, and access those through props under the component section
    // />
  )

  return (
    <div className="App">
      <Navbar />
      <Top />
      <div className="card-display">
        {cardData}
      </div>
    </div>
  );
}

export default App;