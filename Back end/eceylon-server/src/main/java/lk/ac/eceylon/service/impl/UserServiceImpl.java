package lk.ac.eceylon.service.impl;

import lk.ac.eceylon.dto.UserDTO;
import lk.ac.eceylon.entity.User;
import lk.ac.eceylon.repository.UserRepository;
import lk.ac.eceylon.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional(propagation = Propagation.SUPPORTS, readOnly =  true)
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;


    @Override
    public boolean authenticatebyEmail(String email, String password) {
        boolean exists =userRepository.existsById(email);
        if (!exists){
            return false;
        }

        User user = userRepository.findById(email).get();

        return user.getPassword().equals(password);
    }


    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public boolean saveUser(UserDTO newUser) {
        User user=new User();
        user.setUsername(newUser.getUsername());
        user.setPassword(newUser.getPassword());
        user.setMobile(newUser.getMobile());
        user.setFullname(newUser.getFullname());
        user.setAddress(newUser.getAddress());
        user.setEmail(newUser.getEmail());
        user.setType(newUser.getType());

        userRepository.save(user);
        return true;
    }

    @Override
    public boolean findByemail(String email) {
        userRepository.findById(email);
        return true;
    }
}
