package ru.tinkoff.load.myservice

class MaxPerformance extends Simulation with Annotations {

  setUp(
    CommonScenario().inject(
      incrementUsersPerSec((intensity / stagesNumber).toInt) // интенсивность на ступень
        .times(stagesNumber) // Количество ступеней
        .eachLevelLasting(stageDuration) // Длительность полки
        .separatedByRampsLasting(rampDuration) // Длительность разгона
        .startingFrom(0) // Начало нагрузки с
    )
  ).protocols(httpProtocol)
    .maxDuration(testDuration) // общая длительность теста

}
