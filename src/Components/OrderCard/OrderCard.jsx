import { Link } from "react-router-dom";
import del from '../../assets/images/special_icons/delete.svg'
const OrderCard = ({ order ,handleDelete,handleConfirm}) => {
    const { _id, name,number, coffeeName, email, address, quantity, taste } = order;

    return (
        <tr>
      <th>
        <label>
          { status === 'confirm' ? 
           <Link><img src={del}  className="bg-orange-700 p-2 rounded"  alt="" /></Link>

          :
          <Link onClick={() => handleDelete(_id)}><img src={del}   className="bg-orange-700 p-2 rounded"  alt="" /></Link>

          }
        </label>
      </th>
     
    
      <td>{name}</td>
      <td>{coffeeName}</td>
      <td>{number}</td>
      <td>{email}</td>
      <td>{address}</td>
      <td>{taste}</td>
      <td>{quantity}</td>
      <th>
        { status === 'confirm' ? <span className="font-bold bg-green-700 p-2 rounded text-white">Confirmed</span>
        :
        <button onClick={() => handleConfirm(_id)} className="p-3 rounded hover:bg-orange-700 bg-orange-600 text-white">Pending</button>

        }
      </th>
    </tr>
    );
};

export default OrderCard;