package sticker.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebViewConfig implements WebMvcConfigurer {

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/{x:[\\w\\-]+}")
                .setViewName("forward:/");
        registry.addViewController("/{x:^(?!api$).*$}/**/{y:[\\w\\-]+}")
                .setViewName("forward:/");
    }
}
