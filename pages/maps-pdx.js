import {Box, Flex} from 'reflexbox'
import getConfig from 'next/config'
import fetch from 'isomorphic-unfetch'
import Card from 'components/Card'
import MapContainer from 'components/MapContainer'


const TestData = ({ resources }) => {

    const resource = {}
  
    console.log(resources)
    return (
      <Box variant="container">
        <Box my={40} as="h2">Is A Friend Indeed</Box>
        <Box width="400px" height="380px">
          <MapContainer />
        </Box>
        <Flex justifyContent="space-between" flexDirection={{ _: "column", md: "row"}} mb={100} flexWrap="wrap">
            {resources.map(resource => (
              <Box key={resource.id} width={{ _: "100%", md: "30%"}}>
                <Card resource={resource} />
              </Box>
            ))}      
        </Flex>
      </Box>
    )
  }

const {publicRuntimeConfig} = getConfig()


export async function getServerSideProps(context) {
    //const { API_URL } = process.env
    const {id} = context.query
    const res = await fetch(`${publicRuntimeConfig.API_URL}/resources`)
    const data = await res.json()
    return {
        props: {
            resources: data
        },
    }
}

export default TestData