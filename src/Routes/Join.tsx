import { useForm } from "react-hook-form";
import styled from "styled-components";
import ThemeBtn from "../Components/ThemeBtn";
import ThemeToggle from "../Components/ThemeToggle";

interface IForm {
  email : string,
  userId: string,
  userPw: string,
  userPwChk: string,
}
const FrequencyEmails = [
  '@naveer.com',
  '@gmail.com',
  '@daum.net',
  '@hanmail.net',
  '@yahoo.com',
  '@outlook.com',
  '@nate.com',
  '@kakao.com',
]
function Join (){
  const {register, handleSubmit, setValue, watch, formState: {errors}} = useForm<IForm>();
  const onValid = (data:IForm) => {
    
  }
  const handleIdDuplicate = (e:React.MouseEvent<HTMLButtonElement>) => {
    //서버에 이이디 보내서 중복확인하기
    //서함api url 참고하기
  }
  //email autocomplete 만들기



  return (<>
    <form onSubmit={handleSubmit(onValid)}>
      <Input 
        {
          ...register("email", {
            required: "Please write email",
            validate: {
              haveAt: (value) => value.includes("@") ? true : false 
            }
          })
        }
        placeholder = "Write Email"
      />
      <Input 
        {
          ...register("userId", {
            required: "Please write ID"
          })
        }
        placeholder = "Write ID"
      />
      <Button onClick =  {handleIdDuplicate}> 아이디 중복확인 </Button>
      <Input 
        {
          ...register("userPw", {
            required: "Please Write Password",
            minLength: 6,
          })
        }
        placeholder = "Write Password"
      />
      <Input 
        {
          ...register("userPwChk", {
            required: "Please write Password one more",
          })
        }
        placeholder ="checkyour PassWord"
        />
      <Button > JOIN </Button>
    </form>
    <ThemeBtn />
    <ThemeToggle />
  </>);
}

const Input = styled.input`
  width: 70%;
  height: 40px;
  margin-top: 4px;
  font-size: 20px;
  `;
const Button  =styled.button`
  width: 20%;
  height: 40px;
`;
export default Join;