import fetch from 'isomorphic-unfetch'

const Home = () => {
  return (
    <div className="container">
      <h1> NextJS GraphCMS Playground</h1>
    </div>
  )
}

export async function getServerSideProps() {
  const { API_URL } = process.env

  const res = await fetch(`${API_URL}/resoucres`)

  const data = await res.json()

  return {
    props: {
      resoucres: data
    }
  }
}

export default Home