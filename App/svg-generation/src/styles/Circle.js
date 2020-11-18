import styled from 'styled-components'

const WrapperCircles = styled.section`
        display: flex;
        flex-wrap: wrap;
`
const WrapperCircle = styled.section`
        fill: yellow;
        width: 25vw;
`

function Circle(props) {
    return (
        <WrapperCircle>
            <svg height="100" width="100" >
                <circle cx="50" cy="50" r="25" stroke="black"></circle>
                <text x="50" y="50">{props.id}</text>
            </svg>
        </WrapperCircle>
    )
}

export {
    Circle,
    WrapperCircles,
}