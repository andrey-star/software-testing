package ru.tinkoff.load.myservice

class Stability extends Simulation with Annotations {

  setUp(
    CommonScenario().inject(
      rampUsersPerSec(0) to intensity.toInt during rampDuration, //разгон
      constantUsersPerSec(intensity.toInt) during stageDuration //полка
    )
  ).protocols(httpProtocol)
    .maxDuration(testDuration) //длительность теста = разгон + полка

}
