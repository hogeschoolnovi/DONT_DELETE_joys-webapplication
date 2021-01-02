package com.bannink.joys.repository;

import com.bannink.joys.domain.Game;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IGameRepository extends JpaRepository<Game, Long> {

}
