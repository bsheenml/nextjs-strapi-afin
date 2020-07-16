import {Box, Flex} from 'reflexbox'
import getConfig from 'next/config'
import fetch from 'isomorphic-unfetch'


function Resource({resources}) {
    console.log(resources)



    return (
        <>
            <Box variant="container">
                <Box as="h2" my={40}>{resources.name}</Box>
                <Box maxWidth={600}>
                </Box>
            </Box>
        </>
    )
}

const {publicRuntimeConfig} = getConfig()

export async function getServerSideProps(context) {
    //const { API_URL } = process.env
    const {id} = context.query
    const res = await fetch(`${publicRuntimeConfig.API_URL}/resources/${id}`)
    const data = await res.json()
    return {
        props: {
            resources: data
        },
    }
}

export default Resource