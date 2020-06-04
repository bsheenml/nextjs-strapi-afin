import fetch from 'isomorphic-unfetch'
import Card from 'components/Card'

const Home = ({ resources }) => {

  const resource = {}

  console.log(resources)
  return (
    <div className="container">
      {resources.map(resource => (
          <Card key={resource.id} resource={resource} />
      ))}
    </div>
  )
}

export async function getServerSideProps() {
  const { API_URL } = process.env

  const res = await fetch(`${API_URL}/resources`)

  const data = await res.json()

  return {
    props: {
      resources: data
    }
  }
}

export default Home