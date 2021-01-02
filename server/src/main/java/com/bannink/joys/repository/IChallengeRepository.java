package com.bannink.joys.repository;

import com.bannink.joys.domain.Challenge;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IChallengeRepository extends JpaRepository<Challenge, Long> {
    List<Challenge> findByGameId(Long gameId);
}
