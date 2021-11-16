package sticker.service;

import org.springframework.stereotype.Service;
import sticker.model.Pack;
import sticker.repository.PackRepository;

import java.util.List;

@Service
public class PackService {

    private final PackRepository repository;

    public PackService(PackRepository repository) {
        this.repository = repository;
    }

    public List<Pack> getPacks() {
        return repository.findAll();
    }

    public Pack getPackById(long packId) {
        return repository.getById(packId);
    }
}
