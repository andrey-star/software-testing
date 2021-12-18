import org.junit.jupiter.api.Test;

import static com.codeborne.selenide.CollectionCondition.exactTexts;
import static com.codeborne.selenide.Condition.text;
import static com.codeborne.selenide.Selenide.*;

public class SelenideTest {
    @Test
    public void packs() {
        open("http://localhost:4200");
        $("app-sticker-sets h1").shouldHave(text("Packs"));
        $$("mat-card-title").shouldHave(exactTexts("Pure Gold", "Icebear", "Пушок"));
    }

    @Test
    public void login() {
        String login = "andrey";
        String password = "123";

        open("http://localhost:4200/login");
        $("input[name=\"username\"]").click();
        $("input[name=\"username\"]").setValue(login);
        $("input[name=\"password\"]").click();
        $("input[name=\"password\"]").setValue(password);
        $("button[type=\"submit\"]").click();

        $("h1").shouldHave(text("Hello, " + login + "!"));
    }
}
