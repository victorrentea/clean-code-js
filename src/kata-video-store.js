export function statement(customer) {
    let totalPrice = 0;
    let frequentRenterPoints = 0;
    let result = `Rental Record for ${customer.name}\n`;
    for (const rental of customer.rentals) {
        const price = calculatePrice(rental);
        frequentRenterPoints += calculateRenterPoints(rental);
        //print figures for this rental
        result += `\t${rental.movie.title}\t${price}\n`;
        totalPrice += price;
    }
    // add footer lines
    result += `Amount owed is ${totalPrice}\n`;
    result += `You earned ${frequentRenterPoints} frequent renter points\n`;

    return result;
}

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
