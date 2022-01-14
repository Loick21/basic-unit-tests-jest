const computeAge = require("../src/computeAge.js")

test("computeAge should return 17", () => {
    const currentDate = new Date(2018,12,24);
    const birthday = new Date(2001,11,24);
    expect(computeAge(birthday, currentDate)).toBe(17);
});

test("computeAge should return 16", () => {
    const currentDate = new Date(2018,10,24);
    const birthday = new Date(2001,11,24);
    expect(computeAge(birthday, currentDate)).toBe(16);
});

test("computeAge should return 17", () => {
    const currentDate = new Date(2018,11,25);
    const birthday = new Date(2001,11,24);
    expect(computeAge(birthday,currentDate)).toBe(17);
});

test("computeAge should return 16 ", () => {
    const currentDate = new Date(2018,11,23);
    const birthday = new Date(2001,11,24);
    expect(computeAge(birthday,currentDate)).toBe(16);
});

test("computeAge should return 17", () => {
    const currentDate = new Date(2018,11,24);
    const birthday = new Date(2001,11,24);
    console.log(currentDate.getFullYear() - birthday.getFullYear())
    expect(computeAge(birthday, currentDate)).toBe(17);
})