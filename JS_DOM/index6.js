//Monobank API currency data

fetch('https://api.monobank.ua/bank/currency')
.then((response) => response.json())
.then((data) => {replaceCurrencyCode(data)})

function replaceCurrencyCode(courseData) {
fetch('https://pkgstore.datahub.io/core/currency-codes/codes-all_json/data/029be9faf6547aba93d64384f7444774/codes-all_json.json')
.then((response) => response.json())
.then((data) => {
    const mapWithCodes = new Map();
    data.map((item) => {mapWithCodes.set(item.NumericCode, item.Currency)})

    courseData.forEach((currentCurrency) => {
        currentCurrency.currencyCodeA = mapWithCodes.get(currentCurrency.currencyCodeA);
        currentCurrency.currencyCodeB = mapWithCodes.get(currentCurrency.currencyCodeS);
    })
    showCource(courseData);
})
}

function showCource(courseData) {
    courseData.map((item) => {
        if(item.rateBuy && item.rateSell) {
        const div = document.createElement('div');
        div.append(`Монобанк продает ${item.currencyCodeA} за ${item.rateSell} ${item.currencyCodeB}, а покупает за ${item.rateBuy} ${item.currencyCodeB}`);

        document.body.append(div);
    }
    })
}


//async await

const url = 'https://randomuser.me/api';

async function loadData(url) {
    const p = fetch(url);
    const res = await p;
    return res;
}