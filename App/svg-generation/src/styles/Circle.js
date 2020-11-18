import styled, { css, keyframes} from 'styled-components'

const Scale = keyframes`
  from {
    transform: scale(1);
  }

  to {
    transform: scale(1.5);
  }
`

const WrapperCircles = styled.section`
        display: flex;
        flex-wrap: wrap;
`
const Svg = styled.svg`
        width: calc(100vw / 12);
        height: 100px;
`
const Circle = styled.circle`
    fill: rgb(77, ${props => props.color ? `${props.color * 255 / 12}` : "0"}, 200);
    transform-origin: center;
    animation: ${props => props.animate === true ? css`${Scale} 2s ease alternate infinite` : ''};
`

function WrapperCircle(props) {
    return (
        <Svg>
            <Circle cx="50%" cy="50%" r="25" animate={props.animate} color={props.id + 1}></Circle>
        </Svg>
    )
}

export {
    WrapperCircle,
    WrapperCircles,
}