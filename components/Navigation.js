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
                    <Link href="/about">
                        <a className={router.pathname === '/about' ? 'active' : '' }>About</a>
                    </Link>
                </li>
                <li>
                    <Link href="/blog">
                        <a className={router.pathname === '/blog' ? 'active' : '' }>Blog</a>
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        <a className={router.pathname === '/contact' ? 'active' : '' }>Contact</a>
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