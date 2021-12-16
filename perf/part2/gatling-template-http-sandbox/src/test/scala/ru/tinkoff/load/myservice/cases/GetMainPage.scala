package ru.tinkoff.load.myservice.cases

object GetMainPage {

  val getMainPage = http("GET /get")
    .get("/get")
    .check(status is 200)

}
