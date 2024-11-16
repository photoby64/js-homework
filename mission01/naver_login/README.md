#  개요

- 과제: 네이버 로그인 페이지 구현
- 날짜: 2024년 11월 16일



# 요구사항

1. email 정규표현식을 사용한 조건처리 
``` javascript
//   - false면 해당 input에 is--invalid 추가
node.classList.remove('is--invalid')
//   - true면 해당 input에 is--invalid 제거
node.classList.add('is--invalid')
```

2. pw 정규표현식을 사용한 validation
``` javascript
//   - false면 해당 input에 is--invalid 추가
node.classList.remove('is--invalid')
//  - true면 해당 input에 is--invalid 제거
node.classList.add('is--invalid')
```

3. 로그인 버튼을 클릭시 user.id의 값과 input의 값을 비교
``` javascript
value === user.id
```

4. 로그인 버튼을 클릭시 user.pw의 값과 input의 값을 비교
``` javascript
value === user.pw
```


5. 두 값이 일치 한다면 다음 페이지(welcome.html)로 이동
``` javascript
window.location.href = 'welcome.html'
```

---
# 코드 설명
##  변수 선언
``` javascript
const userEmailInput = document.getElementById('userEmail');
const userPwInput = document.getElementById('userPassword');;
const btnLogin = document.querySelector('.btn-login') ;
```
- 코드의 가독성과 재사용성을 고려하여 DOM 요소를 변수로 선언했습니다.

## 입력값 유효성 검사 및 이벤트
``` javascript
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
```
- 결과에 따라 클래스를 추가하거나 제거하는 이벤트입니다. 

  사용자가 입력할 때마다 input 이벤트를 감지하고, 정규표현식을 활용해 입력값의 유효성을 실시간으로 확인한 뒤, 결과에 따라 `is--invalid` 클래스를 추가하거나 제거합니다.

## 이벤트 핸들링과 등록
### javascript:
``` javascript
function handleBtnClick(e) {

  e.preventDefault(); // 폼 제출 동작 방지

    if (userEmailInput.value === user.id && userPwInput.value === user.pw){
      window.location.href = "welcome.html";
    } else {
      alert("아이디 또는 비밀번호가 일치하지 않습니다.");
    }
  
  }


btnLogin.addEventListener('click', handleBtnClick); // 이벤트 등록
```
### html:
```html
 <button type="submit" class="btn-login">로그인</button>
```
 
- 로그인 버튼 클릭 시 호출될 handleBtnClick 함수를 addEventListener로 분리하여 이벤트를 등록했습니다. 

  이는 디버깅 시 각 변수를 독립적으로 확인할 수 있어 문제를 추적하기 쉽고, 재사용성을 높이는 코드 구조를 유지합니다. 

- 또한, preventDefault()를 사용하였습니다. 

  `<button type="submit">` 클릭 시 발생하는 브라우저의 기본 폼 제출 동작을 방지하고, 입력값 검증 로직을 처리하도록 설계하였습니다. 이렇게 하면 조건 검증 후 동작(페이지 이동 또는 경고 메시지 표시)을 명확히 제어할 수 있습니다.

# 과제를 마치며..
- 이번 과제는 '내 수준에서 완성할 수 있는 코드'를 목표로 작성했습니다.

  마음 같아서는 email과 password를 input 이벤트로 함께 핸들링하고 closure도 쓰고 싶었는데 기초와 개념이 부족해 코드로 표현하기가 어려웠습니다. (과제를 하면서 기초가 얼마나 중요한지 뼈저리게 느꼈습니다ㅠㅠ)
  email과 password를 함께 핸들링하는 방법 등 작성하지 못한 부분은 일요일에 조금 더 고민해 보겠습니다.

  여태까지 제 첫 자바스크립트 코드와 README를 읽어주셔서 감사합니다. 🙇🏻‍♀️"