package sticker.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import sticker.model.Pack;
import sticker.service.PackService;

import java.util.List;

@RestController
@RequestMapping("/api/packs")
public class PackController {

    private final PackService packService;

    public PackController(PackService packService) {
        this.packService = packService;
    }

    @GetMapping
    public List<Pack> getPacks() {
        return packService.getPacks();
    }

    @GetMapping("/{packId}")
    public Pack getPack(@PathVariable long packId) {
        return packService.getPackById(packId).get();
    }

}
