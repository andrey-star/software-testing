package sticker.service;

import org.springframework.stereotype.Service;
import sticker.model.Pack;
import sticker.repository.PackRepository;

import java.util.List;
import java.util.Optional;

@Service
public class PackService {

    private final PackRepository repository;

    public PackService(PackRepository repository) {
        this.repository = repository;
    }

    public List<Pack> getPacks() {
        return repository.findAll();
    }

    public Optional<Pack> getPackById(long packId) {
        return repository.findById(packId);
    }
}
