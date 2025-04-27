import { useForm } from "react-hook-form";
import { useState } from "react";
import { useHistory } from "react-router-dom"
import ButtonMd from "../buttons/ButtonMd";
import axiosInstance from "../../api/axiosInstance";

import { toast } from "react-toastify";

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

  const onSubmit = (data) => {

    setLoading(true);
    axiosInstance.post("/login", data)
      .then((res) => {
        console.log("Submitted successfully", res.data);
        history.push("/");
        toast.success("Login successful", {
          autoClose: 4000,
      })

      })
      .catch((err) => {
        console.log(err.message);
        reset((formValues) => ({
          ...formValues,
          password: "",
          }));
        toast.error("Please check your email or password", {
          autoClose: 4000,
      })
      })
      .finally(() => {
        setLoading(false);
      })
  };

  return (
    <div className="w-full bg-white rounded-2xl shadow-md">
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
            <a 
            href="./signup"
            className="underline text-primary-color">
              Sign up here!
            </a>
          </div>
    </div>
   
  );
};

export default LoginForm;
