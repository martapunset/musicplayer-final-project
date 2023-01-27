import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  //width: 300px;
  flex-direction: column;
  //margin: 0 auto;
  //gap: 10px;
  color: white;
`;
export const Button = styled.button`
 
  width: 325px;
  height: 80px;
  margin: 100px;
  color: white;
  background: #64c27b;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
`;

export const Input = styled.input`
  /* Rectangle 25 */

  box-sizing: border-box;
  width: 334px;
  height: 80px;
  padding: 10px;
  margin: 10px;
  //   opacity: 0.14;
  border: 1px solid white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
`;

export const TextArea = styled.div`
  /* Rectangle 25 */


  padding: 10px 10px;
  // color: white;
  box-sizing: border-box;
  width: 400px;
  height: 47px;
  // background: #171a4a;
  background-color: white;
  border: 1px solid grey;
  //border-radius: 30px;
`;

export const ButtonShort = styled.button`

  width: 200px;
  height: 73px;
  background: red;
  box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.04);
  ${'' /* border-radius: 30px; */}
`;

export const InputSmall = styled.input`
  /* Rectangle 25 */


  padding: 10px 10px;
  // color: white;
  box-sizing: border-box;
  width: 400px;
  height: 47px;
  // background: #171a4a;
  background-color: white;
  border: 1px solid grey;
  //border-radius: 30px;
`;