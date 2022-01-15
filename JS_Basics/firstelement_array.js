/* This function returns n numbers of first elements */
function firstElem(array, n)
{
    if (array == null)
        return [];
    if (n == null)
        return array[0];
    if (n < 0)
        return [];

    return array.slice(0, n)
};

console.log(firstElem([8 ,4, 6, -1]));
console.log(firstElem([], 3));
console.log(firstElem([8, 4, 6, -1],3));
console.log(firstElem([8, 4, 6, -1],5));
console.log(firstElem([8, 4, 6, -1],-2));