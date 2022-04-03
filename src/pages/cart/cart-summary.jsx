const cartSummry = () => {
    const getOriginalPrice = (originalPrice, discount) => {
        return (
            Number(originalPrice) - (Number(originalPrice) / 100) * Number(discount)
        );
    };

    const getPrice = (cartProducts) => {
        return cartProducts.reduce(
            (prev, curr) => prev + curr.qty * curr.originalPrice,
            0
        );
    };

    const totalPrice = (cartProducts) => {
        return cartProducts.reduce(
            (prev, curr) =>
                prev + curr.qty * getOriginalPrice(curr.originalPrice, curr.discount),
            0
        );
    };

    const getDiscount = (cartProducts) => {
        return (
            (totalPrice(cartProducts) / getPrice(cartProducts)) * 100 -
            100
        ).toFixed(2);
    };

    const savePrice = (cartProducts) => {
        return Math.abs(totalPrice(cartProducts) - getPrice(cartProducts));
    };

    return { getPrice, totalPrice, getDiscount, savePrice };
};

export { cartSummry };
