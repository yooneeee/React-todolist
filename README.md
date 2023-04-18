# [React] My Todo List

항해99 주특기 입문 과제: 간단한 TODOLIST를 생성해주는 웹

### 구현 사이트(배포) : https://react-todolist-liart.vercel.app/

### 기술스택
React, Javascript, HTML, CSS, Git, Github

### Requirements

1. 제목과 내용을 입력하고, [추가하기] 버튼을 클릭하면 Working에 새로운 Todo가 추가되고 제목 input과 내용 input은 다시 빈 값으로 바뀌도록 구성해주세요.
2. Todo의 isDone 상태가 true이면, 상태 버튼의 라벨을 취소, isDone이 false 이면 라벨을 완료 로 조건부 렌더링 해주세요. 
3. Todo의 상태가 Working 이면 위쪽에 위치하고, Done이면 아래쪽에 위치하도록 구현합니다.
4. Layout의 최대 넓이는 1200px, 최소 넓이는 800px로 제한하고, 전체 화면의 가운데로 정렬해주세요.
5. 컴포넌트 구조는 자유롭게 구현해보세요.
    
### 구현 화면
![React_App_-_Chrome_2023-04-18_09-40-56_AdobeExpress](https://user-images.githubusercontent.com/128367773/232649745-bae7c159-c91a-4721-9103-712b939efe9b.gif)


### 컴포넌트 구조
![image](https://user-images.githubusercontent.com/128367773/232642145-6d4df64a-b603-4b2c-9677-5e8fe41f6ae3.png)
① Header: 페이지의 헤더부분으로 고정된 값

② Input: 새로운 TodoList 추가하는 부분, 추가 데이터만 전달

③ TodoList: TodoList가 보여지는 부분

### Todo 추가

제목과 내용을 입력한 후에, 추가하기 버튼을 클릭하면 Working에 새로운 TodoList가 추가되고, 제목과 내용 input은 다시 빈 값으로 초기화

### Todo 삭제

TodoList 추가시 지정했던 고유 id값(uuid사용)을 비교하여 삭제 기능 구현

### Todo 상태변경

완료, 취소 버튼에 각 TodoList의 고유 id값을 인수로 넘겨주어 id값을 비교하여, 해당 TodoList의 isDone값을 이용하여 완료 버튼 클릭 시, Done칸으로 이동하고, 취소 버튼 클릭 시, Working칸으로 이동하도록 구현
