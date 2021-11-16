# software-testing

Sticker Generator

## hw1 - frontend

### Main

* [x] Unit
    * [StickerService](https://github.com/andrey-star/software-testing/blob/master/client/src/app/services/sticker.service.spec.ts)
* [x] Component
    * [StickerPacksComponent](https://github.com/andrey-star/software-testing/blob/master/client/src/app/components/sticker-packs/sticker-packs.component.spec.ts)
    * [StickerPackPreviewComponent](https://github.com/andrey-star/software-testing/blob/master/client/src/app/components/sticker-pack-preview/sticker-pack-preview.component.spec.ts)
* [x] e2e
    * [Cypress](https://github.com/andrey-star/software-testing/blob/master/client/cypress/integration/spec.ts)
    * [Playwright](https://github.com/andrey-star/software-testing/blob/master/client/playwright/spec.ts)

### Advanced

* [x] Auth
    * [AuthService](https://github.com/andrey-star/software-testing/blob/master/client/src/app/services/auth.service.ts)
    * [LoginComponent](https://github.com/andrey-star/software-testing/blob/master/client/src/app/components/login/login.component.ts)
* [x] Tests
    * [Cypress](https://github.com/andrey-star/software-testing/blob/master/client/cypress/integration/spec.ts)
* [x] Suites

### Bonus

* [x] Cypress vs Playwright
    * [Cypress](https://github.com/andrey-star/software-testing/blob/master/client/cypress/integration/spec.ts)
    * [Playwright](https://github.com/andrey-star/software-testing/blob/master/client/playwright/spec.ts)
* [x] Comparison
    * [GitHub Pages](https://andrey-star.github.io/software-testing)

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

## hw2 - backend

### Main

* [x] Controller
    * [PackController](https://github.com/andrey-star/software-testing/blob/master/backend/src/main/java/sticker/controller/PackController.java)
* [x] Unit - nothing to test
* [x] Component, Mockito
    * [PackControllerComponentTest](https://github.com/andrey-star/software-testing/blob/master/backend/src/test/java/sticker/controller/PackControllerComponentTest.java)
* [ ] TestContainers

### Bonus

* [x] Auth with JWT
    * [AuthController](https://github.com/andrey-star/software-testing/blob/master/backend/src/main/java/sticker/auth/AuthController.java)
    * [Tests](https://github.com/andrey-star/software-testing/blob/master/backend/src/test/java/sticker/auth/AuthControllerTest.java)
    * [AuthInterceptor](https://github.com/andrey-star/software-testing/blob/master/client/src/app/services/auth.interceptor.ts)
* [x] Frontend - Backend
* [ ] Spring Test Configuration
* [x] [Spring REST docs](https://github.com/andrey-star/software-testing/tree/master/backend/snippets/Current%20user)

Possible additional tests:
* e2e for all controllers
* exception handling

## Launching

Define

* `JDBC_DATABASE_URL`
* `JDBC_DATABASE_USERNAME`
* `JDBC_DATABASE_PASSWORD`
* `JWT_SECRET`
*

```shell
mvn spring-boot:run
```
