import axios from 'axios';





export default {
    async getEquipos() {
        try {
            const response = await axios.get(`https://mocki.io/v1/95b09bbf-3dae-4fff-9a2b-445ff6352e51`);
            return response.data.results;
        } catch (error) {
            console.error('gg', error);
            throw error;
        }
    }
};

