// Define a function to create a Car object with optional options...
function create_car(manuFacturer, model, ...options){
    // Initialize a Car object with manufacturer and model
    let car = {
        manufacturer: manuFacturer,
        model: model
    };

    // Add additional options to the car object 
    options.forEach(option => {
        let [key, value] = option.split(":");
        car [key.trim()] = value.trim();
    });

    return car;
}

// Call the function to create a car object
let my_car = create_car("Toyota", "Corolla", "Color: Gray", "Sunroof: True", "Year: 2024")

// Print the variable to ensure all the informations is stored correctly in the car object
console.log(my_car);
