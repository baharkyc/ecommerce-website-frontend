import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useState, useEffect } from "react";
import ButtonMd from "../buttons/ButtonMd";
import axiosInstance from "../../api/AxiosInstance";
import { toast } from "react-toastify";

const SignUpForm = () => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
    } = useForm(
        { mode: "onBlur" }
    );

    const [roles, setRoles] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [selectedRoleId, setSelectedRoleId] = useState(3); //default id is customer, 3.

    const password = watch("password");
    const history = useHistory();

    function fetchRoles() { //get roles with axios
        axiosInstance.get('/roles')
          .then((response) => {
            setRoles(response.data);
            console.log('Roles fetched')
          })
          .catch((err) => {
            console.log('Fetch roles error', err.response.data);
          })
          .finally(() => {
            setLoading(false);
          });
      }

    useEffect(() => {fetchRoles()}, []); //fetchRoles when page is loaded.


    const onSubmit = (data) => {
        setLoading(true);
        // remove confirmPassword, add role_id
        const { confirmPassword, ...restOfData } = data;
        const formData = {
            ...restOfData,
            role_id: selectedRoleId,
        };
        
        console.log("Form Data:", formData);

        axiosInstance.post('/signup', formData)
            .then((response) => {
                console.log('User created successfully:', response.data);
                toast.success('User created successfully, please check your email to activate your account.', {
                    autoClose: 4000,
                });
                history.push("/");
            })
            .catch((error) => {
                console.error('Error creating user:', error.response?.data || error.message);
                toast.error('Failed to create user.', {
                    autoClose: 4000,
                });
            })
            .finally(() => {
                setLoading(false);
            });
        
    };



  return (
    <div className="max-w-[400px]">
        <h2 className="text-primary-color text-2xl font-bold mb-4 text-center">Sign Up</h2>
        
        {/* Role Tabs */}
        <div className="bg-white rounded-2xl ">
            <div className="flex justify-center px-4">
                {roles.map((role) => (
                    <button
                    key={role.id}
                    type="button"
                    onClick={() => setSelectedRoleId(role.id)}
                    className={`px-8 py-4 bg-white ${
                        selectedRoleId === role.id
                        ? "font-semibold  text-primary-color border-light-gray-2 border-b"
                        : " text-second-text-color "
                    }`}
                    >
                    {role.code}
                    </button>
                ))}
            </div>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="px-8 pt-6 pb-2 w-full space-y-4"
                >  
                {/* Common fields for Customer, Store and Admin */}          
                <div>
                    <input
                    placeholder= "name"
                    className="w-full p-2 border-b focus:outline-none focus:border-primary-color focus:border-b-2"
                    {...register("name", { 
                        required: "Name is required",
                        minLength: {value: 3, message:"Minimum 3 characters"}}
                        )}
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                </div>

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
                        minLength: { value: 8, message: "Minimum 6 characters" },
                        pattern: {
                            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/,
                            message: "Password must include upper, lower case, number, and special character",
                        },
                    })}
                    />
                    {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                </div>

                <div>
                    
                    <input
                    placeholder="enter password again"
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

                {/* Fields for Store role, id = 2 */}
                {selectedRoleId === 2 && ( 
                    <>
                        <div className="pt-4">
                            <input
                            placeholder= "store name"
                            className="w-full p-2 border-b focus:outline-none focus:border-primary-color focus:border-b-2"
                            {...register("store.name", { 
                                required: "Name is required",
                                minLength: {value: 3, message:"Minimum 3 characters"}}
                                )}
                            />
                            {errors.store?.name && <p className="text-red-500 text-sm">{errors.store.name.message}</p>}
                        </div>
                        <div>
                            <input
                                placeholder="store phone"
                                className="w-full p-2 border-b focus:outline-none focus:border-primary-color focus:border-b-2"
                                {...register("store.phone", {
                                required: "Store phone is required",
                                pattern: {
                                    value: /^(?:\+90|0)?5\d{9}$/,
                                    message: "Enter a Turhish phone number",
                                },
                                })}
                            />
                            {errors.store?.phone && (
                                <p className="text-red-500 text-sm">{errors.store.phone.message}</p>
                            )}
                        </div>
                        <div>
                            <input
                                placeholder="Store Tax ID (TXXXXVXXXXXX)"
                                className="w-full p-2 border-b focus:outline-none focus:border-primary-color focus:border-b-2"
                                {...register("store.tax_no", {
                                required: "Store tax ID is required",
                                pattern: {
                                    value: /^T\d{4}V\d{6}$/,
                                    message: "Invalid tax ID format (TXXXXVXXXXXX)",
                                },
                                })}
                            />
                            {errors.store?.tax_no && (
                                <p className="text-red-500 text-sm">{errors.store.tax_no.message}</p>
                            )}
                        </div>
                        <div>
                            <input
                                placeholder="Store Bank Account (IBAN)"
                                className="w-full p-2 border-b focus:outline-none focus:border-primary-color focus:border-b-2"
                                {...register("store.bank_account", {
                                required: "Store bank account is required",
                                pattern: {
                                    value: /^TR\d{2}\s?\d{4}\s?\d{4}\s?\d{4}\s?\d{4}\s?\d{4}\s?\d{2}$/,
                                    message: "Invalid IBAN format. Should start with TR and be 26 characters.",
                                },
                                })}
                            />
                            {errors.store?.bank_account && (
                                <p className="text-red-500 text-sm">{errors.store.bank_account.message}</p>
                            )}
                        </div>


                    </>
                    
                    
                )}

                <div className="flex justify-center w-full py-4">
                    <ButtonMd 
                        isFilled={isValid}
                        isDisabled={!isValid}
                        isLoading={isLoading}>
                        Sign Up
                    </ButtonMd>
                </div>

                
            </form>
        </div>
            
    </div>
  );
};

export default SignUpForm;
