function filterCarModels(criteria, models) {
    const results = [];
    for (let model of models) {
        if (intervalsIntersect(new Interval(model.startProductionYear, model.endProductionYear), new Interval(criteria.startYear, criteria.endYear))) {
            results.push(model);
        }
    }
    // More filtering logic
    return results;
}

console.log(intervalsIntersect(new Interval(100, 200), new Interval(50, 250)));
console.log(intervalsIntersect(new Interval(100, 200), new Interval(50, 250)));

// "Missing Abstraction" - you are missing a data structure (class)
function intervalsIntersect(interval1, interval2) {
    return interval1.intersects(interval2);
}

class Interval {
    constructor(start, end) {
        this.start = start;
        this.end = end;
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
    constructor(make, model, startProductionYear, endProductionYear) {
        this.make = make;
        this.model = model;
        this.startProductionYear = startProductionYear;
        this.endProductionYear = endProductionYear;
    }
}
const fordFocusMk2 = new CarModel("Ford", "Focus", 2012, 2016);
console.log("results: " +filterCarModels(new CarSearchCriteria(2014, 2018), [fordFocusMk2]).length);
console.log("results: " +filterCarModels(new CarSearchCriteria(2017, 2018), [fordFocusMk2]).length);
