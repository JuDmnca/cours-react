import styled from 'styled-components'

const Button = styled.button`
  background: #8FD3DC;
  color: white;
  margin: 1em;
  border: none;
  padding: .375rem .75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: .25rem;
  z-index: 1000;
`
const AnimButton = styled(Button)`
  background: #5002D9;
`;

const ShuffleButton = styled(Button)`
  background: #5594D0;
`;

const WrapperButtons = styled.section`
  display: flex;
  padding-left: 10vw;
`

export {
    WrapperButtons,
    Button,
    ShuffleButton,
    AnimButton,
}