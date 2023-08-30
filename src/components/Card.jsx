import ImgLocation from '../images/Fill219.png'
import './Card.css'


function Card(props) {
  

  return (
    <div className="card">
        <img src={props.imageUrl} alt={props.title} className="card--image"/>
        <div className="card--stats">
            <img src={ImgLocation}/>
            <span className='card--location'>{props.location}</span>
            <a href={props.googleMapsUrl} className='google--loc' target='_blank' rel="noreferrer">View on Google Maps</a>
            <h1 className='card--title'>{props.title}</h1>
            <span className='start--end'>{props.startDate}-</span>
            <span className='start--end'>{props.endDate}</span>
            <p className='description'>{props.description}</p>
            
        </div>
    </div>
  )
}

export default Card

