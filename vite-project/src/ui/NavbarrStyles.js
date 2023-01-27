import styled from "styled-components";

export const WrapperNav = styled.div`

list-style: none;
display: flex;
justify-content: space-around;
align-items: start;
padding-left: 15%;
width: 10%;
// background: #18191e;
background-color: black;

.container {
    padding: 0;
    margin-top: 3px;
    font-size: 45px;
    cursor: pointer;
}

.cont{
    display: flex;
    flex-direction: row;
    align-self: center;
}

.container li a span:nth-last-child(1){
    padding-left: 15px;
    color:white;
    font-size: 20px;
}

.container li a span:nth-child(2){

}

.container li a {
    font-size: 3vh;
    color: #31dae4; 
}

.container .active {
    color: rgb(234, 249, 44);
}

@media screen and (max-width: 768px){
  ${'' /* list-style: none; */}
  ${'' /* height: 100%; */}
  ${'' /* display: flex; */}
  ${'' /* justify-content: space-between */}
    width: 100%;
    padding: 0px;
    justify-content: space-around;
    align-items: center;

    .container li a span:nth-last-child(1){
    display: none;
    overflow: none;
    }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {

    width: 100%;
    padding: 0px;
    display:flex;
    justify-content: space-around;
    align-items: center;
    

    .container li a span:nth-last-child(1){
    display: none;
    overflow: none;
    }
}

@media only screen and (min-width: 1024px) {
    list-style: none;
    height: 100%;
    display: flex;
    flex-direction: column;
    width: 100%;

    .navbar {
    padding: 0;
    ${'' /* margin-top: 3px; */}
    font-size: 45px;
    cursor: pointer;
    }
    .navbar li a {
    color: white;
    }
    .active {
    border-top: 7px solid white;
    border-radius: 5px;
    }
}
`