import { useSetRecoilState } from "recoil";
import { isDarkAtom } from "../atom";

function ThemeBtn(){
  const setIsDark = useSetRecoilState(isDarkAtom);
  const handleClick = () => {
    setIsDark(prev => !prev);
  }
  return(
    <>
      <button onClick = {handleClick}> SWAP </button>
    </>
  )
}
export default ThemeBtn;