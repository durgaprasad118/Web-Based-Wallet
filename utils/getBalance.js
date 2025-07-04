import axios from 'axios';
async function getBalance(type, address) {
    try {
        const { data } = await axios.post('/api/get-balance', {
            type,
            address
        });
        return data.balance;
    } catch (error) {
        console.log(error);
        return '';
    }
}

export { getBalance };
