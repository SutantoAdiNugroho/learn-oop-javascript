//learn try catch throw

let jsOnData = `{"name" : "Adi", "age" = 18}`

try {
    let user = JSON.parse = (jsOnData)

    if (!address) {
        throw new SyntaxError("Data address tidak ada")
    }
    console.log(user.address)
} catch (error) {
    console.log(`JSON error: ${error.message}`)
}

//learn callback
let insertName = callback => {
    let name = "Adi"
    callback(name)
};

function logName(name) {
    console.log(`My name is ${name}`)
}

insertName(name => {
    console.log(`My name is ${name}`)
});

insertName(logName)

//Resolve dan Reject
let myPromise = new Promise((resolve, rejects) => {
    let login = true
    if (login) {
        resolve("Your login is succesfully")
    } else {
        rejects("There's something wrong")
    }
});

//Filter untuk mengeluarkan kata myPromise
myPromise.then(result => {
    console.log(result)
}).catch(error => {
    console.log(error, "error")
});

//Promise All menampilkan lebih dari satu callback
let myPromise2 = new Promise((resolve, rejects)=> {
    let name = "Adi"
    if (name === "Adi") {
        resolve(`Hi ${name}`)
    } else {
        rejects("Your identity is not registered")
    }
});

Promise.all([myPromise, myPromise2]).then(result => {
    console.log(result)
}).catch(error => {
    console.log(error, "error")
});

//Async/Await pas saat login

async function myAsyncFunction(condition) {
    let login = condition
    if (login) {
        return "Login Succesfully"
    } else {
        //jika throw digunakan maka koding di bawahnya tidak akan dijalankan
        throw "There's something wrong when you login"
    }
}

const runFunction = async condition => {
    try {
        const message = await myAsyncFunction(condition)
        console.log(message, "//ini message sukses")
    } catch (error) {
        console.log(error);
    }
};

runFunction(false)

