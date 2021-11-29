package sticker.controller;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.FilterType;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import sticker.auth.jwt.JWTAuthTokenFilter;
import sticker.model.Pack;
import sticker.service.PackService;

import java.util.List;
import java.util.Optional;

import static io.qameta.allure.Allure.step;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@WebMvcTest(value = PackController.class, excludeFilters = {
        @ComponentScan.Filter(EnableWebSecurity.class),
        @ComponentScan.Filter(type = FilterType.ASSIGNABLE_TYPE, value = JWTAuthTokenFilter.class)
})
class PackControllerComponentTest {

    @MockBean
    PackService packService;

    @Autowired
    PackController controller;

    @Test
    public void testGetPackById() {
        step("Create mock pack");
        Pack pack = new Pack();
        pack.setId(1);
        pack.setAuthor("@test");
        pack.setDescription("test pack");
        when(packService.getPackById(1)).thenReturn(Optional.of(pack));

        step("Get pack");
        Pack actualPack = controller.getPack(1);

        step("Assert result");
        assertEquals("@test", actualPack.getAuthor());
        assertEquals("test pack", actualPack.getDescription());
    }

    @Test
    public void testGetPacks() {
        when(packService.getPacks()).thenReturn(List.of(new Pack(), new Pack(), new Pack()));

        List<Pack> actualPack = controller.getPacks();

        assertEquals(3, actualPack.size());
    }
}
