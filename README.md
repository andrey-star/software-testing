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

* Run backend (localhost:5000)

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
