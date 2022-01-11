function isGivenNumBetweenTwoNums(a)
{ 
    if(a >= 5000 && a <= 9999)
    {
        return true;
    }
    return false;
}

console.log(isGivenNumBetweenTwoNums(5800));
console.log(isGivenNumBetweenTwoNums(580));