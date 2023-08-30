import './App.css'
import NavBar from './components/NavBar'
import Card from './components/Card'
import data from './Data'

function App() {
  const cards = data.map(data => {
    return (
      <Card
        key={data.id}
        imageUrl={data.imageUrl}
        title={data.title}
        location={data.location}
        googleMapsUrl={data.googleMapsUrl}
        startDate={data.startDate}
        endDate={data.endDate}
        description={data.description}
      />
    )
  })

  return (
    <>
      <NavBar/>
      <section className='cards-list'>
        {cards}
      </section>
    </>
  )
}

export default App
