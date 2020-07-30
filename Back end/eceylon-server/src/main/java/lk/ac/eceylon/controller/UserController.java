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
    public User authenticateUser(@RequestBody UserDTO user){
        //System.out.println(user);
        if(user.getEmail()!=null){
            return userService.authenticatebyEmail(user.getEmail(),user.getPassword());
        }
        else
            return null;
    }

    @PostMapping(value="/signin",consumes= MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public boolean saveUser(@RequestBody UserDTO user) throws Exception {
//            if(userService.findByemail(user.getEmail())==true){
//                return false;
//            }
            return userService.saveUser(user);
    }

   @GetMapping(value="/user/{id}",produces= MediaType.APPLICATION_JSON_VALUE)
    public User findByemail(@PathVariable(value = "id")  String id) throws Exception {
        id=id.replace("id=","");
        return userService.findByemail(id);
    }
}
