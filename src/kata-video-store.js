// repeating a method call, problems:
// 1) PERFORMANCE?????????? NO
// 2) BUG if calculatePrice() side effected on rental
// 3) BUG if it returns different value each time
function computeTotalPrice(customer) {
    let totalPrice = 0;
    for (const rental of customer.rentals) {
        totalPrice += calculatePrice(rental);
    }
    return totalPrice;
}



// if a function is PURE, then #2 and #3 are not possible
export function statement(customer) {
    // OK of Single Level of Abstraction Principle (SLAb)
    return formatHeader(customer)  // high-level
        + formatBody(customer.rentals) // high level
        + formatFooter(customer); // high level
}
function formatHeader(customer) {
    return `Rental Record for ${(customer.name)}\n`;
}

function formatBody(rentals) {
    return rentals.map(formatLine).join("");
}
function formatLine(rental) {
    return `\t${rental.movie.title}\t${calculatePrice(rental)}\n`;
}
function formatFooter(customer) {
    return `Amount owed is ${computeTotalPrice(customer)}\n` +
        `You earned ${totalPoints(customer)} frequent renter points\n`;
}
const totalPoints = customer => customer.rentals.map(calculateRenterPoints).reduce((a, b) => a + b, 0);

function calculateRenterPoints(rental) {
    let frequentRentalPoints = 1;
    if (deservesBonus(rental)) frequentRentalPoints++;
    return frequentRentalPoints;
}

// const addRenterPoints = () => {
//     let frequentRentalPoints = 0;
//
//     return {
//         accumulate: (rental) => {
//             frequentRentalPoints += 1;
//             if (deservesBonus(rental)) frequentRentalPoints++;
//             return frequentRentalPoints;
//         },
//         getTotal: () => frequentRentalPoints
//     }
// };

function deservesBonus(rental) {
    return rental.movie.code === "new" && rental.days >= 3;
}


function calculatePrice(rental) {
    let price = 0;
    switch (rental.movie.code) {
        case "regular":
            price += 2;
            if (rental.days > 2)
                price += (rental.days - 2) * 1.5;
            break;
        case "new":
            price = rental.days * 3;
            break;
        case "childrens":
            price += 1.5;
            if (rental.days > 3) {
                price += (rental.days - 3) * 1.5;
            }
            break;
    }
    return price;
}
