import styled from "styled-components";

export const Container = styled.div`
  background: #1a1a1a;
  min-height: 100vh;
  display: flex;
  text-align: left;
`;

export const Form = styled.form`
  width: 450px;
  margin: auto;
  background: #ffffff;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  padding: 40px 55px 45px 55px;
  border-radius: 15px;
  transition: all 0.3s;
  box-sizing: border-box;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px red;
    border-color: #167bff;
  }
`;

export const H3 = styled.h3`
  font-size: 24px;
  font-weight: 500;
  font-family: "Fira Sans", sans-serif;
  box-sizing: border-box;
  text-align: center;
  margin: 0;
  line-height: 1;
  padding-bottom: 20px;
`;

export const Label = styled.label`
  font-weight: 500;
  font-family: "Fira Sans", sans-serif;
  box-sizing: border-box;
`;

export const Input = styled.input`
  cursor: pointer;
  margin-bottom: 0;
  width: 100%;
  border-radius: 5px;
  box-shadow: 0px;
  outline: none;
  font-size: 14px;
  padding: 6px 8px;
  border-width: 1px;
  border-style: solid;
  border-color: "black";
  margin: 0;
`;

export const Button = styled.button`
  border-radius: 4px;
  /* background: #6699ff; */
  background: #6666ff;
  /* background: #6666cc; */
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #6666cc;
    color: #010606;
  }
`;
export const Button2 = styled.div`
margin-left: 300px;
`;

export const Select = styled.select`
  width: 100%;
  height: 35px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
    font-family: "Fira Sans", sans-serif;
  }
`;

export const P = styled.p`
   font-size: 0.8rem;
  margin-top: 0.5rem;
  color: #f00e0e;
`;

export const Span = styled.span`
  margin-left: 10px;
`

//###############################################

export const ProjectContainer = styled.div`
  min-height: 27vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #282c34;
`;


export const ProjectWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 40px;
  padding: 0 50px;
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ProjectsCard = styled.div`
  width: 202px;
  background: #3b3b3c;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: 6px solid #4c4c4d;
  border-radius: 10px;
  height: 290px;
  padding: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0, 2);
  transition: all 0.2s ease-in-out;
  &:hover {
    border: 6px solid #fff;
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ProjectsH2 = styled.h2`
  font-size: 1rem;
  color: #fff;
  margin-bottom: 10px;
  font-family: "Fira Sans", sans-serif;
`;

export const ProjectsH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-top: 10px;
  font-family: "Fira Sans", sans-serif;
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
  `;

  export const Background = styled.div`
  background: #282c34;
  height: 100%;
  width:100%;
  padding: 20px;


  `;


  export const H5 = styled.h5`
  font-size: 12px;
  font-weight: 200;
  font-family: "Fira Sans", sans-serif;
  box-sizing: border-box;
  text-align: center;
  margin: 0;
  line-height: 1;
  padding-bottom: 20px;
  border : 1px solid black;
`;
