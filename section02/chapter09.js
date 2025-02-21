// 5가지 배열 변형 메서드

// 1. filter => 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환
let arr1 = [
  {name: "유승인", hobby: "축구"},
  {name: "김효빈", hobby: "축구"},
  {name: "홍길동", hobby: "테니스"},
]

const soccerPeople = arr1.filter((item) => {
  if (item.hobby === "축구") 
    return true;
});

// 2. map => 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환
let arr2 = [1,2,3];
const mapResult1 = arr2.map((item,idx,arr) => {
  return item * 2
}); 

let names = arr1.map((item) => item.name);

// 3. sort => 배열을 "사전순"으로 정렬하는 메서드 (만약 숫자로 되어있으면 정상적으로 동작 X)
let arr3 = ["b", "a", "c"];
arr3.sort((a,b) => {
  if(a > b) {
    // b가 a 앞에 오게
    return 1;
  } else if (a < b) {
    // a가 b의 앞에 오게
    return -1;
  } else {
    // 두 값의 자리를 바꾸지 말기
    return 0;
  }
});

// 4. toSorted => 정렬된 새로운 배열을 반환하는 메서드 
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();

// 5. join => 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드
let arr6 = ["hi", "I'm", "seungin"];
const joined = arr6.join(" ");