const DEAD_PAY_AMOUNT = 1;

function getPayAmount(marine, bonusPackage) {
    let result;
    if (marine != null && (bonusPackage.value > 100 || bonusPackage.value < 10)) {
        if (!isDead(marine)) {
            if (!marine.retired) {
                if (marine.yearsService != null) {
                    result = marine.yearsService * 100 + bonusPackage.value;
                    if (!marine.awards.isEmpty()) {
                        result += 1000;
                    }
                    if (marine.awards.size() >= 3) {
                        result += 2000;
                    }
                    // HEAVY core logic here, business-rules ...
                } else {
                    throw "Any marine should have the years of service set";
                }
            } else result = retiredAmount();
        } else {
            result = DEAD_PAY_AMOUNT;
        }
    } else {
        throw new IllegalArgumentException("Not applicable!");
    }
    return result; // TODO move return closer
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