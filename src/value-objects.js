function filterCarModels(criteria, models) {
    const criteriaYears = new Interval(criteria.startYear, criteria.endYear);

    // const results = [];
    // for (const model of models) {
    //     if (model.productionYears.intersects(criteriaYears)) {
    //         results.push(model);
    //     }
    // }

    // FP is the way
    const results = models.filter(model => model.productionYears.intersects(criteriaYears));

    console.log(criteriaYears.end); // end attrib of the Interval is PUBLIC.
    // can i make it private in ES6 ? NO.


    // More filtering logic
    return results;
}

console.log(new Interval(100, 200).intersects(new Interval(50, 250)));
console.log(new Interval(100, 200).intersects(new Interval(50, 250)));

// "Missing Abstraction" - you are missing a data structure (class)
class Interval {
    constructor(start, end) {
        this.start = start;
        this.end = end;
        // Object.freeze(this);
    }
    intersects(other) { // OOP : behavior NEXT to state!
        return this.start <= other.end && other.start <= this.end;
    }
}

class CarSearchCriteria {
    constructor(startYear, endYear) {
        this.startYear = startYear;
        this.endYear = endYear;
    }
}
class CarModel {
    constructor(make, model, productionYears) {
        this.make = make;
        this.model = model;
        this.productionYears = productionYears;
    }
}

const fordFocusMk2 = new CarModel("Ford", "Focus", new Interval(2012, 2016));
console.log("results: " +filterCarModels(new CarSearchCriteria(2014, 2018), [fordFocusMk2]).length);
console.log("results: " +filterCarModels(new CarSearchCriteria(2017, 2018), [fordFocusMk2]).length);
