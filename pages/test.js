import {Box, Flex} from 'reflexbox'
import getConfig from 'next/config'
import fetch from 'isomorphic-unfetch'
import CardMap from 'components/Card'
import MapContainer from 'components/MapContainer'


const TestData = ({ resources }) => {

    const resource = {}
  
    console.log(resources)
    return (
      <Box variant="container">
        <Box my={40} as="h2">Is A Friend Indeed</Box>
        <Box width="400px" height="380px">
          <CardMap>
            <MapContainer />
          </CardMap>
        </Box>
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