# 1. app
애플리케이션 로직이 초기화되는 곳입니다. 프로바이더, 라우터, 전역 스타일, 전역 타입 선언 등이 여기에서 정의됩니다. 애플리케이션의 진입점 역할을 합니다.

* App과 Shared는 다른 레이어들과 달리 슬라이스를 가지지 않으며, 직접 세그먼트로 구성됩니다.
* Next.js 를 기반으로 한 이 프로젝트에서의 app은 2가지로 src 안의 app은 FSD 아키텍처를 만족하기 위한 분리 정책입니다. (FSD 공식 documentation 추천)

[ **app** > ~~processes~~ > pages > widgets > features > entities > shared ]