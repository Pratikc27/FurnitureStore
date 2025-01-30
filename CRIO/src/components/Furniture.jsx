import { useEffect, useState } from "react";
import './styles.css';

const Furniture = ({ state }) => {
    const { contract } = state;
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const abs = async () => {
            console.log(contract)
            const data = await contract.getDetails();
            console.log(data, '====--');
            setOrders(data);
        }
        if (contract) {
            abs();
        }
    }, [contract])
    return (<div style={{display: 'flex', justifyContent: 'center'}}>
        <table style={{border: 'solid 1px', marginTop: '10px'}}>
    <thead>
        <tr>
            <th>Customer Name</th>
            <th>Order Description</th>
            <th>Date</th>
            <th>Transaction Address</th>
        </tr>
    </thead>
    <tbody>
        {orders.map((ele, index) => (
            <tr key={index}>
                <td>{ele.name}</td>
                <td>{ele.description}</td>
                <td>{new Date(ele.timestamp * 1000).toLocaleString()}</td>
                <td>{ele.from}</td>
            </tr>
        ))}
    </tbody>
</table>
    </div>)
}

export default Furniture;