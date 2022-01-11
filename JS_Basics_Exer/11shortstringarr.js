words = ['apples', 'oranges', 'strawberry' ,'pineapple', 'kiwi']
function shortestStringInArray(wordsarr)
{
    return wordsarr.sort((a , b) => a.length - b.length)[0];
}

console.log(shortestStringInArray(words));