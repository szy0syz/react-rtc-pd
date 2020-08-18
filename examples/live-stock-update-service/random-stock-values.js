class RandomStockValues {
    constructor() {

    }
    getAppleStockValues() {
        const startValue = 230;
        var endValue = 420;
        return Math.floor(Math.random() * (startValue - endValue + 1)) + endValue;
    }
    getMicrosoftStockValues() {
        const startValue = 130;
        var endValue = 220;
        return Math.floor(Math.random() * (startValue - endValue + 1)) + endValue;
    }
    getGoogleStockValues() {
        const startValue = 330;
        var endValue = 390;
        return Math.floor(Math.random() * (startValue - endValue + 1)) + endValue;
    }
}

module.exports = new RandomStockValues();