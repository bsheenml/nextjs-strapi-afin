import styled from '@emotion/styled'


function Card ({ resource }) {
    return (
        <CardStyled>
            {resource.name}
        </CardStyled>
    )
}

const CardStyled = styled.div`

`

export default Card