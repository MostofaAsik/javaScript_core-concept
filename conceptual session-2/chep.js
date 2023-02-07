const phones = [

    { name: "Waltin", camera: 24, storage: "32gb", color: "silver", price: 22000 },
    { name: "Iphone", camera: 12, storage: "32gb", color: "silver", price: 82000 },
    { name: "Xiomi", camera: 12, storage: "32gb", color: "silver", price: 52000 },
    { name: "oppo", camera: 12, storage: "32gb", color: "silver", price: 20000 },
    { name: "nokia", camera: 12, storage: "32gb", color: "silver", price: 44000 },
    { name: "HTC", camera: 12, storage: "32gb", color: "silver", price: 15000 }

];
function mostChepeast(allphones) {
    let cheap = phones[0];
    for (let i = 0; i < allphones.length; i++) {
        let phone = allphones[i];
        // console.log(phone);
        if (phone.price < cheap.price) {
            cheap = phone;
        }

    }
    return cheap;
}
let mostCheap = mostChepeast(phones);
console.log(mostCheap);