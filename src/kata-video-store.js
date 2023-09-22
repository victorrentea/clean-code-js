
export function statement(customer) {
    let totalPrice = 0;
    let frequentRenterPoints = 0;
    let result = `Rental Record for ${customer.name}\n`;
    for (let rental of customer.rentals) {
        
        const price = calculatePrice(rental.movie, rental);

        //add frequent renter points
        frequentRenterPoints++;
        // add bonus for a 3 day new release rental
        if (rental.movie.code === "new" && rental.days >= 3) frequentRenterPoints++;

        //print figures for this rental
        result += `\t${rental.movie.title}\t${price}\n`;
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

