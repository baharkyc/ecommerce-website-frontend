import { User, Phone, Trash, Pencil } from "lucide-react";
import { useDispatch } from "react-redux";
import { deleteAddress, updateAddress } from "../../store/actions/clientActions";

const AddressCard = ({ address, selectedAddressId, onSelect, name, onEdit }) => {

    const dispatch = useDispatch();

    if (!address) return null;
    
    return (
        <div className="bg-gray-50 border border-light-gray-2 rounded-md p-4 text-sm space-y-2 text-nowrap">

            <div className="flex gap-2 mb-4">
                <input
                    type="radio"
                    name={name}
                    checked={selectedAddressId === address.id}
                    onChange={() => onSelect(address.id)}
                    className="mt-1 accent-primary-color"
                />
                <span className="text-base font-semibold">{address.title}</span>
            </div>
            
            {/* Name - Phone */}
            <div className="flex items-center justify-between gap-2 text-sm font-medium">
                <div className="flex gap-2">
                    <User size={16} className=" text-primary-color" />
                    <span className="text-xs">{address.name} {address.surname}</span>
                </div>
                <div className="flex gap-2">
                    <Phone size={16} className="text-primary-color ml-2" />
                    <span className="text-xs">{address.phone}</span>
                </div>
            </div>

        {/* Address */}
        <div className="flex flex-row justify-between items-end text-gray-800 leading-5 text-xs font-normal">
            {address.neighborhood} {address.address && `${address.address}`}<br />
            {address.district}/{address.city}

            <div className="space-x-4">

                <button onClick={() => onEdit(address)}> { /* Update Form will be added */}
                    <Pencil size={16}/>
                </button>

                <button onClick={() => dispatch(deleteAddress(address.id))}>
                    <Trash size={16}/>
                </button>

            </div>
            
        </div>
        </div>
  );
};

export default AddressCard;
