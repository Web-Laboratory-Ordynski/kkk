const meal = [
    {name: 'Овсяная каша с фруктами', price: 25, id: 01, category: 'breakfest'},
    {name: 'Яичница глазунья с овощами на сковородке', price: 25, id: 02, category: 'breakfest'},
    {name: 'Сет азербайджанский завтрак', price: 30, id: 03, category: 'breakfest'},
    {name: 'Яичница с помидорами по-бакински', price: 45, id: 04, category: 'breakfest'},
    {name: 'Сырники со сметаной', price: 45, id: 05, category: 'lunch'},
    {name: 'Шпинатный крем-суп', price: 50, id: 06, category: 'lunch'},
    {name: 'Суп Пити', price: 85, id: 07, category: 'lunch'},
    {name: 'Борщ украинский', price: 95, id: 08, category: 'lunch'},
    {name: 'Суп Кюфта Бозбаш', price: 100, id: 09, category: 'dinner'},
    {name: 'Картофель фри', price: 125, id: 10, category: 'dinner'},
    {name: 'Картофель по-домашнему', price: 135, id: 11, category: 'dinner'},
    {name: 'Рис с овощами', price: 150, id: 12, category: 'dinner'}];
/*let breakfest = meal.slice(0,4);
let lunch = meal.slice(4,8);
let dinner = meal.slice(8);*/
/*
meal.forEach(function (currentMeal){
    const mealName = currentMeal.name;
    document.write(mealName);
}
);*/
/* Price filters*/

const price_low = meal.filter(function (pr_l){
    return pr_l.price < 30
});
    price_low.forEach(function (low){
        const name_low = low.name;
        const price_low = low.price;
    document.write(name_low);
    document.write(price_low);
    });

const price_mid = meal.filter(function (pr_m){
    return pr_m.price < 50
});
    price_mid.forEach(function (mid){
        const name_mid = mid.name;
        const price_mid = mid.price;
    document.write(name_mid);
    document.write(price_mid);
    });

const price_high = meal.filter(function (pr_h){
    return pr_h.price < 100
});
    price_high.forEach(function (high){
        const name_high = high.name;
        const price_high = high.price;
    document.write(name_high);
    document.write(price_high);
    });

const price_exp = meal.filter(function (pr_ex){
    return pr_ex.price < 150
});
    price_exp.forEach(function (exp){
        const name_exp = exp.name;
        const price_exp = exp.price;
    document.write(name_exp);
    document.write(price_exp);
    });
/* Category filters*/
const breakf = meal.filter(function (br){
    return br.category === 'breakfest';
});
    breakf.forEach(function (c_br){
    const categoryBreakfest = c_br.name;
    document.write(categoryBreakfest);
    });

const lunc = meal.filter(function (lu){
    return lu.category === 'lunch';
});
    lunc.forEach(function (c_lu){
        const categoryLunch = c_lu.name;
        document.write(categoryLunch);
    });

const dinn = meal.filter(function (di){
    return di.category === 'dinner';
});
    dinn.forEach(function (c_di){
        const categoryDinner = c_di.name;
        document.write(categoryDinner);
    });



