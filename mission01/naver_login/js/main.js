
const user = {
  id:'asd@naver.com',
  pw:'spdlqj123!@'
}




function emailReg(text){
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase())
}

function pwReg(text){
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}



// 3. DOM 요소 가져오기
const userEmailInput = document.getElementById('userEmail');
const userPwInput = document.getElementById('userPassword');;
const btnLogin = document.querySelector('.btn-login') ;




// 4. 입력 필드 유효성 검사 이벤트
userEmailInput.addEventListener('input', () => {

  const isValid = emailReg(userEmailInput.value); // 입력값 유효성 검사

  if(!isValid){
    userEmailInput.classList.add('is--invalid'); // false; 'is--invalid' 추가

  } else {
    userEmailInput.classList.remove('is--invalid'); // true; 'is--invalid' 제거

  }

})




userPwInput.addEventListener('input', () => {

  const isValid = pwReg(userPwInput.value); // 입력값 유효성 검사

  if(!isValid){
    userPwInput.classList.add('is--invalid'); // false; 'is--invalid' 추가

  } else {
    userPwInput.classList.remove('is--invalid'); // true; 'is--invalid' 제거

  }
})







function handleBtnClick(e) {

  e.preventDefault(); 

    if (userEmailInput.value === user.id && userPwInput.value === user.pw){
      window.location.href = "welcome.html";
    } else {
      alert("아이디 또는 비밀번호가 일치하지 않습니다.");
    }
  
  }


btnLogin.addEventListener('click', handleBtnClick);










