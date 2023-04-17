function hello()
{
    alert("Hello World!");
    let outer = "hello from outer";
    console.log("Hello world");

    function innerHello()
    {
        console.log(outer);
    }
    innerHello();
}
const sumArray = function()
{
    var sum = 0; 
    for (let num of a)
    {
        sum += num;
    }
    return sum;
}
const maxArray = function()
{
    var max = 0; 
    for (let num of a)
    {
        if (a[num] > max)
        {
            max = a[num];
        }
    }
    return max;
}

const minArray = function()
{
    var min = a[0]; 
    for (let num of a)
    {
        if (a[num] < min)
        {
            min = a[num];
        }
    }
    return min;
}


var a = [1, 2, 3, 4, 5];
const funWithArrays = function()
{
    console.log(sumArray());
    console.log(maxArray());
    console.log(minArray());
}

const plainOldFunction = function(default_val ="hello")
{
    console.log(default_val);
}
const callback = function()
{
    console.log("this is the callback function");
}
const firstFunction = function (aFunction)
{
    aFunction();
}
const soManyFunctions = function()
{
    plainOldFunction();
    plainOldFunction("My unique paramater");
    firstFunction(callback);
    firstFunction(function()
    {
        console.log("function written in the parameter")
    });
    const pet_obj = {
        name: "Harper",
        age: 10,
        pet_type: "dog",
        cute: true,
        puppies: ['pup1', 'pup2']
    }
    console.log(pet_obj);
    console.log(pet_obj.name);
    console.log(pet_obj['age']);
    
}
//hello();