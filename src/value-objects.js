function filterCarModels(criteria, models) {
    var results = [];
    for (let model of models) {
        if (intervalsIntersect(model.startProductionYear, model.endProductionYear, criteria.startYear, criteria.endYear)) {
            results.push(model);
        }
    }
    // More filtering logic
    return results;
}
function intervalsIntersect(start1, end1, start2, end2) {
    return start1 <= end2 && start2 <= end1;
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
