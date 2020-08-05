package lk.ac.eceylon.service.impl;

import lk.ac.eceylon.entity.OrderDetails;
import lk.ac.eceylon.entity.Orders;
import lk.ac.eceylon.repository.OrderDetailRepository;
import lk.ac.eceylon.service.OrderDetailService;
import lk.ac.eceylon.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(propagation = Propagation.SUPPORTS, readOnly =  true)
public class OrderDetailServiceImpl implements OrderDetailService {
    @Autowired
    OrderDetailRepository repository;

    @Override
    public boolean saveOrderDetails(OrderDetails od) {
        if(repository.save(od)!=null)
            return true;
        else
            return false;
    }

    @Override
    public List<OrderDetails> getOrderIDFromProductID(int productID) {
        return repository.findOrderDetailsByProductProductID(productID);
    }
}
