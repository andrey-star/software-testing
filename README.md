# software-testing

[![CI](https://github.com/andrey-star/software-testing/actions/workflows/main.yml/badge.svg)](https://github.com/andrey-star/software-testing/actions/workflows/main.yml)

[Sticker Generator](https://sticker-gen.herokuapp.com/)

___

## hw1 - frontend

### Main

* [x] Unit
    * [StickerService](https://github.com/andrey-star/software-testing/blob/main/client/src/app/services/sticker.service.spec.ts)
* [x] Component
    * [StickerPacksComponent](https://github.com/andrey-star/software-testing/blob/main/client/src/app/components/sticker-packs/sticker-packs.component.spec.ts)
    * [StickerPackPreviewComponent](https://github.com/andrey-star/software-testing/blob/main/client/src/app/components/sticker-pack-preview/sticker-pack-preview.component.spec.ts)
* [x] e2e
    * [Cypress](https://github.com/andrey-star/software-testing/blob/main/client/cypress/integration/spec.ts)
    * [Playwright](https://github.com/andrey-star/software-testing/blob/main/client/playwright/spec.ts)

### Advanced

* [x] Auth
    * [AuthService](https://github.com/andrey-star/software-testing/blob/main/client/src/app/services/auth.service.ts)
    * [LoginComponent](https://github.com/andrey-star/software-testing/blob/main/client/src/app/components/login/login.component.ts)
* [x] Tests
    * [Cypress](https://github.com/andrey-star/software-testing/blob/main/client/cypress/integration/spec.ts)
* [x] Suites

### Bonus

* [x] Cypress vs Playwright
    * [Cypress](https://github.com/andrey-star/software-testing/blob/main/client/cypress/integration/spec.ts)
    * [Playwright](https://github.com/andrey-star/software-testing/blob/main/client/playwright/spec.ts)
* [x] Comparison
    * [GitHub Pages](https://andrey-star.github.io/software-testing-report)

## Launching

* *OBSOLETE* Run backend (localhost:5000)

```shell
cd backend
npm start
```

* Run frontend (localhost:4200)

```shell
cd client
npm start
```

## Testing

```shell
cd client
```

### Unit/component

```shell
npm test
```

### e2e (Cypress)

```shell
npm run e2e
```

### e2e (Playwright)

*requires running backend and frontend*

```shell
npm run playwright
```

___

## hw2 - backend

### Main

* [x] Controller
    * [PackController](https://github.com/andrey-star/software-testing/blob/main/backend/src/main/java/sticker/controller/PackController.java)
* [x] Unit - nothing to test
* [x] Component, Mockito
    * [PackControllerComponentTest](https://github.com/andrey-star/software-testing/blob/main/backend/src/test/java/sticker/controller/PackControllerComponentTest.java)
* [x] TestContainers
    * [UserControllerTest](https://github.com/andrey-star/software-testing/blob/main/backend/src/test/java/sticker/controller/UserControllerTest.java)

### Advanced

* [x] Auth with JWT
    * [AuthController](https://github.com/andrey-star/software-testing/blob/main/backend/src/main/java/sticker/auth/AuthController.java)
    * [Tests](https://github.com/andrey-star/software-testing/blob/main/backend/src/test/java/sticker/auth/AuthControllerTest.java)
    * [AuthInterceptor](https://github.com/andrey-star/software-testing/blob/main/client/src/app/services/auth.interceptor.ts)
* [x] Frontend - Backend interaction
* [x] Spring Test Configuration
    * [UserControllerTest](https://github.com/andrey-star/software-testing/blob/main/backend/src/test/java/sticker/controller/UserControllerTest.java)
      uses
      separate [application.properties](https://github.com/andrey-star/software-testing/blob/main/backend/src/test/resources/application-testcontainers.properties)
      for Testcontainers setup
* [x] [Spring REST docs](https://github.com/andrey-star/software-testing/tree/main/backend/snippets/Current%20user)

### Bonus

* [ ] RabbitMQ/Kafka Streams

## Launching

Define

* `JDBC_DATABASE_URL`
* `JDBC_DATABASE_USERNAME`
* `JDBC_DATABASE_PASSWORD`
* `JWT_SECRET`

```shell
mvn spring-boot:run
```

___

## hw3 - CI/CD. GitHub Actions.

### Main

* [x] Testing workflow
    * [main.yml](https://github.com/andrey-star/software-testing/blob/main/.github/workflows/main.yml)

### Advanced

* [x] Deployment workflow (heroku)
    * [deploy.yml](https://github.com/andrey-star/software-testing/blob/main/.github/workflows/deploy.yml)

### Bonus

* [ ] Kubernetes

___

## hw4 - Allure

### Bonus

* [x] [Allure report](https://andrey-star.github.io/software-testing)

## hw5 - Contract tests

### Bonus

* [ ] Add Pact tests

## hw6 - a11y

### Bonus

* [x] Fix a11y issues
* [x] Check with Chrome Lighthouse and Mozilla
  * Lighthouse - 100
  * Mozilla - no issues
* [x] Add tests with `axe`
    * [cypress-axe](https://github.com/andrey-star/software-testing/blob/main/client/cypress/integration/spec.ts)
