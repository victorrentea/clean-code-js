
function statement(customer) {
    let totalAmount = 0;
    let frequentRenterPoints = 0;
    let result = `Rental Record for ${customer.name}\n`;
    for (let r of customer.rentals) {
        let movie = r.movie;
        var thisAmount = 0;

        // determine amount for each movie
        switch (movie.code) {
            case "regular":
                thisAmount += 2;
                if (r.d > 2) {
                    thisAmount += (r.d - 2) * 1.5;
                }
                break;
            case "new":
                thisAmount = r.d * 3;
                break;
            case "childrens":
                thisAmount += 1.5;
                if (r.d > 3) {
                    thisAmount += (r.d - 3) * 1.5;
                }
                break;
        }

        //add frequent renter points
        frequentRenterPoints++;
        // add bonus for a two day new release rental
        if (movie.code === "new" && r.d > 2) frequentRenterPoints++;

        //print figures for this rental
        result += `\t${movie.title}\t${thisAmount}\n`;
        totalAmount += thisAmount;
    }
    // add footer lines
    result += `Amount owed is ${totalAmount}\n`;
    result += `You earned ${frequentRenterPoints} frequent renter points\n`;

    return result;
}

const customer =
    {
        name: "martin",
        rentals: [
            { movie: { title: "Star Wars", code: "new" }, d: 6 },
            { movie: { title: "Sofia", code: "childrens" }, d: 7 },
            { movie: { title: "Inception", code: "regular" }, d: 5 }
        ]
    }
;


const customerStatement = statement(customer);
console.log(customerStatement);

const expected = `Rental Record for martin
        Star Wars       18
        Sofia   7.5
        Inception       6.5
Amount owed is 32
You earned 4 frequent renter points`;
console.log("-----");
console.log(expected);