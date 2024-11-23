export const convertPrice = (price) => {
    try {
        const result = Math.floor(price)?.toLocaleString().replaceAll(',', '.');
        return `$${result}`;
    }
    catch (error) {
        return null;
    }
}