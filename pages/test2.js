import {Box, Flex} from 'reflexbox'
import getConfig from 'next/config'
import fetch from 'isomorphic-unfetch'
import Card from 'components/Card'
import MapContainer from 'components/MapContainer'
import GMap from '@bit/nexxtway.react-rainbow.g-map';
import MapMarker from '@bit/nexxtway.react-rainbow.map-marker';


const TestData = ({ resources }) => {

    const resource = {}
  
    console.log(resources)
    return (
      <Box variant="container">
        <Box my={40} as="h2">Is A Friend Indeed</Box>
        <Box width="400px" height="380px">
          <GMap
            apiKey={LIBRARY_GOOGLE_MAPS_APIKEY}
            zoom={10}
            latitude={-33.836538}
            longitude={151.1279}
            header="Title"
          >
            <MapMarker
              latitude={-33.941264}
              longitude={151.2042969}
              label="Botany Bay"
              description=" Botany, New South Wales, Australia"
            />

            <MapMarker
              latitude={-33.940004}
              longitude={151.094593}
              label="Garema"
              description="Garema Circuit, Kingsgrove, Australia"
            />
          </GMap>
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