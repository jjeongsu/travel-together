import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { isDarkAtom } from "../atom";

function ThemeToggle(){

  const [isDark, setIsDark] = useRecoilState(isDarkAtom);
  const handleToggleClick = () => {
    setIsDark(prev => !prev);
  }
  return(
    <>
      <ToggleContainer onClick={handleToggleClick}>
        <ToggleBackElement isDarkMode={isDark}/>
        <ToggleCircle isDarkMode={isDark} />
      </ToggleContainer>
    </>
  )
}
interface IToggleBackEle {
  isDarkMode: boolean,
}
const ToggleContainer =styled.div `
  cursor: pointer;
  position: relative;
`;
const ToggleBackElement = styled.div<IToggleBackEle>`
  background-color: ${(props) => props.isDarkMode?  "rgb(233,233,234)": "rgb(0,200,102)"};
  width: 50px;
  height: 24px;
  border-radius: 30px;

`;
const ToggleCircle = styled.div<IToggleBackEle>`
  background-color: rgb(255,254,255);
  border-radius: 50%;
  width:22px;
  height: 22px;
  position: absolute;
  top: 1px;
  transition: 0.5s;
  left: ${(props) => props.isDarkMode ?  "1px": "27px"}
`;


export default ThemeToggle;

