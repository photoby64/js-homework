
const user = {
  id:'asd@naver.com',
  pw:'spdlqj123!@'
}

/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/


function emailReg(text){
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase())
}




// 1. email 정규표현식을 사용한 validation

// - false면 해당 input에 is--invalid 추가
// node.classList.remove('is--invalid')

// - true면 해당 input에 is--invalid 제거
// node.classList.add('is--invalid')


const userEmailInput = document.getElementById('userEmail');


userEmailInput.addEventListener('input', () => {

  const isValid = emailReg(userEmailInput.value); // 입력값 유효성 검사

  if(!isValid){
    userEmailInput.classList.add('is--invalid'); // false; 'is--invalid' 추가

  } else {
    userEmailInput.classList.remove('is--invalid'); // true; 'is--invalid' 제거

  }
});




// 2. pw 정규표현식을 사용한 validation

// - false면 해당 input에 is--invalid 추가
// node.classList.remove('is--invalid')

// - true면 해당 input에 is--invalid 제거
// node.classList.add('is--invalid')


function pwReg(text){
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}


const userPasswordInput = document.getElementById('userPassword');;


userPasswordInput.addEventListener('input', () => {

  const isValid = pwReg(userPasswordInput.value); // 입력값 유효성 검사

  if(!isValid){
    userPasswordInput.classList.add('is--invalid'); // false; 'is--invalid' 추가

  } else {
    userPasswordInput.classList.remove('is--invalid'); // true; 'is--invalid' 제거

  }
});


// 3. 상태 변수 관리
// 로그인 버튼을 클릭시 user.id의 값과 input의 값을 비교
// value === user.id









// 로그인 버튼 클릭시 조건 처리

// document.querySelector('.btn-login').addEventListener('click', () => {
//   window.location.href = 'welcome.html';
// })