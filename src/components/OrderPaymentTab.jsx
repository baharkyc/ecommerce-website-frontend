import { useState } from "react";
import ButtonMd from "./buttons/ButtonMd";
import CreditCardInformation from "./forms/CreditCardInformation.jsx";
import CreditCardCard from "./cards/CreditCardCard.jsx";
import { setSelectedCardId } from "../store/actions/clientActions.js";
import { useDispatch, useSelector } from "react-redux";

const OrderPaymentTab = ({cardList}) => {

    const [ showCreditCardForm, setShowCreditCardForm ] = useState(false);

    const dispatch = useDispatch();

    const hasCards = cardList && cardList.length > 0;

    const { selectedCardId } = useSelector(state => state.client);

    const handleCardSelection = (cardId) => {

            dispatch(setSelectedCardId(cardId));
        }


    return (
        <div className="bg-white p-4 border rounded-md md:w-[800px] border-light-gray-2 text-sm space-y-4">
            
            { /* Add Credit Card */}
            <div className="w-full flex justify-between px-2 pt-2 text-2xl mb-4">
                <div className="font-bold text-md">
                    Select Credit Card
                </div>
                <div className="w-16">
                    <ButtonMd 
                        onClick={() => setShowCreditCardForm(true)}>
                        +
                    </ButtonMd>
                </div>
            </div>

            {!hasCards && (
                <div className="text-second-text-color">Please Add a Card</div>
            )}

            {hasCards && (
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    {cardList.map((card) => (
                        <CreditCardCard
                            key={card.id}
                            creditCard={card}
                            selectedCardId={selectedCardId}
                            onSelect={handleCardSelection}
                        />
                    ))}
                </div>
            )}


            {showCreditCardForm && (
                <div className="fixed inset-[-14px] z-50 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-[450px] max-w-lg relative">

                        {/* Close Button */}
                        <button
                            onClick={() => setShowCreditCardForm(false)}
                            className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl font-bold"
                        >
                            &times;
                        </button>

                        {/* Credit Card Form */}
                        <CreditCardInformation 
                            onSuccess={() => {
                                setShowCreditCardForm(false);
                                
                            }}/>
                    </div>
                </div>
            )}
        </div>
    )
}

export default OrderPaymentTab;