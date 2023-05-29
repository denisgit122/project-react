import {useForm} from "react-hook-form";
import {authService} from "../../services";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const LoginPage = () => {
const {handleSubmit, register} = useForm();
const {error, setError} = useState(null);
const navigate = useNavigate();

const login = async (userCredential) => {
    try {
        await authService.login(userCredential);
        navigate("/privateCar", {replace:true})
    }catch (e) {
       if (e.response.status === 400){
           setError(e.response.data)
       }
    }

}

return (
  <div>
      <div>
          <div>
              <form onSubmit={handleSubmit(login)}>

                  <input type={"text"} placeholder ={"email"} {...register("email")}/>
                  <input type={"text"} placeholder ={"password"} {...register("password")}/>
                  <button>login</button>

              </form>
          </div>
          <div>
              {error ?.detail && <div>{error.detail}</div>}
          </div>
      </div>

  </div>
);
};

export {LoginPage};