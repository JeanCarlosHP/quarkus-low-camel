import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;

  padding: 1.5rem;
  width: 20rem;
  height: 100vh;
  
  background-color: #282a36;
  border-left: 1px solid #44475a;
`

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  color: #bd93f9;
`

export const ListComponents = styled.ul`
  list-style: none;

  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`
