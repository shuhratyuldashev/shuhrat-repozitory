let puples = [
    {name: 'Shuhrat', age: 15, live: 'uzb'},
    {name: 'Stas', age: 13, live: 'rus'},
    {name: 'Abdulaziz', age: 13, Johnlive: 'doma'},
    {name: 'Amirbek', age: 12, live: 'uzb'},
    {name: 'Abbos Hamidov', age: 22, live: 'uzb'},
    {name: 'Umid', age: 13, live: 'uzb'},
    {name: 'Temur', age: 15, live: 'doma'},

]

const filterAge = puples.filter(pupil1 => pupil1.age >= '15')
console.log('puples >=15')
console.log(filterAge)