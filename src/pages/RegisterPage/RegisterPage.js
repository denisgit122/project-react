import {useForm} from "react-hook-form";
import {authService} from "../../services";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

const RegisterPage = () => {
    const {register,handleSubmit,reset} = useForm()
    const navigate = useNavigate();
    const [error, serError] = useState(null)

    const registerUser = async (data) => {
        try {
            await authService.register(data);
            console.log(data);
            navigate("/login");
        }catch (e) {
            serError(e.request.responseText);
            console.log(error)
        }

    }
return (
  <div>
      <div>
          <form onSubmit={handleSubmit(registerUser)}>
              <input type="text" placeholder={"name"} {...register("name")}/>
              <input type="text" placeholder={"email"} {...register("email")}/>
              <input type="text" placeholder={"password"} {...register("password")}/>
              <input type="text" placeholder={"statusVip"} {...register("statusVip")}/>
              <input type="text" placeholder={"gender"} {...register("gender")}/>
              <input type="text" placeholder={"status"} {...register("status")}/>
              <button>Register</button>
          </form>
      </div>
      {error && <div>{JSON.stringify({error})}</div>}

  </div>
);
};

export {RegisterPage};