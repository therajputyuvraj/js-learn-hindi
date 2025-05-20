// Functions and Objects.


// A function to calculate the total of a cart
function CalculateKartValue(...price) {

    console.log("The datatype of price is: ", typeof price); // this will print object because we are using rest operator
    console.log("The value of price is: ", price); // this will print the array of values

    sum = 0;

    if (Array.isArray(price) && Array.isArray(price[0])) {
        console.log("IN OBJECT OBJECT ")
        for (let j = 0; j < price.length; j++) {
            for (let i = 0; i < price[j].length; i++) {
                sum += price[j][i]
                console.log("sum: ", sum);
                
            }
        }
        return sum;
    }
    else if (Array.isArray(price)) {
        console.log("IN OBJECT ONLY ")
        sum = 0;
        for (let i = 0; i < price.length; i++) {
            sum += price[i]
        }
        return sum;
    }
}

const arr = [200, 300, 400, 233.23, 45652, 86753.24, 5563, 98273]
const arr2 = [388, 299, 3322]

// const cartValue = CalculateKartValue(arr, arr2);
const cartValue = CalculateKartValue(12,433.3,566);

console.log("The total Cart Value is: ", cartValue); // output will be 100


