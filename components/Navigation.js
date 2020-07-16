import styled from '@emotion/styled'
import { rem } from 'polished'
import Link from 'next/link'
import { useRouter } from 'next/router'

function Navigation() {

    const router = useRouter()
    console.log(router)

    return (
        <NavigationStyled>
            <ul>
                <li>
                    <Link href="/resources-pdx">
                        <a className={router.pathname === '/resources-pdx' ? 'active' : '' }>Resources</a>
                    </Link>
                </li>
                <li>
                    <Link href="/maps-pdx">
                        <a className={router.pathname === '/maps-pdx' ? 'active' : '' }>Maps</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <a className={router.pathname === '/about' ? 'active' : '' }>About</a>
                    </Link>
                </li>
            </ul>
        </NavigationStyled>
    )
}

const NavigationStyled = styled.div`
    ul {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            li {
                margin-left: 10px;
            }
            a {
                text-decoration: none;
                color: #4C9EE3;
                &:hover {
                    text-decoration: underline;
                }
                &.active {
                    color: #EF6800;
                }
            }
        }

`

export default Navigation