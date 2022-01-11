function inchesToFeet(a)
{
    var feet  = Math.floor(a/12);
    var inch = a % 12;
    var result = feet + "'-" + inch + "\"";
    return result;
}

console.log(inchesToFeet(58));