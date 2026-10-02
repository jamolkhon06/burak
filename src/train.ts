// Task-Q
// Shunday function yozing, u 2 ta parametrga ega bo'lib, birinchisi object, ikkinchisi string bo'lsin. Agar qabul qilinayotgan ikkinchi string, objectning biror bir propertysiga mos kelsa, 'true', aks holda mos kelmasa 'false' qaytarsin. MASALAN: hasProperty({ name: "BMW", model: "M3" }, "model"); return true; Ushbu misolda, 'model' string, objectning propertysiga mos kelganligi uchun 'true' natijani qaytarmoqda
function hasProperty(obj: any, str: string): boolean {
    for(let key in obj) {
        if(key == str) {
            return true
        }
    }
    return false
}
const result = hasProperty({ name: "BMW", model: "M3" }, "model");
console.log(result)

// Task-P
// Parametr sifatida yagona object qabul qiladigan function yozing. Qabul qilingan objectni nested array sifatida convert qilib qaytarsin MASALAN: objectToArray( {a: 10, b: 20}) return [['a', 10], ['b', 20]]
/* function objectToArray(obj: any) {
    let newObj: any[] = [];
    for(let key in obj) {
        newObj.push([key, obj[key]]);
    }
    return newObj
}
const result = objectToArray({a: 10, b: 20});
console.log(result);
 */

// Task-O
// Shunday function yozing va u har xil qiymatlardan iborat array qabul qilsin. Va array ichidagi sonlar yig'indisini hisoblab chiqgan javobni qaytarsin. MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]); return 45 Yuqoridagi misolda array tarkibida faqatgina ikkita yagona son mavjud bular 10 hamda 35 Qolganlari nested bo'lib yoki type'lari number emas.

/* function calculateSumOfNumbers(arr: any[]): number {
    let result: number = 0;
    arr.forEach(item => {
        if(typeof(item) === 'number') {
            result += item
        }
    })
    return result
}
const result = calculateSumOfNumbers([10, "10", {son: 10}, true, 35]);
console.log(result) */

/* Project Standarts
    ~ Logging standarts
    ~ Naming standarts
        function, method, variable => CamelCase
        class => PascalCase
        folder, file => KebabCase
        css classes => SnakeCase
    ~ Error handling
    ~ 
*/

/* 
    Traditional API
    Rest API
    GraphQL API
    ...
*/

/* 
Traditional FD => BSSR(admin) => EJS
Modern FD => SPA(user) => REACT
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