# 심플 To-Do List (Simple To-Do List)

## 프로젝트 개요

이 프로젝트는 사용자가 할 일을 추가, 완료, 삭제할 수 있는 가장 기본적인 웹 기반 To-Do List 애플리케이션입니다. 모든 데이터는 웹 브라우저의 로컬 스토리지에 저장되어 브라우저를 닫았다가 다시 열어도 데이터가 유지됩니다. 복잡한 설정 없이 바로 실행하여 사용할 수 있도록 설계되었습니다.

## 목적

* 개인적인 할 일을 효율적으로 관리하여 생산성을 높이는 데 도움을 줍니다.
* 웹 개발의 가장 기본적인 요소(HTML, CSS, JavaScript)만 사용하여 웹 페이지를 구축하는 경험을 제공합니다.
* 별도의 서버나 데이터베이스 없이 클라이언트 측 로컬 저장소를 활용하는 방법을 보여줍니다.

## 상세 기능

1.  **할 일 추가:** 입력 필드에 할 일 내용을 입력하고 '추가' 버튼을 누르거나 `Enter` 키를 누르면 목록에 새로운 할 일이 추가됩니다.
2.  **할 일 완료/미완료 토글:** 각 할 일 항목 옆의 체크박스를 클릭하면 완료 상태로 변경되고, 텍스트에 취소선이 적용됩니다. 다시 클릭하면 미완료 상태로 돌아옵니다.
3.  **할 일 삭제:** 각 할 일 항목 옆의 '삭제' 버튼을 클릭하면 목록에서 해당 할 일이 영구적으로 제거됩니다.
4.  **로컬 스토리지 저장:** 모든 할 일 데이터(내용, 완료 여부)는 웹 브라우저의 로컬 스토리지에 자동 저장됩니다. 따라서 웹 페이지를 닫았다가 다시 열어도 이전에 기록했던 할 일들이 그대로 유지됩니다.
5.  **완료된 할 일 지우기:** '완료된 할 일 지우기' 버튼을 클릭하면 완료 상태로 체크된 모든 할 일들이 목록에서 삭제됩니다.
6.  **모든 할 일 지우기:** '모든 할 일 지우기' 버튼을 클릭하면 목록에 있는 모든 할 일들이 삭제됩니다. (삭제 전 확인창 표시)

## 입출력 형태

* **입력:**
    * **텍스트 입력:** 할 일 내용을 입력 필드에 직접 입력합니다.
    * **버튼 클릭:** '추가', '삭제', '완료된 할 일 지우기', '모든 할 일 지우기' 버튼을 클릭하여 기능을 실행합니다.
    * **체크박스 클릭:** 각 할 일 항목 옆의 체크박스를 클릭하여 완료/미완료 상태를 변경합니다.
* **출력:**
    * **할 일 목록:** 입력된 할 일들이 목록 형태로 웹 페이지에 표시됩니다.
    * **완료 상태 시각화:** 완료된 할 일은 텍스트에 취소선이 적용되어 시각적으로 구분됩니다.

## 개발 환경 및 기술 스택

* **HTML5:** 웹 페이지의 구조와 콘텐츠를 담당합니다.
* **CSS3:** 웹 페이지의 디자인과 스타일을 담당합니다.
* **바닐라 JavaScript:** 모든 애플리케이션 로직 (DOM 조작, 이벤트 처리, 로컬 스토리지 관리)을 구현합니다.
* **웹 브라우저:** Chrome, Firefox, Safari, Edge 등 최신 웹 브라우저 (실행 환경).

## 실행 방법

이 프로젝트는 웹 서버나 복잡한 환경 설정 없이도 웹 브라우저만 있으면 바로 실행할 수 있습니다.

### 1. 사전 준비물

* **웹 브라우저:** Chrome, Firefox, Safari, Edge 등 최신 버전의 웹 브라우저가 설치되어 있어야 합니다.

### 2. 설치 과정

1.  **GitHub 리포지토리 클론 (Clone) 또는 다운로드:**
    * Git이 설치되어 있다면, 터미널에서 다음 명령어를 실행하여 리포지토리를 클론합니다:
        ```bash
        git clone [https://github.com/당신의_깃허브_아이디/simple-todo-list.git](https://github.com/당신의_깃허브_아이디/simple-todo-list.git)
        ```
        (위 URL에서 `당신의_깃허브_아이디`는 실제 깃허브 아이디로 변경해야 합니다.)
    * Git이 없다면, 깃허브 리포지토리 페이지에서 'Code' 버튼을 클릭한 뒤 'Download ZIP'을 선택하여 압축 파일을 다운로드하고 압축을 해제합니다.

2.  **프로젝트 폴더 이동:**
    * 클론 또는 압축 해제된 `simple-todo-list` 폴더로 이동합니다.

### 3. 실행 명령

* **로컬에서 실행:**
    1.  `simple-todo-list` 폴더 내의 `index.html` 파일을 찾습니다.
    2.  이 파일을 웹 브라우저 (예: Chrome)로 드래그 앤 드롭하거나, 파일을 더블 클릭하여 엽니다.
    3.  웹 브라우저에서 To-Do List 애플리케이션이 바로 실행되는 것을 확인할 수 있습니다.

## 프로젝트 구조
simple-todo-list/
├── index.html   (메인 웹 페이지 구조)
├── style.css    (CSS 스타일 시트)
├── script.js    (JavaScript 기능 구현)
└── README.md    (프로젝트 설명 문서)