
const user = {
  id:'asd@naver.com',
  pw:'spdlqj123!@'
}



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
// let userEmailValue = '';


userEmailInput.addEventListener('input', () => {

  // const userEmailValue = userEmailInput.value; // 현재 입력값을 변수로 저장
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


const userPwInput = document.getElementById('userPassword');;


userPwInput.addEventListener('input', () => {

  // const userPwValue = userPwInput.value; // 현재 입력값을 변수로 저장
  const isValid = pwReg(userPwInput.value); // 입력값 유효성 검사

  if(!isValid){
    userPwInput.classList.add('is--invalid'); // false; 'is--invalid' 추가

  } else {
    userPwInput.classList.remove('is--invalid'); // true; 'is--invalid' 제거

  }
});


// 3. 상태 변수 관리
// 로그인 버튼을 클릭시 user.id의 값과 input의 값을 비교
// value === user.id
// 로그인 버튼을 클릭시 user.pw의 값과 input의 값을 비교
// value === user.pw
// 4. 로그인 버튼을 클릭시 조건처리
// 두 값이 일치 한다면 다음 페이지(welcome.html)로 이동


const btnLogin = document.querySelector('.btn-login') ;

btnLogin.addEventListener('click', (e) => {
    e.preventDefault(); // 폼 제출 동작 방지

    if (userEmailInput.value === user.id && userPwInput.value === user.pw){
      window.location.href = "welcome.html";
    } else {
      alert("아이디 또는 비밀번호가 일치하지 않습니다.");
    }

});
// handleBtnClick 분리









