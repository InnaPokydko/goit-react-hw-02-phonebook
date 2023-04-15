import styled from '@emotion/styled';

export const FormBox = styled.form`
  display: flex;
  justify-content: center;
  width: 350px;
  height: 130px;
  border-radius: 10px;
  flex-direction: column;
  gap: 15px;
  padding: 15px;
  font-size: 20px;
  box-shadow: 4px 4px 6px 0px rgba(66, 68, 90, 1);`

  export const Input = styled.input`
  width: 250px;
  height: 30px;
  color: #fff;
  background: #cfd9df;
  border: none;
  border-radius: 5px;`

  export const Label = styled.label`
   display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`

export const BtnForm = styled.button`
height: 50px;
width: 150px;
color: #136a8a;
text-transform: capitalize;
border: none;
border-radius: 10px;
background: #D6A4A4;
font-size: 16px;
cursor: pointer;
box-shadow: 4px 4px 6px 0px rgba(66, 68, 90, 1);


&:hover{
background-image: linear-gradient(to right, #DAE2F8 0%, #D6A4A4 51%, #DAE2F8 100%);   
}`