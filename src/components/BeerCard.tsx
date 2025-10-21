export type BeerCardType = {
  image: string,
  name: string,
  abv: string,
  volume: string,
  price: number,
  available: boolean
}

const BeerCard = (props: BeerCardType) => {
  return (
    <div className='beerCard'>
      <img src={props.image}/>
      <strong>{props.name} {props.abv} {props.volume}</strong>
      <p>{props.price} Ft</p>
      <strong className={props.available? "available" : "notAvailable"} >{props.available? "Raktáron" : "Nincs raktáron"}</strong>
    </div>
  )
}

export default BeerCard