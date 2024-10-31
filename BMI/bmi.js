/* 
BMI (body mass index) is a measure for adults to check what category their height and weight puts them in - underweight, healthy, or overweight. 

The calculator will give you an idea of how your weight compares to common values. Body Mass Index (BMI) is calculated as your weight divided by the square of your height or BMI = weight/height2.
*/

const weight = Number(prompt("Input your weight in kilogram"));
const height = Number(prompt("input your height in meters"));
const bodyMassIndex = weight / (height ** 2);
alert("Your BMI is " + bodyMassIndex);