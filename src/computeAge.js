const computeAge = (birthday, currentDate) => {

    if(currentDate.getMonth() > birthday.getMonth()) return (currentDate.getFullYear() - birthday.getFullYear());
    if(currentDate.getMonth() === birthday.getMonth() &&  currentDate.getDay() >= birthday.getDay())
        return (currentDate.getFullYear() - birthday.getFullYear());
    return currentDate.getFullYear() - birthday.getFullYear() - 1;
}
