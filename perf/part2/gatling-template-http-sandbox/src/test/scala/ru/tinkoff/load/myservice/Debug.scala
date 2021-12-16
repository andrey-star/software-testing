package ru.tinkoff.load.myservice

class Debug extends Simulation {

  // proxy is required on localhost:8888

  setUp(
    CommonScenario().inject(atOnceUsers(1))
  ).protocols(
    httpProtocol
      .proxy(Proxy("localhost", 8888).httpsPort(8888))
  )
    .maxDuration(testDuration)

}
