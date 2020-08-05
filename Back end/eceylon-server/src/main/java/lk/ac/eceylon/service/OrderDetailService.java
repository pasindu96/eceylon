package lk.ac.eceylon.service;

import lk.ac.eceylon.entity.OrderDetails;

import java.util.List;

public interface OrderDetailService {

    public boolean saveOrderDetails(OrderDetails od);
    public List<OrderDetails> getOrderIDFromProductID(int productID);
}
