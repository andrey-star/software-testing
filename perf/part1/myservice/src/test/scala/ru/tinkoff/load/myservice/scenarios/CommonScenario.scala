package ru.tinkoff.load.myservice.scenarios

object CommonScenario {
  def apply(): ScenarioBuilder = new CommonScenario().scn
}

class CommonScenario {

  val scn: ScenarioBuilder = scenario("Common Scenario")
    .exec(GetMainPage.getMainPage)

}
