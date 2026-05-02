let obj = {
    name: "Abhishek",
    age: 23,
    address: {
        street: "123 Main St",
        city: "Patna",
        state: "Bihar",
        country: "India"
    },
    education: {
        college: {
            name: "XYZ University",
            year: 2024
        },
        school: {
            name: "ABC School",
            year: 2018
        }
    }
};

let obj1 = {}

const flateObj = (data) => {
    for (const key in data) {
        if (typeof data[key] === "object") {
            flateObj(data[key])
        } else {
            obj1[key] = data[key]
        }
    } 
}

flateObj(obj)
console.log(obj1);
