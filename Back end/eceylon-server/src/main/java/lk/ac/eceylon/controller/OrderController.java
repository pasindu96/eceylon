package lk.ac.eceylon.controller;

import lk.ac.eceylon.dto.UserOrdersDTO;
import lk.ac.eceylon.entity.OrderDetails;
import lk.ac.eceylon.entity.Orders;
import lk.ac.eceylon.entity.Product;
import lk.ac.eceylon.repository.OrderRepository;
import lk.ac.eceylon.service.OrderDetailService;
import lk.ac.eceylon.service.OrderService;
import lk.ac.eceylon.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping(value = "api/eceylon")
public class OrderController {

    @Autowired
    private OrderService orderService;
    @Autowired
    private ProductService productService;
    @Autowired
    private OrderDetailService orderDetailService;


    @PostMapping(value ="/order",consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public Orders saveOrder(@RequestBody Orders order){
//        System.out.println(order);
//        return null;
        return orderService.saveOrder(order);
    }

    @GetMapping(value ="/orders/{email}",
            produces = MediaType.APPLICATION_JSON_VALUE)
    public List<UserOrdersDTO> getAllOrders(@PathVariable("email")String email){
        List<Product> proList= productService.getProductByUser(email.replace("email=",""));
        List<OrderDetails> odList=null;
        List<UserOrdersDTO> orderList=new ArrayList<UserOrdersDTO>();
//        UserOrdersDTO order;
        //System.out.println(proList);
        for (Product product:proList) {
//            odList.removeAll(odList);

//            order=new UserOrdersDTO();
//            order.setProductID(product.getProductID());
//            order.setDisplayName(product.getDisplayName());

            odList=orderDetailService.getOrderIDFromProductID(product.getProductID());

            for(OrderDetails od: odList){

//                order.setQuantity(od.getQuantity());
                //7 ---> 6 orders
                //System.out.println(od.getProduct().getProductID());
//This also worked -> returned order ids
//                System.out.println(od.getOrder().getOrderid());

                System.out.println(od.getOrder().getOrderid()+" ------");
//                List<Orders> olist=orderService.getOrdersByOrderIDAndStatus(od.getOrder().getOrderid());
                for (Orders o :orderService.getOrdersByOrderIDAndStatus(od.getOrder().getOrderid())) {

//                    System.out.println(o);
                    UserOrdersDTO order=new UserOrdersDTO();
                    order.setProductID(product.getProductID());
                    order.setDisplayName(product.getDisplayName());

                    order.setQuantity(od.getQuantity());

                    order.setEmail(o.getUser().getEmail());
                    order.setName(o.getUser().getFullname());
                    order.setAddress(o.getUser().getAddress());
                    order.setMobile(o.getUser().getMobile());

                    order.setOrderID(o.getOrderid());
                    order.setAmount(o.getAmount());
                    order.setDate((Timestamp)o.getDate());

//                    System.out.println(order);

                    orderList.add(order);

                    System.out.println(orderList);

                }


                //System.out.println(orderService.getOrdersByOrderIDAndStatus(od.getOrder().getOrderid()));
            }
        }
        //System.out.println(orderService.getOrdersByOrderIDAndStatus(3));

        return orderList;
//        return null;
    }
    @PostMapping(value ="/order/confirm",consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public boolean confirmOrder(@RequestBody Orders order){
//        System.out.println(order);
//        return null;

        System.out.println(order);
        return orderService.confirmOrder(order);
    }
    //-------------------------------------------
    @Autowired
    OrderRepository or;

    @GetMapping(value ="/order/test",
            produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Orders> test(){
//        System.out.println(order);
//        return null;
//        return or.findOrdersByOrderdate();
            return null;
//        return or.findOrdersByDateMonthBefore(1);
    }
}
