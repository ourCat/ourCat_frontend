# 🥳 Welcome to the ourCat_frontend wiki!

## 파일 구조

```
┌── .next/                      - next install
├── .storybook/                 - storybook setting
├── docs/                       - storybook files
├── node_modules/
├── public/                     - fonts, images
├── src/
│   ├── actions/
│   ├── app/                    - toolkit store
│   ├── common/
│   │    └── interfaces/
│   │    └── Mixins/
│   │    └── paths/             - pageUrl, imgUrl
│   │    └── SampleData/
│   │    └── type/              - font type
│   │    └── index.ts
│   │
│   ├── components/
│   │    └── atoms/
│   │    └── molecules/
│   │    └── organisms/
│   │    └── index.ts
│   │
│   ├── layouts/               * template로 이동하고 삭제될 예정
│   │    └── Main
│   │    └── index.ts
│   │
│   ├── pages/                 - file name에 따라 route
│   │   └── _app.tsx
│   │   └── _document.tsx
│   │   └── alarm.tsx
│   │   └── index.tsx
│   │   └── insert.tsx
│   │   └── me.tsx
│   │   └── search.tsx
│   │
│   ├── slicers/               - redux-toolkit 구현
│   │   └── index.ts
│   │   └── user.ts
│   │
│   ├── styles/
│   │   └── globalStyle.ts
│   │   └── Theme.ts
│   │
│   └── template/              - page에 적용될 template
│       └── home/
│       └── index.ts
│
├── .babelrc
├── .eslintrc
├── .gitignore
├── .prettierrc
├── next-env.d.ts
├── package.json
├── README.md
├── tsconfig.json
└── yarn.lock
```
