- git submodule update --remote
- ./gradlew build
- cd build/libs
- java -jar demo-0.0.1-SNAPSHOT.jar
- java -jar -Dspring.profiles.active=dev demo-0.0.1-SNAPSHOT.jar

# 📌 To Do

- [ ] modal component 만들기
- [ ] md 에디터 변경
- [ ] oauth
  - http://yoonbumtae.com/?p=3000
  - https://github.com/callicoder/spring-boot-react-oauth2-social-login-demo
  - https://rrecoder.tistory.com/148
  - http://devhyun.com/blog/post/15

# ✅ Done

- [x] react router dom v6 :id prevent refresh
- [x] http-proxy-middleware 작동하는지 확인
- [x] pr 방식으로 레포지토리 업데이트
