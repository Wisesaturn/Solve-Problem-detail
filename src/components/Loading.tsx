import React from 'react'
import styled from 'styled-components'

interface L_type {
    loading : boolean
}

const LoadingPage = (props : L_type) => {
    return (
        <LoadingWrap<any> loading={props.loading}>
            로딩중입니다...
        </LoadingWrap>
    )
}

const LoadingWrap = styled.div`
    display : ${ (props : any) => props.loading ? 'block' : 'none'}
`

export default LoadingPage
