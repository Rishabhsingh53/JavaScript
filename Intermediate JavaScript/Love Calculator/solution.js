prompt("Enter the name of the boy")
prompt("Enter the name of the girl")

n = Math.random()
if (n > 70) {
    alert(`${person1} loves ${person2} and their love score is : ${Math.floor(n*100)+1}% `)
}
else {
    alert(`${person1} loves ${person2} and their love score is : ${Math.floor(n*100)+1}%`)
}