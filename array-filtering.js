numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function even_numbers(number){
	return number%2 === 0
}
filtered = numbers.filter(even_numbers)
console.log(filtered)
