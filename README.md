# 프로젝트 이름

프로그라피 사전 과제

<br/>

# 기술 스택

- React 18
- TypeScript
- 상태관리 Recoil
- 스타일링 StyledComponents
- 번들러 Vite
- 기타 라이브러리 (Tanstack Query)

<br/>

# 설치 및 실행 방법

- 설치

```
git clone https://github.com/lj05117/prography-10th-frontend.git
cd prography-10th-frontend
```

- 실행

```
nvm install v20.9.0
nvm use v20.9.0
yarn install
yarn dev
```

# 폴더 구조

```
📦src
 ┣ 📂assets
 ┃ ┣ 📜Logo.png
 ┃ ┗ 📜react.svg
 ┣ 📂components
 ┃ ┣ 📜ContentContainer.tsx
 ┃ ┣ 📜Header.tsx
 ┃ ┣ 📜InputInfo.tsx
 ┃ ┣ 📜PageTitle.tsx
 ┃ ┣ 📜ProgressStage.tsx
 ┃ ┗ 📜RadioButtonComponent.tsx
 ┣ 📂hooks
 ┃ ┗ 📜recruit-funnel.ts
 ┣ 📂pages
 ┃ ┣ 📂recruit-funnel
 ┃ ┃ ┣ 📜ApplicationInfo.tsx
 ┃ ┃ ┣ 📜Complete.tsx
 ┃ ┃ ┣ 📜PersonalInfo.tsx
 ┃ ┃ ┣ 📜PrivacyPolicy.tsx
 ┃ ┃ ┗ 📜RecruitFunnel.tsx
 ┃ ┣ 📜Home.tsx
 ┃ ┗ 📜NotFound.tsx
 ┣ 📂services
 ┃ ┗ 📜recruit-funnel.ts
 ┣ 📂stores
 ┃ ┗ 📜ButtonState.ts
 ┣ 📂styles
 ┃ ┣ 📜button.ts
 ┃ ┣ 📜layout.ts
 ┃ ┣ 📜progress-stage.ts
 ┃ ┗ 📜string.ts
 ┣ 📜App.css
 ┣ 📜App.tsx
 ┣ 📜index.css
 ┣ 📜main.tsx
 ┗ 📜vite-env.d.ts
```
