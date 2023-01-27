import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  .bt-save{
    margin-top: 20px;
    width: 100px;
  }
`

export const Button = styled.button`
  width: 325px;
  height: 80px;
  margin: 100px;
  color: white;
  background: #64c27b;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
`

export const Input = styled.input`
  box-sizing: border-box;
  width: 334px;
  height: 80px;
  padding: 10px;
  margin: 10px;
  border: 1px solid white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
`;

export const TextArea = styled.div`
  ${'' /* padding: 10px 10px; */}
  ${'' /* box-sizing: border-box; */}
  ${'' /* text-align: center; */}
  ${'' /* padding-left: 100px; */}
  padding: 10px 10px;
  box-sizing: border-box;
  width: 400px;
  height: 47px;
  background-color: white;
  border: none;
  border-bottom: 1px solid #0e0e0e;
  display: block;
`;

export const ButtonShort = styled.button`
  width: 150px;
  height: 43px;
  background: white;
  ${'' /* border: none; */}
  ${'' /* box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.04); */}
  border-radius: 30px;
`;

export const InputSmall = styled.input`
  padding: 10px 10px;
  box-sizing: border-box;
  width: 400px;
  height: 47px;
  background-color: white;
  border: none;
  border-bottom: 1px solid #0e0e0e;
`;