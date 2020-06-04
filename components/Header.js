import styled from '@emotion/styled'
import { rem } from 'polished'

function Header() {
    return (
        <HeaderStyled>
            <div className="container">
                <div className="logo">
                    <img src="images/f-logo-65.png" alt="Site Logo" />
                    <span className="logo-text">A Friend In Need</span>
                </div>
            </div>
        </HeaderStyled>
    )
}

const HeaderStyled = styled.header`
    background: #efefef;
    padding: 20px;

    .logo {
        display: flex;
        align-items: center;

        .logo-text {
            color: #333333;
            font-weight: bold;
            font-size: ${rem(20)};
            margin-left: 20px;
        }
    }

`

export default Header