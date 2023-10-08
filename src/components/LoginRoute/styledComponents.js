import styled from 'styled-components'

export const LoginButton = styled.button`
  background-color: rgb(55, 55, 156);
  width: 100%;
  color: #ffffff;
  width: 100px;
`
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 25px;
`
export const ErrorPara = styled.p`
  color: red;
  font-size: 15px;
`
export const Label = styled.label`
  font-size: 20px;
  font-weight: 600;
  align-self: flex-start;
  margin-left: 120px;
  margin-top: 25px;
  @media screen and (max-width: 875px) {
    font-size: 15px;
    font-weight: 1000;
    margin-left: 150px;
  }
`
export const CheckboxContainer = styled.div``

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const FormContainer = styled.div``

export const WebsiteLogo = styled.img`
  height: 230px;
  width: 600px;
  margin: 50px;
  @media screen and (max-width: 875px) {
    height: 130px;
    width: 300px;
  }
`
export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`
export const Input = styled.input`
  width: 30vw;
  height: 30px;
`
export const PasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`
export const InputCheck = styled.input`
  margin-left: 25px;
`
