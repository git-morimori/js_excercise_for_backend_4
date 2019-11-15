const axios = require('axios');
const API_URL ='https://opentdb.com/api.php?amount=10&type=multiple';

class QuizFetcher {

    static async fetch() {

        try{
            const response = await axios.get(API_URL);           
            return response.data;
        } catch(error) {
            console.log('取得失敗', error.message);
        }

    }
}

module.exports = QuizFetcher;