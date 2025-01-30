import { ethers } from "ethers";

const Order = ({ state }) => {
    const { contract } = state;

    const buyFurniture = async (event) => {
        event.preventDefault();
        const name = document.querySelector("#name").value;
        const description = document.querySelector("#details").value;
        const amount = {value: ethers.utils.parseEther("0.001")};
        const transaction = await contract.buyFurniture(name, description, amount);
        console.log(name, description);
        await transaction.wait();
        alert("order placed successfully...............");
        window.location.reload();

    }
    return (
        <div>
            <form onSubmit={buyFurniture}>
                <span>NAME: </span><br />
                <input type="text" id="name" /><br /><br />
                <span>Order Details: </span><br />
                <textarea type="text" id="details" /><br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Order;