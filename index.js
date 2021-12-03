const allPlanos = require('./consts')
const configsPlanoBronze = require('./consts')
const configsPlanoGold = require('./consts')
const configsPlanoGratis = require('./consts')
const configsPlanoSilver = require('./consts')
const plansAnyNonBooleanValue = require('./consts')

exports.print = function () {
    console.log('Ai que vida dificil')
}
exports.sum = function (a) {
    let sum = 0
    a.map((e) => sum = sum + e)
    console.log('A soma da porra toda é ', sum)
}

exports.generateArrayOfPlans = function (plan) {
    //pega o primeiro elemento do array de planos (gratis, bronze, silver, gold)
    let planToFilter = 'gratis';

    switch (plan) {
        case 'gratis':
            planToFilter = configsPlanoGratis;
            break;
        case 'bronze':
            planToFilter = configsPlanoBronze;
            break;
        case 'silver':
            planToFilter = configsPlanoSilver;
            break;
        case 'gold':
            planToFilter = configsPlanoGold;
            break;
    }

    const firstPlanArrayElement = planToFilter[0];

    const copyAllPlanos = JSON.parse(JSON.stringify(allPlanos));

    return copyAllPlanos.map(plan => {
        //define se o recurso está ativo no plano
        plan.enabled = planToFilter.some(f => f == plan.resource);

        //alguns valores dos recursos não são booleanos. Por isso é feita essa verificação para
        //concatenar no "label" o valor do recurso, como também salvar o próprio valor
        if (plansAnyNonBooleanValue[plan.resource]) {
            const objValue = plansAnyNonBooleanValue[plan.resource][firstPlanArrayElement]; //prettier-ignore
            plan.label = /* (${objValue}) */ `${plan.label}`;
            plan.nonBooleanValue = Number(String(objValue).replace(/\D/g, ''));
        }

        return plan;
    });
}