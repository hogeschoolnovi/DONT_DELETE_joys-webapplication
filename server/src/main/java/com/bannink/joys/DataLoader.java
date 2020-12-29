package com.bannink.joys;

import com.bannink.joys.domain.*;
import com.bannink.joys.repository.IChallengeInformationRepository;
import com.bannink.joys.repository.IGameInformationRepository;
import com.bannink.joys.repository.IUserRepository;
import com.bannink.joys.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;


@Component
public class DataLoader implements ApplicationRunner {
    private IGameInformationRepository gameInformationRepository;
    private IChallengeInformationRepository challengeInformationRepository;
    private PasswordEncoder encoder;
    private RoleRepository roleRepository;
    private IUserRepository userRepository;

    @Autowired
    public DataLoader(IGameInformationRepository gameInformationRepository, IChallengeInformationRepository challengeInformationRepository, PasswordEncoder encoder, RoleRepository roleRepository, IUserRepository userRepository) {
        this.gameInformationRepository = gameInformationRepository;
        this.challengeInformationRepository = challengeInformationRepository;
        this.encoder = encoder;
        this.roleRepository = roleRepository;
        this.userRepository = userRepository;
    }
    public void run(ApplicationArguments args) {
        GameInformation game = new GameInformation();
        game.setName("5 Min Challenge");
        game.setDescription("descr");
        gameInformationRepository.save(game);
        GameInformation game2 = new GameInformation();
        game2.setName("15 Min Challenge");
        game2.setDescription("descr");
        gameInformationRepository.save(game2);
        GameInformation game3 = new GameInformation();
        game3.setName("Day Challenge");
        game3.setDescription("descr");
        gameInformationRepository.save(game3);

        ChallengeInformation challenge1 = new ChallengeInformation();
        challenge1.setName("Challenge1");
        challenge1.setLevel("5 min challenge");
        challenge1.setDescription("descr");
        challenge1.setValue(10);
        challenge1.setGameId(game.getId());
        challengeInformationRepository.save(challenge1);
        ChallengeInformation challenge2 = new ChallengeInformation();
        challenge2.setName("Challenge2");
        challenge2.setLevel("15 min challenge");
        challenge2.setDescription("descr");
        challenge2.setValue(20);
        challenge2.setGameId(game.getId());
        challengeInformationRepository.save(challenge2);
        ChallengeInformation challenge3 = new ChallengeInformation();
        challenge3.setName("Challenge3");
        challenge3.setLevel("5 min challenge");
        challenge3.setDescription("descr");
        challenge3.setValue(10);
        challenge3.setGameId(game.getId());
        challengeInformationRepository.save(challenge3);
        ChallengeInformation challenge4 = new ChallengeInformation();
        challenge4.setName("Challenge4");
        challenge4.setLevel("15 min challenge");
        challenge4.setDescription("descr");
        challenge4.setValue(20);
        challenge4.setGameId(game.getId());
        challengeInformationRepository.save(challenge4);
        ChallengeInformation challenge5 = new ChallengeInformation();
        challenge5.setName("Challenge5");
        challenge5.setLevel("24 hour challenge");
        challenge5.setDescription("descr");
        challenge5.setValue(100);
        challenge5.setGameId(game.getId());
        challengeInformationRepository.save(challenge5);
        ChallengeInformation challenge6 = new ChallengeInformation();
        challenge6.setName("Challenge6");
        challenge6.setLevel("15 min challenge");
        challenge6.setDescription("descr");
        challenge6.setValue(20);
        challenge6.setGameId(game.getId());
        challengeInformationRepository.save(challenge6);

        ChallengeInformation challenge7 = new ChallengeInformation();
        challenge7.setName("Challenge7");
        challenge7.setLevel("24 hour challenge");
        challenge7.setDescription("descr");
        challenge7.setValue(100);
        challenge7.setGameId(game2.getId());
        challengeInformationRepository.save(challenge7);
        ChallengeInformation challenge8 = new ChallengeInformation();
        challenge8.setName("Challenge8");
        challenge8.setLevel("15 min challenge");
        challenge8.setDescription("descr");
        challenge8.setValue(20);
        challenge8.setGameId(game2.getId());
        challengeInformationRepository.save(challenge8);
        ChallengeInformation challenge9 = new ChallengeInformation();
        challenge9.setName("Challenge9");
        challenge9.setLevel("24 hour challenge");
        challenge9.setDescription("descr");
        challenge9.setValue(100);
        challenge9.setGameId(game2.getId());
        challengeInformationRepository.save(challenge9);
        ChallengeInformation challenge10 = new ChallengeInformation();
        challenge10.setName("Challenge10");
        challenge10.setDescription("descr");
        challenge10.setValue(20);
        challenge10.setGameId(game2.getId());
        challengeInformationRepository.save(challenge10);
        ChallengeInformation challenge11 = new ChallengeInformation();
        challenge11.setName("Challenge11");
        challenge11.setDescription("descr");
        challenge11.setValue(20);
        challenge11.setGameId(game2.getId());
        challengeInformationRepository.save(challenge11);
        ChallengeInformation challenge12 = new ChallengeInformation();
        challenge12.setName("Challenge12");
        challenge12.setDescription("descr");
        challenge12.setValue(20);
        challenge12.setGameId(game2.getId());
        challengeInformationRepository.save(challenge12);

        ChallengeInformation challenge13 = new ChallengeInformation();
        challenge13.setName("Challenge13");
        challenge13.setDescription("descr");
        challenge13.setValue(100);
        challenge13.setGameId(game3.getId());
        challengeInformationRepository.save(challenge13);
        ChallengeInformation challenge14 = new ChallengeInformation();
        challenge14.setName("Challenge14");
        challenge14.setDescription("descr");
        challenge14.setValue(100);
        challenge14.setGameId(game3.getId());
        challengeInformationRepository.save(challenge14);
        ChallengeInformation challenge15 = new ChallengeInformation();
        challenge15.setName("Challenge15");
        challenge15.setDescription("descr");
        challenge15.setValue(100);
        challenge15.setGameId(game3.getId());
        challengeInformationRepository.save(challenge5);
        ChallengeInformation challenge16 = new ChallengeInformation();
        challenge16.setName("Challenge16");
        challenge16.setDescription("descr");
        challenge16.setValue(100);
        challenge16.setGameId(game3.getId());
        challengeInformationRepository.save(challenge16);
        ChallengeInformation challenge17 = new ChallengeInformation();
        challenge17.setName("Challenge17");
        challenge17.setDescription("descr");
        challenge17.setValue(100);
        challenge17.setGameId(game3.getId());
        challengeInformationRepository.save(challenge17);
        ChallengeInformation challenge18 = new ChallengeInformation();
        challenge18.setName("Challenge18");
        challenge18.setDescription("descr");
        challenge18.setValue(100);
        challenge18.setGameId(game3.getId());
        challengeInformationRepository.save(challenge18);


        User user = new User("naamnaam" ,"email@gmail.com", encoder.encode("Wachtwoord19!"));
        Set<Role> roles = new HashSet<>();
        Role userRole = roleRepository.findByName(ERole.ROLE_USER)
                .orElseThrow(() -> new RuntimeException("ROLE NOT FOUND"));
        roles.add(userRole);
        user.setRoles(roles);
        List<ChallengeInformation> privateToDo = new ArrayList<>();
        privateToDo.add(challenge1);
        privateToDo.add(challenge2);
        privateToDo.add(challenge3);
        user.setPrivateToDo(privateToDo);
        List<ChallengeInformation> publicToDo = new ArrayList<>();
        publicToDo.add(challenge4);
        publicToDo.add(challenge5);
        publicToDo.add(challenge6);
        user.setPublicToDo(publicToDo);
        List<ChallengeInformation> completedToDo = new ArrayList<>();
        completedToDo.add(challenge7);
        completedToDo.add(challenge8);
        completedToDo.add(challenge9);
        user.setCompletedToDo(completedToDo);
        userRepository.save(user);
    }
}