import styled from '@emotion/styled';

export const FormBox = styled.form`
  display: flex;
  justify-content: space-around;
  width: 450px;
  height: 130px;
  border-radius: 10px;
  flex-direction: column;
  gap: 15px;
  padding: 15px;
  font-size: 20px;
  background: #cfd9df;
  box-shadow: 4px 4px 6px 0px rgba(66, 68, 90, 1);
`;

export const Input = styled.input`
  width: 250px;
  height: 30px;
  color: #000;
  background: #cfd9df;
 border-color: #C9CCD3;
 font-size: 18px;
  border-radius: 5px;
`;

export const Label = styled.label`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

export const BtnForm = styled.button`
  height: 50px;
  width: 150px;
  align-self: center;
  color: #000;
  text-transform: capitalize;
  border: none;
  border-radius: 10px;
  background-image: linear-gradient(to right, #348F50 0%, #56B4D3 51%, #348F50 100%);
  font-size: 16px;
  cursor: pointer;
  box-shadow: 4px 4px 6px 0px rgba(66, 68, 90, 1);

  &:hover {
    background-image: linear-gradient(
      to right,
      #dae2f8 0%,
      #d6a4a4 51%,
      #dae2f8 100%
    );
  }
`;
