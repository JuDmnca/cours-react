import styled from 'styled-components'

const WrapperControl = styled.section`
    padding: 2vw 2vw 0 2vw;
    display: flex;
    flex-direction: column;
    z-index: 1000;
    justify-content: flex-start;
`

const Title = styled.h1`
    padding-left: calc(10vw + 0.75rem);
    text-align: left;
`

export {
    WrapperControl,
    Title
}