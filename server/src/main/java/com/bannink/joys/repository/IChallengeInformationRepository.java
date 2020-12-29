package com.bannink.joys.repository;

import com.bannink.joys.domain.ChallengeInformation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IChallengeInformationRepository extends JpaRepository<ChallengeInformation, Long> {
    List<ChallengeInformation> findByGameId(Long gameId);
}
