package lk.ac.eceylon.service.impl;

import lk.ac.eceylon.entity.Orders;
import lk.ac.eceylon.repository.OrderRepository;
import lk.ac.eceylon.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(propagation = Propagation.SUPPORTS, readOnly =  true)
public class OrderServiceImpl implements OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Override
    public boolean saveOrder(Orders order) {
        if(orderRepository.save(order)!=null)
            return true;
        else
            return false;
    }
}
