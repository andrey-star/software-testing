package sticker.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import sticker.model.Pack;

@Repository
public interface PackRepository extends JpaRepository<Pack, Long> {
}
