function getRandomInteger()
{
    return Math.floor(Math.random()*(999-100+1)+100);
}


function findSecondLargestElem(arr)
{
    let first = -1 , second = -1;

    for(let i = 0; i <= arr.length-1; i++)
    {
        if(arr[i] > first){
            second = first;
            first = arr[i];
        }
        else if( arr[i] > second && arr[i] != first)
        {
            second = arr[i];
        }
    }
    console.log("Second Largest Number is: "+second);
}

function findSecondSmallgestElem(arr)
{ 
    let min=Number.MAX_VALUE;
    let second_min=Number.MAX_VALUE;
    
    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i] < min)
        {
            second_min = min;
            min = arr[i];
        }

        if(arr[i] < second_min && arr[i] != min)
        {
            second_min = arr[i];
        }

    }
    console.log("The second smallest element is " + second_min);
}

//let randomNumber=Math.floor(Math.random()*(999-100+1)+100);
let arr= new Array();
arr.length=10;
for(let i=0;i<=arr.length-1;i++)
{
    arr[i]=getRandomInteger();
}
console.log(arr)
findSecondLargestElem(arr);
findSecondSmallgestElem(arr);


//console.log(arr);