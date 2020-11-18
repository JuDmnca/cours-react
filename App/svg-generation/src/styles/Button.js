import styled from 'styled-components'

const Button = styled.button`
  background: #007bff;
  color: white;
  margin: 1em;
  border: none;
  padding: .375rem .75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: .25rem;
`

const WrapperButtons = styled.section`
  display: flex;
  justify-content: center;
`

const WrapperButton = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export {
    WrapperButtons,
    WrapperButton,
    Button,
}