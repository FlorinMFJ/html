var arr1 = [3,'a','a','a',2,3,'a',3,'a',2,4,9,3,2,2,2,2,2,2];

function mostFrequentItem(arr1)
{
    var mf = 1;
    var m = 0;
    var item;
    for (var i=0; i<arr1.length; i++)
    {
        for (var j=i; j<arr1.length; j++)
        {
            if (arr1[i] ==arr1[j])
            m++;
            if (mf<m)
            {
                mf = m;
                item = arr1[i];
            }
        }
        m = 0;
    }
    return item;
}

console.log("Most frequent item: ", mostFrequentItem(arr1));