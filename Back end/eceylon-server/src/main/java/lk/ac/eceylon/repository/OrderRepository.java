package lk.ac.eceylon.repository;

import lk.ac.eceylon.entity.Orders;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

public interface OrderRepository extends JpaRepository<Orders,Integer> {
    List<Orders> findOrdersByOrderidAndStatus(@PathVariable("orderid")int orderid, @PathVariable("status")String status);
    List<Orders> findOrdersByOrderid(@PathVariable("orderid")int orderid);

}
