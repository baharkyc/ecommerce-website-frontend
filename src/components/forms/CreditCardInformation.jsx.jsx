import { useForm } from "react-hook-form";
import ButtonMd from "../buttons/ButtonMd";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { saveCreditCard } from "../../store/actions/clientActions";


const CreditCardInformation = ({ onSuccess }) => {

    const dispatch = useDispatch();

    const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
    } = useForm({ 
        mode: "onChange",
    });

     const onSubmit = async (data) => {
 
        await dispatch(saveCreditCard(data));

        if (onSuccess) {
            onSuccess();
        }
     };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col bg-white p-4 space-y-4 w-full max-w-xl mx-auto"
        >
            <h2 className="text-xl pb-2 font-bold text-primary-color text-center">New Card</h2>

            <input
                placeholder="Name on Card"
                className="w-full p-2 border-b focus:outline-none focus:border-primary-color"
                {...register("name_on_card", { required: "Enter the name on card" })}
            />
                {errors.name_on_card && <p className="text-red-500 text-sm">{errors.name_on_card.message}</p>}


            <input
                placeholder="Card No"
                className="w-full p-2 border-b focus:outline-none focus:border-primary-color"
                {...register("card_no", { required: "Enter a card number" })}
            />
            {errors.card_no && <p className="text-red-500 text-sm">{errors.card_no.message}</p>}

            
            <div className="flex flex-col gap-y-4 pt-6">
                <span className="text-second-text-color">Expiration Date</span>
                <div className="flex flex-row w-full space-x-16">
                    
                    {/* Month Dropdown */}
                    <select
                    className="w-full border-b p-2 focus:outline-none focus:border-primary-color"
                    {...register("expire_month", { required: "Select month" })}
                    defaultValue=""
                    >
                        <option value="" disabled>
                            Month
                        </option>
                        {[...Array(12)].map((_, i) => {
                            const month = (i + 1).toString().padStart(2, "0");
                            return (
                            <option key={month} value={month}>
                                {month}
                            </option>
                            );
                        })}
                    </select>
                    {errors.expire_month && (
                        <p className="text-red-500 text-sm">{errors.expire_month.message}</p>
                    )}

                    {/* Year Dropdown */}
                    <select
                        className="w-full border-b p-2 focus:outline-none focus:border-primary-color"
                        {...register("expire_year", { required: "Select year" })}
                        defaultValue=""
                        >
                        <option value="" disabled>
                            Year
                        </option>
                        {Array.from({ length: 12 }).map((_, i) => {
                            const year = new Date().getFullYear() + i;
                            return (
                                <option key={year} value={year}>
                                    {year}
                                </option>
                            );
                        })}
                    </select>
                    {errors.expire_year && (
                    <p className="text-red-500 text-sm">{errors.expire_year.message}</p>
                    )}
                </div>
            </div>

            <input
                placeholder="CVV"
                className="w-36 p-2 border-b focus:outline-none focus:border-primary-color" 
            />
       

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

export default CreditCardInformation;
