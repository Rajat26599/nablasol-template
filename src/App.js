import './App.css';
import Header from './Header';
import Banner from './Banner';
import Body from './Body';
import { faDesktop, faNewspaper, faPencilAlt } from '@fortawesome/fontawesome-free-solid';

function App() {
  const cardContent = [
    {
      icon: faDesktop,
      title:'Blue',
      text: 'Blue is the color of sky and sea. It is often associated with depth and stability. It symbolizes trust, loyalty, wisdom, confidence, intelligence, faith, truth and heaven.'
    },
    {
      icon: faNewspaper,
      title: 'Green',
      text: 'Green is the color of nature. It symbolizes growth, harmony, freshness, and fertility. Green has strong emotional correspondence with safety.'
    },
    {
      icon: faPencilAlt,
      title: 'Red',
      text: 'Red is the color of fire and blood, so it is associated with energy, war, danger, strength, power, determination as well as passion, desire, and love.'
    }
  ]
  return (
    <div className="App">
      <Header categories={['Red', 'Blue', 'Green', 'Yellow', 'Pink', 'Purple']}/>
      <Banner />
      <Body cards={cardContent}/>
    </div>
  );
}

export default App;
