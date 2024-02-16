import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
`

export const HomeHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 52px;
  color: #334155;
`

export const HomePara = styled.p`
  font-family: 'Roboto';
  font-size: 22px;
  color: #475569;
`

export const Button = styled.button`
 background-color: #2563eb;
 color: #ffffff;
  border: none;
  outline: none;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 20px;
  padding-left: 20px
  border-radius: 5px;
  color: white;
  font-size: 18px;
  font-family: 'Roboto';
  cursor: pointer;
`

export const Image = styled.img`
  height: 350px;
  width: 90%;
  margin-top: 30px;
`

export const Name = styled.h1`
  color: #2563eb;
  font-size: 45px;
  font-family: 'Roboto';
`

export const Topic = styled.p`
 color: #334155;
 font-size: 25px;
 font-family: 'Roboto'
 font-weight: bold;
`

export default HomeContainer
