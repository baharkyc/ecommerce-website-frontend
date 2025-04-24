import { useForm } from "react-hook-form";
import ButtonMd from "../buttons/ButtonMd";

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
    } = useForm(
        { mode: "onChange" }
    );

  const onSubmit = (data) => {
    console.log("Data:", data);
    // API call will be added
  };

  const password = watch("password");

  return (
    <div className="min-h-[600px] w-full flex items-center justify-center bg-gray-50 p-4">
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-md space-y-4"
            >
            <h2 className="text-primary-color text-2xl font-bold mb-4 text-center">Sign Up</h2>

            <div>
                <input
                placeholder="Name"
                className="w-full p-2 border-b focus:outline-none focus:border-primary-color focus:border-b-2"
                {...register("name", { required: "Name is required" })}
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>

            <div>
                <input
                placeholder="Email"
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
                placeholder="Password"
                type="password"
                className="w-full p-2 border-b focus:outline-none focus:border-primary-color focus:border-b-2"
                {...register("password", {
                    required: "Password is required",
                    minLength: { value: 6, message: "Minimum 6 characters" },
                })}
                />
                {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
            </div>

            <div>
                
                <input
                placeholder="Enter password again"
                type="password"
                className="w-full p-2 border-b focus:outline-none focus:border-primary-color focus:border-b-2"
                {...register("confirmPassword", {
                    validate: (value) =>
                    value === password || "Passwords do not match",
                })}
                />
                {errors.confirmPassword && (
                <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>
                )}
            </div>

            <div className="flex justify-center w-full">
                <ButtonMd 
                    isFilled={isValid}
                    isDisabled={!isValid}>
                    Sign Up
                </ButtonMd>
            </div>
        </form>
    </div>
  );
};

export default SignUpForm;
