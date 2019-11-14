const axios = require('axios');

class QuizFetcher {

    static async fetch() {
        const API_URL ='https://opentdb.com/api.php?amount=10&type=multiple';

        try{
            const response = await axios.get(API_URL);           
            return response.data;
        } catch(error) {
            console.log('取得失敗', error.message);
        }

    }
}

module.exports = QuizFetcher;