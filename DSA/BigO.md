# Big O

## what is Big O?

Big O is a way to see how efficient an algorithm is. It looks at how long it takes to run (time complexity) and how much memory it uses (space complexity) as the size of the input increases
<br/>
When discussing Big O, we assume the algorithm is evaluated in the worst-case scenario. For example, if we have a method to find a specific number in an array, Big O assumes that the number is located at the last position in the array. This means the algorithm has to check every element in the array. As the size of the array increases, the time and memory needed to handle this worst-case situation also increase

## Different Time Complexities

### O(1)

When we talk about O(1), we're referring to a situation where the time it takes to complete a task remains constant, no matter how big the input is. For example, if you want to access a specific item in an array by its index, it takes the same amount of time to get that item, whether the array has 10 elements or 1,000 elements. This means that the time needed doesn’t change with the size of the array. it’s always just one step

```javascript
function getFirstItem(arr) {
  return arr[0];
}
```

<br/>

### O(n)

When we talk about O(n), we’re looking at a situation where the time it takes to complete a task grows linearly with the size of the input. For example, if you have to search for a specific number in an array, you might need to check each element one by one. If the array has 10 elements, it might take you 10 steps to find the number. But if the array has 100 elements, it could take you up to 100 steps. So, as the size of the array increases, the time needed to complete the task increases directly with it. O(n) shows that some operations require more time as you add more data, making it important to consider when working with larger datasets

```javascript
function logItems(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}
```

<br/>

### O(n^2)

When we talk about O(n²), we’re dealing with a situation where the time it takes to complete a task grows quadratically as the size of the input increases. a good example is a nested loop

```javascript
function logNested(n) {
    for(let i = 0 ; i < n ; i++) {
        for(let j = 0 ; j < n ; j++) {
            console.log(i , j)
        }
    }
}
```

in this example the time complexity is n * n (or n^2) for example if we give 10 as input, it runes 100 operations. as the input size increases the algorithm gets less and less efficient
