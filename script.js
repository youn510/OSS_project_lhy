document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todoInput');
    const addTodoBtn = document.getElementById('addTodoBtn');
    const todoList = document.getElementById('todoList');
    const clearCompletedBtn = document.getElementById('clearCompletedBtn');
    const clearAllBtn = document.getElementById('clearAllBtn');

    // 로컬 스토리지에서 할 일 불러오기
    let todos = JSON.parse(localStorage.getItem('todos')) || [];

    // 할 일 렌더링 함수
    function renderTodos() {
        todoList.innerHTML = ''; // 기존 목록 초기화
        todos.forEach((todo, index) => {
            const listItem = document.createElement('li');
            listItem.className = todo.completed ? 'completed' : '';

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = todo.completed;
            checkbox.addEventListener('change', () => toggleTodo(index));

            const todoText = document.createElement('span');
            todoText.textContent = todo.text;

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = '삭제';
            deleteBtn.className = 'delete-btn';
            deleteBtn.addEventListener('click', () => deleteTodo(index));

            listItem.appendChild(checkbox);
            listItem.appendChild(todoText);
            listItem.appendChild(deleteBtn);
            todoList.appendChild(listItem);
        });
        saveTodos(); // 변경사항 저장
    }

    // 할 일 추가 함수
    function addTodo() {
        const text = todoInput.value.trim();
        if (text !== '') {
            todos.push({ text: text, completed: false });
            todoInput.value = ''; // 입력 필드 초기화
            renderTodos(); // 목록 다시 그리기
        }
    }

    // 할 일 완료/미완료 토글 함수
    function toggleTodo(index) {
        todos[index].completed = !todos[index].completed;
        renderTodos();
    }

    // 할 일 삭제 함수
    function deleteTodo(index) {
        todos.splice(index, 1); // 해당 인덱스의 항목 제거
        renderTodos();
    }

    // 로컬 스토리지에 할 일 저장
    function saveTodos() {
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    // 완료된 할 일 모두 지우기
    clearCompletedBtn.addEventListener('click', () => {
        todos = todos.filter(todo => !todo.completed);
        renderTodos();
    });

    // 모든 할 일 지우기
    clearAllBtn.addEventListener('click', () => {
        if (confirm('모든 할 일을 정말 지우시겠습니까?')) {
            todos = [];
            renderTodos();
        }
    });

    // 이벤트 리스너
    addTodoBtn.addEventListener('click', addTodo);
    todoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    });

    // 페이지 로드 시 할 일 목록 초기 렌더링
    renderTodos();
});