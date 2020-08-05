package lk.ac.eceylon.service.impl;

import lk.ac.eceylon.entity.Orders;
import lk.ac.eceylon.repository.OrderRepository;
import lk.ac.eceylon.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(propagation = Propagation.SUPPORTS, readOnly =  true)
public class OrderServiceImpl implements OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Override
    public Orders saveOrder(Orders order) {
//        if(orderRepository.save(order)!=null)
//            return true;
//        else
//            return false;
        return orderRepository.save(order);
    }

    @Override
    public List<Orders> getOrdersByOrderIDAndStatus(int orderid) {
        return orderRepository.findOrdersByOrderidAndStatus(orderid,"Not confirmed");
//        return orderRepository.findOrdersByOrderid(orderid);

    }

    @Override
    public boolean confirmOrder(Orders order) {
        Orders orderToUpdate=orderRepository.getOne(order.getOrderid());
        orderToUpdate.setStatus("Confirmed");
        if(orderRepository.save(orderToUpdate)!=null)
            return true;
        else
            return false;
    }
}
