import './App.css'
import Card from './card-component/Card'

// Image Src
import luxuryCar from './assets/images/icon-luxury.svg'
import sedanCar from './assets/images/icon-sedans.svg'
import suvCar from './assets/images/icon-suvs.svg'

function App() {
  return (
    <div className="column-preview-card-container">
      <Card 
        cardColor={'hsl(31, 77%, 52%)'}
        iconSrc={sedanCar}
        carName={'sedans'}
        carDesc={'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.'}
      />
      <Card 
        cardColor={'hsl(184, 100%, 22%)'}
        iconSrc={suvCar}
        carName={'suvs'}
        carDesc={'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.'}
      />
      <Card 
        cardColor={'hsl(179, 100%, 13%)'}
        iconSrc={luxuryCar}
        carName={'luxury'}
        carDesc={'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.'}
      />
    </div>
  )
}

export default App
