
export function statement(customer) {
    let totalPrice = 0;
    let frequentRenterPoints = 0;
    let result = `Rental Record for ${customer.name}\n`;
    for (let rental of customer.rentals) {
        let movie = rental.movie;
        
        const price = calculatePrice(movie, rental);

        //add frequent renter points
        frequentRenterPoints++;
        // add bonus for a 3 day new release rental
        if (movie.code === "new" && rental.d >= 3) frequentRenterPoints++;

        //print figures for this rental
        result += `\t${movie.title}\t${price}\n`;
        totalPrice += price;
    }
    // add footer lines
    result += `Amount owed is ${totalPrice}\n`;
    result += `You earned ${frequentRenterPoints} frequent renter points\n`;

    return result;
}

function calculatePrice(movie, rental) {
    let price = 0;
    switch (movie.code) {
        case "regular":
            price += 2;
            if (rental.d > 2) // TODO what the heck is "d"
                price += (rental.d - 2) * 1.5;
            break;
        case "new":
            price = rental.d * 3;
            break;
        case "childrens":
            price += 1.5;
            if (rental.d > 3) {
                price += (rental.d - 3) * 1.5;
            }
            break;
    }
    return price;
}

