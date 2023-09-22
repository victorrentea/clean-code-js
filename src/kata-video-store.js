export function statement(customer) {
    let totalPrice = 0;
    let result = `Rental Record for ${customer.name}\n`;

    const frequentRenterPoints = totalPoints(customer);

    for (const rental of customer.rentals) {
        const price = calculatePrice(rental);
        result += `\t${rental.movie.title}\t${price}\n`;
        totalPrice += price;
    }
    // add footer lines
    result += `Amount owed is ${totalPrice}\n`;
    result += `You earned ${frequentRenterPoints} frequent renter points\n`;

    return result;
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
