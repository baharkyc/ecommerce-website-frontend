import { useForm } from "react-hook-form";
import { useState } from "react";
import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { loginUser } from "../../store/actions/authActions";

import ButtonMd from "../buttons/ButtonMd";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
    } = useForm(
        { mode: "onChange" }
    );

  const [isLoading, setLoading] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();


  const onSubmit = async (data, event) => {

    setLoading(true);
    event.preventDefault();

    try {
      await dispatch(loginUser(data, history));

    } catch (err) {
      reset((formValues) => ({
        ...formValues,
        password: "",
        }));
    } finally {
        reset();
        setLoading(false);
    };
  };


  return (
    <div className="w-full bg-white rounded-xl shadow-lg">
      <form
          onSubmit={handleSubmit(onSubmit)}
          className="px-8 pt-6 pb-8 w-full space-y-4"
          >
          <h2 className="text-primary-color text-2xl font-bold mb-4 text-center">Login</h2>

          <div>
              <input
              placeholder="email"
              className="w-full p-2 border-b focus:outline-none focus:border-primary-color focus:border-b-2"
              {...register("email", {
                  required: "Email is required",
                  pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Invalid email address",
                  },
              })}
              autoComplete="email"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <div>
              
              <input
              placeholder="password"
              type="password"
              className="w-full p-2 border-b focus:outline-none focus:border-primary-color focus:border-b-2"
              {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "Minimum 6 characters" },
              })}
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>

          {/* Remember Me checkbox */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="rememberBox"
              className="w-4 h-4"
              {...register("remember")}
            />
            <label htmlFor="rememberBox" className="text-sm text-gray-600">
              Remember me
            </label>
          </div>

          <div className="flex justify-center w-full pt-2">
              <ButtonMd 
                  isLoading={isLoading}
                  isFilled={isValid}
                  isDisabled={!isValid}>
                  Login
              </ButtonMd>
          </div>
          
      </form>
      <div className="text-second-text-color text-center  pb-8 flex flex-col gap-y-2">
            <span>Don't have an account?   </span>
            <Link 
            to="./signup"
            className="underline text-primary-color">
              Sign up here!
            </Link>
          </div>
    </div>
   
  );
};

export default LoginForm;
