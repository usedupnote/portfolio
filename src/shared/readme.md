# 6. shared
이 레이어에는 특정 비즈니스 로직에 종속되지 않은 재사용 가능한 컴포넌트와 유틸리티가 포함되어 있습니다. 여기에는 UI 키트, axios 설정, 애플리케이션 설정, 비즈니스 로직에 묶이지 않은 헬퍼 등이 포함됩니다.

* App과 Shared는 다른 레이어들과 달리 슬라이스를 가지지 않으며, 직접 세그먼트로 구성됩니다.

[ app > ~~processes~~ > pages > widgets > features > entities > **shared** ]