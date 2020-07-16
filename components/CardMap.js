import styled from '@emotion/styled'
import Link from 'next/link'


function CardMap() {
    
    const { API_URL } = process.env

    return (
        <CardStyled>
            <div className="poster">
            </div>
        </CardStyled>
    )
}
const CardMapStyled = styled.div`
    width: 100%;
    border: 1px solid #cccccc;
    margin-top: 50px;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0,0,0, 0.2);
    white-space: pre-wrap;

    img {
        max-height:150px;
        margin: auto;
        display: block;
    }

    .body {
        padding: 20px;

        h3 {
            margin-bottom: 20px;
        }

        p {
            color: #666666;
            line-height: 1.5;
        }
        a {
            display: inline-block;
            margin: 20px 0;
        }

    .poster {
        
    }
    }

`

export default CardMap