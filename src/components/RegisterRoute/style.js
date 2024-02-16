import styled from 'styled-components'

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
`
export const RegisterImg = styled.img`
  height: 400px;
  width: 400px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const RegisterHeading = styled.h1`
  color: #334155;
  font-size: 32px;
  font-family: 'Roboto';
`

export const InputContainer = styled.div`
  display: flex;
  font-size: 32px;
  font-family: 'Roboto';
`

export const Label = styled.label`
  font-size: 14px;
  color: #7b8794;
  font-family: 'Roboto';
  font-weight: bold;
  margin-bottom: 5px;
`
export const Input = styled.input`

border: 1px solid #cbd5e1
  margin-top: 10px;
  margin-bottom: 10px;
  border-width: 0.5px;
  outline: none;
  font-family: 'Roboto';
  width: 350px;
  padding: 15px;
  color: #000000;
`

export const Select = styled.select`
  border: 1px solid #cbd5e1;
  width: 350px;
  margin-bottom: 8px;
  color: #000000;
  font-family: 'Roboto'
  border-width: 0.5px;
  margin-top: 10px;
`

export const RegisterButton = styled.button`
  background-color: #2563eb;
  border: none;
  outline: none;
  border-radius: 5px;
  height: 6vh;
  width: 60%;
  color: white;
  font-size: 18px;
  font-family: 'Roboto';
  cursor: pointer;
  margin-top: 10px;
`

export const ErrorMsg = styled.p`
  color: #ff0b37;
  font-size: 16px;
  font-family: 'Roboto';
`

export default RegisterContainer
