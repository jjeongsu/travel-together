import { useForm } from "react-hook-form";
import styled from "styled-components";

interface IForm {
  email : string,
  userId: string,
  userPw: string,
  userPwChk: string,
}
function Join (){
  const {register, handleSubmit, setValue} = useForm<IForm>();
  return (<>
    <form>
      <Input 
        {
          ...register("email", {
            required: "Please write email"
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
  </>);
}

const Input = styled.input`
  width: 70%;
  height: 40px;
  margin-top: 4px;
  font-size: 20px;
  `;
const Button  =styled.button`
  
`;
export default Join;