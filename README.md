1. front 폴더로 이동 후 npm install로 추가 dep 설치
2. post 확인

- localhost:8081/로 `POST`실행
- `프론트`에서 `백`으로 보내는 데이터
  ```
    data:
      {
        test: "123",
        arr: [1,2,3]
      }
  ```
- `백`에서 `프론트`로 보낼 데이터
  ```
  암거나 보내며주면 콘솔창으로 확인가능
  ```

```typescript
function fetchData() {
  axios({
    url: "/",
    method: "post",
    data: {
      test: "123",
      arr: [1, 2, 3],
    },
    baseURL: "http://localhost:8081/",
    withCredentials: true,
  }).then((response) => {
    console.log(response);
  });
}
```
