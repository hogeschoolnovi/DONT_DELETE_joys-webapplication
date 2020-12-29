package com.bannink.joys.repository;

import com.bannink.joys.domain.GameInformation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IGameInformationRepository extends JpaRepository<GameInformation, Long> {

}
