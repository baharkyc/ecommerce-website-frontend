import { User, Calendar, Trash, Pencil } from "lucide-react";
import { useDispatch } from "react-redux";
import { deleteCard } from "../../store/actions/clientActions";

const CreditCardCard = ({ creditCard, selectedCardId, onSelect }) => {

    const dispatch = useDispatch();

    if (!creditCard) return null;

    const maskCardNumber = (number) => {
        const last4 = number.slice(-4);
        return "**** **** **** " + last4;
    };

    return (
        <div className="bg-gray-50 border border-light-gray-2 rounded-md p-4 text-sm space-y-3 text-nowrap">

            {/* Selection */}
            <div className="flex items-center gap-2 mb-2">
                <input
                    type="radio"
                    checked={selectedCardId === creditCard.id}
                    onChange={() => onSelect(creditCard.id)}
                    className="mt-1 accent-primary-color"
                />
                <span className="text-base font-semibold">
                    My Card #{creditCard.id}
                </span>
            </div>

            {/* Card Number */}
            <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <span className="text-xs">{maskCardNumber(creditCard.card_no)}</span>
            </div>

            {/* Name on Card */}
            <div className="flex items-center gap-2 text-gray-600">
                <User size={16} />
                <span>{creditCard.name_on_card}</span>
            </div>

            {/* Expiration Date + Delete */}
            <div className="flex items-center justify-between text-gray-600 pt-2">
                <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>
                        {creditCard.expire_month.toString().padStart(2, "0")}/
                        {creditCard.expire_year}
                    </span>
                </div>

                <button
                    onClick={() => dispatch(deleteCard(creditCard.id))}
                    className="text-gray-500 hover:text-red-500"
                >
                    <Trash size={16} className="cursor-pointer" />
                </button>
            </div>

        </div>
    );
};

export default CreditCardCard;
