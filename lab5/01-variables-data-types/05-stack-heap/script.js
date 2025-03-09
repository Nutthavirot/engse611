// Stack และ Heap ใน JavaScript

// Stack (Primitive Types จะถูกเก็บใน Stack Memory)
let a = 10;
let b = a; // ค่าของ 'a' จะถูกคัดลอกไปที่ 'b'
b = 20;
console.log(a); // 10 (ค่าของ 'a' ไม่เปลี่ยนเพราะเป็น Primitive)
console.log(b); // 20

// Heap (Reference Types จะถูกเก็บใน Heap Memory)
let obj1 = { name: "John" };
let obj2 = obj1; // 'obj2' อ้างอิงไปยัง object เดียวกับ 'obj1'
obj2.name = "Doe";
console.log(obj1.name); // "Doe" (ค่าถูกเปลี่ยนเพราะ obj1 และ obj2 อ้างถึงที่อยู่เดียวกันใน Heap)
console.log(obj2.name); // "Doe"

// ฟังก์ชันทดสอบ Stack กับ Heap
function modifyPrimitive(x) {
    x = 50; // เปลี่ยนค่าใน Scope ของฟังก์ชัน
}
let num = 100;
modifyPrimitive(num);
console.log(num); // 100 (ค่าดั้งเดิมไม่เปลี่ยนเพราะถูกส่งแบบ Pass-by-Value)

function modifyObject(obj) {
    obj.age = 30;
}
let person = { age: 25 };
modifyObject(person);
console.log(person.age); // 30 (ค่าถูกเปลี่ยนเพราะ Object ถูกส่งแบบ Reference)
