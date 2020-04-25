package lk.ac.eceylon.controller;

import lk.ac.eceylon.dto.UserDTO;
import lk.ac.eceylon.entity.User;
import lk.ac.eceylon.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@CrossOrigin
@RequestMapping(value = "api/eceylon")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping(value="/login",consumes= MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public boolean authenticateUser(@RequestBody UserDTO user){
        return userService.authenticatebyEmail(user.getEmail(),user.getPassword());
    }

    @PostMapping(value="/signin",consumes= MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public boolean saveUser(@RequestBody UserDTO user) throws Exception {

        System.out.println(user);
            return userService.saveUser(user);
    }

   @GetMapping(value="/login/{id}",consumes= MediaType.APPLICATION_JSON_VALUE)
    public boolean findByemail(@PathVariable(value = "id")  String id) throws Exception {
        try{
            return userService.findByemail(id);
        }catch(Exception e){
            System.out.println(e+"");
            return false;
        }
    }
}
