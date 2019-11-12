// let orderTaxi = dates => {
//     return `Take your taxi at ${dates}`
// }

// const orderTaxiWithSchedule = async() => {
//     try {
//         let dateSchdule = await fetch(`https://api.github.com/users/SutantoAdiNugroho`)
//         let data = await dateSchdule.json();

//         const message = await orderTaxi(data.created_at)

//         return message

//     } catch(error) {
//         return error
//     }a
// };

// orderTaxiWithSchedule().then(message => console.log(message)).catch(error => console.log(error));

fetch("http://jsonplaceholder.typicode.com/todos")
    .then(res => {
        return res.json();
    })
    .then(data => {
        let list = document.getElementById("list")
        data.map(({title})=> {
            let li = document.createElement("li")
            let titleList = document.createTextNode(title)
            li.appendChild(titleList)
            list.appendChild(li)
        })
    })
    .catch(error => {
        console.log(error, "error")
    })
