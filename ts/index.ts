// Interface
interface Store {
    name: string,
    address: string
}

// Type
type CarModal = {
    name: string,
    year: number,
    status: boolean,
    colorList: Array<string>
    store: Store
}

// Enum
enum CarList {
    Mercedes, Mazda, Ferrari 
}

// Practice
const Mercedes:CarModal = {
    name: "Mercedes",
    year: 2024,
    status: true,
    colorList: ["Black", "White"],
    store: {
        name: "Mercedes Store",
        address: "Google/Internet 123"
    }
}

const JPCars: Array<CarModal> = []
JPCars.push({
    name: "Toyota",
    year: 2023,
    status: true,
    colorList: ["Black, BLue, Green"],
    store: {
        name: "JP Market",
        address: "Japan"
    }
})


const ExpensiveCars: CarModal[] = []
ExpensiveCars.push({
    name: "Ferrari",
    year: 2022,
    status: false,
    colorList: ["Red"],
    store: {
        name: "Eu Market",
        address: "Eu"
    }
})

// Function
function add(a:number, b:number) {
    // return a + b
    return {a, b}
}
const result = add(5, 3)
console.log(result.a, result.b);
