import Content from '../components/Content/Content'
import React from 'react'
import styled from 'styled-components'

const ErrorPages = (): React.ReactElement => {
    return (
        <Error404>
            <Content content="404" />
        </Error404>
    )
}
export default ErrorPages

const Error404 = styled.div`
    display : block;
`
