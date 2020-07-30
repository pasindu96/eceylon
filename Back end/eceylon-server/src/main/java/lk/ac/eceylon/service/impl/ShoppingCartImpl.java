package lk.ac.eceylon.service.impl;

import lk.ac.eceylon.entity.ShoppingCart;
import lk.ac.eceylon.repository.ShoppingCartRepository;
import lk.ac.eceylon.service.ShoppingCartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;

@Service
@Transactional(propagation = Propagation.SUPPORTS, readOnly =  true)
public class ShoppingCartImpl implements ShoppingCartService {

    @Autowired
    private ShoppingCartRepository cartRepo;

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public boolean saveCart(@RequestBody  ShoppingCart cart) {
//        System.out.println(cart);
//        return true;
        if(cartRepo.save(cart) != null)
            return true;
        else
            return false;
    }
}
