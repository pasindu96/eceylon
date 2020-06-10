package lk.ac.eceylon.controller;

import lk.ac.eceylon.entity.Orders;
import lk.ac.eceylon.service.OrderService;
import lk.ac.eceylon.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping(value = "api/eceylon")
public class OrderController {
    @Autowired
    private OrderService orderService;

    @PostMapping(value ="/order",consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public boolean saveOrder(@RequestBody Orders order){
        return orderService.saveOrder(order);
    }

}
