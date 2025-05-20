import { useForm } from "react-hook-form";
import ButtonMd from "../buttons/ButtonMd";
import { useDispatch } from "react-redux";
import { saveAddress, updateAddress } from "../../store/actions/clientActions";
import { getCityNames } from "turkey-neighbourhoods"
import { useEffect } from "react";


const AddressForm = ({ onSuccess, initialValues = {} }) => {

    const dispatch = useDispatch();
    const cities = getCityNames();

    const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
    } = useForm({ 
        mode: "onChange",
        defaultValues: initialValues,
    });

  
    useEffect(() => {
        reset(initialValues);
      }, [initialValues]);



    const onSubmit = async (data) => {

        if (initialValues && initialValues.id) {
            await dispatch(updateAddress({ ...data, id: initialValues.id }));

        } else {
            await dispatch(saveAddress(data));
        }
    
        if (onSuccess) {
            onSuccess();
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white p-4 space-y-4 w-full max-w-xl mx-auto"
        >
            <h2 className="text-xl pb-2 font-bold text-primary-color text-center">New Address</h2>

            <input
                placeholder="Address Header (Home, Work...)"
                className="w-full p-2 border-b focus:outline-none focus:border-primary-color"
                {...register("title", { required: "Enter a header for address" })}
            />
                {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}

            <input
                placeholder="Name"
                className="w-full p-2 border-b focus:outline-none focus:border-primary-color"
                {...register("name", { required: "Name required" })}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

            <input
                placeholder="Surname"
                className="w-full p-2 border-b focus:outline-none focus:border-primary-color"
                {...register("surname", { required: "Surname required" })}
                />
            {errors.surname && <p className="text-red-500 text-sm">{errors.surname.message}</p>}

            <input
                placeholder="Phone number"
                className="w-full p-2 border-b focus:outline-none focus:border-primary-color"
                {...register("phone", {
                    required: "Phone required",
                    pattern: {
                    value: /^05\d{9}$/,
                    message: "Please enter a valid phone number (05XXXXXXXXX)",
                    },
                })}
                />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}

            <select
                className="w-full p-2 border-b focus:outline-none focus:border-primary-color"
                {...register("city", { required: "City required" })}
                defaultValue=""
                >
                    <option value="" disabled>
                        Select a city
                    </option>
                    {cities.map((city) => (
                        <option key={city} value={city}>
                        {city}
                    </option>
                ))}
            </select>
            {errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}

            <input
                placeholder="District"
                className="w-full p-2 border-b focus:outline-none focus:border-primary-color"
                {...register("district", { required: "District required" })}
                />
            {errors.district && <p className="text-red-500 text-sm">{errors.district.message}</p>}

            <textarea
                placeholder="Neighborhood"
                className="w-full p-2 border-b focus:outline-none focus:border-primary-color"
                rows={3}
                {...register("neighborhood", { required: "Address detail required" })}
            />
            {errors.neighborhood && <p className="text-red-500 text-sm">{errors.neighborhood.message}</p>}

            <div className="pt-4 flex justify-center">
                <div className="w-40">
                    <ButtonMd
                        isFilled={isValid}
                        isDisabled={!isValid}
                    >
                    Save
                    </ButtonMd>
                </div>
            </div>
        </form>
    );
};

export default AddressForm;
