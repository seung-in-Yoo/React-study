// 1. Spread 연산자  -> 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1,2,3];
let arr2 = [4,5,6];

let obj1 = {
  a: 1,
  b: 2,
}

let obj2 = {
  ...obj1,
  c: 3,
  d: 4,
}

function funA(p1, p2, p3) {
  console.log(p1, p2, p3)
}

funA(...arr1);

// 2. Rest 매개변수 -> 나머지 매개변수

function funcB(one, two, ...rest) { // rest 매개변수 뒤에 추가적으로 매개변수를 선언할 수 없다
  console.log(rest);
}

funcB(...arr1);