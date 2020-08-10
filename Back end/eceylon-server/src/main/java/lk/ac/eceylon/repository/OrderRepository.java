package lk.ac.eceylon.repository;

import lk.ac.eceylon.entity.Orders;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

public interface OrderRepository extends JpaRepository<Orders,Integer> {
    String sql="SELECT orderid,amount FROM orders WHERE orderdate >= DATE_SUB(CURDATE(),INTERVAL 7 DAY)";
    List<Orders> findOrdersByOrderidAndStatus(@PathVariable("orderid")int orderid, @PathVariable("status")String status);
    List<Orders> findOrdersByOrderid(@PathVariable("orderid")int orderid);

//    @Query
//    @Query("SELECT oid FROM orders WHERE orderdate >= (CURDATE() + INTERVAL -7 DAY)")
//    List<Orders> findOrdersByOrderdate();

//    List<Orders> findOrdersByOrderdate();
}
