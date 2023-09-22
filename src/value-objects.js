function filterCarModels(criteria, models) {
    const results = [];
    for (let model of models) {
        if (intervalsIntersect(
                model.startProductionYear, model.endProductionYear,
                criteria.startYear, criteria.endYear)) {
            results.push(model);
        }
    }
    // More filtering logic
    return results;
}

console.log(intervalsIntersect(100, 200, 50, 250));
console.log(intervalsIntersect(100, 200, 50, 250));

// "Missing Abstraction" - you are missing a data structure (class)
function intervalsIntersectNew(interval1, interval2) {
    return interval1.start <= interval2.end && interval2.start <= interval1.end;
}
function intervalsIntersect(start1, end1, start2, end2) {
    return intervalsIntersectNew(new Interval(start1, end1), new Interval(start2, end2));
}

class Interval {
    constructor(start, end) {
        this.start = start;
        this.end = end;
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
