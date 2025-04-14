import { useForm } from "react-hook-form";

const EmailSubscribe = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Subscribed email:", data.email);
    reset(); // formu temizle
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-row gap-2 mt-4">
      <input
        type="email"
        placeholder="Enter your email"
        className={`px-4 py-2 border ${
          errors.email ? "border-red-500" : "border-gray-300"
        } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400`}
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
            message: "Invalid email address",
          },
        })}
      />
      {errors.email && (
        <p className="text-sm text-red-500 -mt-1">{errors.email.message}</p>
      )}

      <button
        type="submit"
        className=" bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
      >
        Subscribe
      </button>
    </form>
  );
};

export default EmailSubscribe;
