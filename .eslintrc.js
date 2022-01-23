module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "airbnb/hooks", "prettier/@typescript-eslint", "prettier/react"],
  rules: {
    "react/jsx-filename-extension": [1, { extensions: ["js", "jsx"] }],
    // 확장자로 js와 jsx 둘다 허용하도록 수정
    "arrow-parens": ["warn", "as-needed"],
    // 화살표 함수의 파라미터가 하나일때 괄호 생략
    "no-unused-vars": ["warn"],
    // 사용하지 않는 변수가 있을때 빌드에러가 나던 규칙 해제
    "no-console": ["off"],
    // 콘솔을 쓰면 에러가 나던 규칙 해제
    "import/prefer-default-export": ["off"],
    // export const 문을 쓸때 에러를 내는 규칙 해제
    "react-hooks/exhaustive-deps": ["off"],
    // hooks의 의존성배열이 충분하지 않을때 강제로 의존성을 추가하는 규칙을 완화
    "react/jsx-props-no-spreading": ["warn"],
    // props spreading을 허용하지 않는 규칙 해제
  },
  settings: {
    "import/resolver": {
      node: {
        moduleDirectory: ["node_modules", "."],
      },
    },
  },
};
