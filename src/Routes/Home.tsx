import { useRecoilValue } from "recoil";
import { isLoggedIn } from "../atom";

function Home(){
  const isLoggedin = useRecoilValue(isLoggedIn);

  return <>
    {isLoggedIn ? 
      <div>진짜 홈페이지 여기에 작성</div>
    :
      <div>로그인부터 하시오</div>
    }
  </>
}

export default Home;