package lk.ac.eceylon.controller;

import lk.ac.eceylon.entity.ShoppingCart;
import lk.ac.eceylon.service.ShoppingCartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping(value = "api/eceylon")
public class ShoppingCartController {

    @Autowired
    private ShoppingCartService cartService;

    @PostMapping(value = "/cart",produces = MediaType.APPLICATION_JSON_VALUE,
    consumes = MediaType.APPLICATION_JSON_VALUE)
    public boolean saveCartItems(@RequestBody ShoppingCart cart){
        return cartService.saveCart(cart);
    }
}
