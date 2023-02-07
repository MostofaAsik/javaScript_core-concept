function radianToDegree(radian) {
    const degree = 57.2958 * radian;
    return degree;
}
let degree = radianToDegree(199);
console.log(degree.toFixed(2));