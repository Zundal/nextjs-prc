This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/auth.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## 디렉토리 구조

Next.js 프로젝트의 디렉토리 구조를 설계할 때는 애플리케이션의 크기, 복잡성, 개발 팀의 선호도 및 작업 흐름 등 여러 요소를 고려해야 합니다. 여기에서는 기본적인 구조와 몇 가지 일반적인 패턴을 소개하겠습니다. 이를 바탕으로 프로젝트에 맞게 조정하면 됩니다.

### 기본 디렉토리 구조
Next.js의 기본 디렉토리 구조는 다음과 같습니다:

- `/pages`: 페이지 컴포넌트가 위치합니다. 파일명과 경로가 URL 경로가 됩니다. `index.js`는 루트 경로(`/`)에 해당합니다. `getStaticProps`, `getStaticPaths`, `getServerSideProps` 같은 데이터 페칭 함수를 이 디렉토리의 파일에서만 사용할 수 있습니다.
- `/public`: 정적 파일(이미지, 폰트 등)을 저장합니다. 이 디렉토리 내의 파일은 루트 URL(`/`)에서 직접 접근할 수 있습니다.
- `/components`: 재사용 가능한 컴포넌트를 저장합니다.
- `/styles`: CSS 파일이나 Sass 파일 등 스타일 관련 파일을 저장합니다.
- `/lib` 또는 `/utils`: 유틸리티 함수나 라이브러리 설정 파일을 저장합니다.
- `/api`: API 라우트를 정의합니다(`/pages/api` 내부에 정의하지만, 외부 API와의 인터랙션을 관리하는 함수나 설정을 별도로 관리할 수 있습니다).

### 확장된 디렉토리 구조 예시
대규모 애플리케이션 또는 특정 구조를 선호하는 경우, 다음과 같이 디렉토리 구조를 확장할 수 있습니다:

- `/src`
    - `/pages`: 페이지 컴포넌트.
    - `/components`: UI 컴포넌트.
        - `/layout`: 레이아웃 컴포넌트.
        - `/common`: 일반적인 재사용 컴포넌트.
    - `/styles`: 스타일 파일.
    - `/lib`: 공통 라이브러리와 헬퍼 함수.
    - `/hooks`: 커스텀 React 훅.
    - `/context`: React 컨텍스트 및 프로바이더.
    - `/services`: 외부 API와의 인터렉션을 관리.
    - `/models`: 타입스크립트 인터페이스나 클래스 모델.
    - `/public`: 정적 파일.

이 구조는 프로젝트가 성장함에 따라 필요에 따라 조정하고 추가할 수 있습니다. 몇 가지 원칙을 기억하세요:

- **명확성**: 디렉토리와 파일 이름은 그들이 무엇을 하는지 분명히 나타내야 합니다.
- **재사용성**: 재사용 가능한 컴포넌트는 `/components` 디렉토리에 모아서 관리합니다.
- **유지보수성**: 유사한 기능을 하는 파일들은 같은 디렉토리에 배치하여 관리와 유지보수를 용이하게 합니다.

프로젝트의 요구사항과 팀의 작업 방식에 맞춰 디렉토리 구조를 설계하면, 개발 과정이 더 원활하고 효율적일 것입니다.


https://developers.google.com/identity/protocols/oauth2/web-server?hl=ko#enable-apis