/* Project Standarts
    ~ Logging standarts
    ~ Naming standarts
        function, method, variable => CamelCase
        class => PascalCase
        folder => KebabCase
        css classes => SnakeCase
    ~ Error handling
    ~ 
*/

// Task-N
// Shunday function yozing, u string qabul qilsin va string palindrom yani togri oqilganda ham, orqasidan oqilganda ham bir hil oqiladigan soz ekanligini aniqlab boolean qiymat qaytarsin. MASALAN: palindromCheck("dad") return true;  palindromCheck("son") return false;
/* function palindromCheck(str: string): boolean {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}
const result = palindromCheck("dad");
console.log(result); */

// Task-M
// Shunday function yozing, u raqamlardan tashkil topgan array qabul qilsin va array ichidagi har bir raqam uchun raqamni ozi va hamda osha raqamni kvadratidan tashkil topgan object hosil qilib, hosil bolgan objectlarni array ichida qaytarsin. MASALAN: getSquareNumbers([1, 2, 3]) return [{number: 1, square: 1}, {number: 2, square: 4}, {number: 3, square: 9}];
/* function getSquareNumbers(arr: number[]) {
    let newArr: string[] = [];

    arr.forEach(num => {
        newArr.push(`{number: ${num}, square: ${num * num}`);
    })

    return newArr
}

const result = getSquareNumbers([1, 2, 3])
console.log(result) */