package lk.ac.eceylon.service;

import lk.ac.eceylon.entity.Orders;

import java.util.List;

public interface OrderService {
    public Orders saveOrder(Orders order);
    public List<Orders> getOrdersByOrderIDAndStatus(int orderid);
    public boolean confirmOrder(Orders order);

}
