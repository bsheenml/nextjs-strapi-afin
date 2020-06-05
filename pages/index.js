import fetch from 'isomorphic-unfetch'
import Card from 'components/Card'
import { Flex, Box } from 'reflexbox'

const Home = ({ resources }) => {

  const resource = {}

  console.log(resources)
  return (
    <Box variant="container">
      <Box my={40} as="h2">Is A Friend Indeed</Box>
      <Flex justifyContent="space-between" flexDirection={{ _: "column", md: "row"}}>
          {resources.map(resource => (
            <Box key={resource.id} width={{ _: "100%", md: "30%"}}>
              <Card resource={resource} />
            </Box>
          ))}      
      </Flex>
    </Box>
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