import { useState } from "react";


function Five()
{
  const originalPrice = 7899; // Define the original price
    const [discount, setDiscount] = useState(0);
    const [discountedPrice, setDiscountedPrice] = useState(originalPrice);

    const applyDiscount = (discountValue) => {
        let discountAmount = 0;

        if (discountValue === 10) {
            discountAmount = originalPrice * 0.1;
        } else if (discountValue === 20) {
            discountAmount = originalPrice * 0.2;
        } else if (discountValue === 30) {
            discountAmount = originalPrice * 0.3;
        }

        setDiscount(discountAmount);
        setDiscountedPrice(originalPrice - discountAmount);
    };

    const resetPrice = () => {
        setDiscount(0);
        setDiscountedPrice(originalPrice);
    };

    return (
        <>
            <h1>Original Price: ${originalPrice}</h1>
            <h1>Discounted Price: ${discountedPrice.toFixed(2)}</h1>
            <p>Click a button to apply a discount:</p>
            <button onClick={() => applyDiscount(10)}>Apply 10% Discount</button>
            <button onClick={() => applyDiscount(20)}>Apply 20% Discount</button>
            <button onClick={() => applyDiscount(30)}>Apple 30% Discount</button>
            <button onClick={()=>applyDiscount(0)}>Reset Price</button>
        </>
    );
}

export default Five;
