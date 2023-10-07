1. Write the correct answer from the following options and give an explanation (2-5 lines).
    let greeting;
    greetign = {};
    console.log(greetign);
    A: {}
    B: ReferenceError: greetign is not defined
    C: undefined
Answer:  the correct ans will be B. because the variable declared is "greeting", but in the console, the variable that is used is "greetign" which is no still defined. So the answer is Bl.

2. Write the correct answer from the following options and give an explanation (2-5 lines).
        function sum(a, b) {
        return a + b;
        }
        sum(1, "2");
        A: NaN
        B: TypeError
        C: "12"
        D: 3
Answer: the correct answer is C. In JavaScript, when we use the + operator to add two values, and one of them is a string, JavaScript will try to convert the other value to a string and concatenate them together. In this case, the number 1 is converted to a string and then concatenated with the string "2", resulting in the string "12". So, the sum(1, "2") call will return the string "12".

3. Write the correct answer from the following options and give an explanation (2-5 lines).
    const food = ["🍕", "🍫", "🥑", "🍔"];
    const info = { favoriteFood: food[0] };

    info.favoriteFood = "🍝";

    console.log(food);
    A: ['🍕', '🍫', '🥑', '🍔']
    B: ['🍝', '🍫', '🥑', '🍔']
    C: ['🍝', '🍕', '🍫', '🥑', '🍔']
    D: ReferenceErro
Answer:the correct answer in A. in this code, info.favoriteFood initially references the first element of the food array, which is "🍕". However, when you assign "🍝" to info.favoriteFood, it changes the value of info.favoriteFood to "🍝", but it doesn't affect the food array. So, when you log food, it remains unchanged, and the output is ['🍕', '🍫', '🥑', '🍔'].

4. Write the correct answer from the following options and give an explanation (2-5 lines).
    function sayHi(name) {
    return `Hi there, ${name}`;
    }
    console.log(sayHi());
    A: Hi there,
    B: Hi there, undefined
    C: Hi there, null
    D: ReferenceError
Answer: The correct answer is B: Hi there, undefined.In the provided function `sayHi`, there is a parameter `name`, but when you call the function with `sayHi()`, you don't provide any argument. As a result, `name` inside the function becomes `undefined`. The function then returns a string that includes the value of `name`, which is `undefined`, so the output will be "Hi there, undefined".

5. Write the correct answer from the following options and give an explanation (2-5 lines).
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
A: 1
B: 2
C: 3
D: 4
Answer: The correct answer is C. In this code, the `forEach` method is used to iterate over the elements of the `nums` array. Inside the callback function, there's an `if` statement that checks if the current `num` is truthy (in JavaScript, any number other than 0 is considered truthy). When `num` is 1, 2, and 3, it evaluates to true, and `count` is incremented for each of these values. As a result, `count` becomes 3, and that's what will be logged to the console.
