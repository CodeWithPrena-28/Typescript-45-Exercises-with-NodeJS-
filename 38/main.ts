//Describe a Function
function describe_City (city: string, country:string = "Pakistan"){
    console.log(`${city} is in ${country}`);
}

// Calling the function
describe_City("Sanghar");

describe_City("Karachi")

describe_City("Berlin", "Germany")