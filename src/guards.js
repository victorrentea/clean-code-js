const DEAD_PAY_AMOUNT = 1;

function getPayAmount(marine, bonusPackage) {
    if (!(marine != null && (bonusPackage.value > 100 || bonusPackage.value < 10))) {
        throw "Not applicable!";
    }
    if (isDead(marine)) {
        return DEAD_PAY_AMOUNT;
    }
    if (marine.retired) {
        return retiredAmount();
    }
    if (marine.yearsService == null) {
        throw "Any marine should have the years of service set";
    }
    let result = marine.yearsService * 100 + bonusPackage.value;
    if (!marine.awards.isEmpty()) {
        result += 1000;
    }
    if (marine.awards.size() >= 3) {
        result += 2000;
    }
    // HEAVY core logic here, business-rules ...
    return result;
}

function isDead(marine) {
    return false;
}

function retiredAmount() {
    return 2;
}


class Marine {
    constructor(dead, retired, yearsService, awards) {
        this.dead = dead;
        this.retired = retired;
        this.yearsService = yearsService;
        this.awards = awards;
    }
}

class BonusPackage {
    constructor(value) {
        this.value = value;
    }
}

class Award {

}