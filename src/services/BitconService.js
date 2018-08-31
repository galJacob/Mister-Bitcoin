import axios from 'axios';

function getBitcoinRate() {
   return axios.get('https://blockchain.info/tobtc?currency=USD&value=1').then(res => {
       return res.data;
    })
}

function getStatisticsData(){
    return axios.get('https://api.blockchain.info/charts/market-price?format=json&cors=true').then(res => {
        return res.data;
     })
}
export default {
    getBitcoinRate,
    getStatisticsData
}