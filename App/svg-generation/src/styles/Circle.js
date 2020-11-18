import styled from 'styled-components'

const WrapperCircle = styled.section`
        padding: 1.5em;
        fill: yellow;
`

function Circle(props) {
    return (
        <WrapperCircle>
            <svg height="100" width="100" >
                <circle cx="50" cy="50" r="25" stroke="black"></circle>
                <text x="50" y="50">{props.key}</text>
            </svg>
        </WrapperCircle>
    )
}

export default Circle