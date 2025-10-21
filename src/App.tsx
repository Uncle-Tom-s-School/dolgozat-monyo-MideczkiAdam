import { useEffect, useState } from "react"
import BeerCard, { type BeerCardType } from "./components/BeerCard"

const App = () => {

  const [beer, setBeer] = useState<BeerCardType[]>([])

  useEffect(()=>{
    fetch('data.json')
    .then(res => res.json())
    .then(data => setBeer(data))
  },[])

  return (
    <div className="beerCardWrapper">
      {beer.map(item => <BeerCard {...item}/>)}
    </div>
  )
}

export default App