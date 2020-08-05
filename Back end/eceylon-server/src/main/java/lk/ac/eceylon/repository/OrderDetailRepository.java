package lk.ac.eceylon.repository;

import lk.ac.eceylon.entity.OrderDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface OrderDetailRepository extends JpaRepository<OrderDetails,Integer> {
    List<OrderDetails> findOrderDetailsByProductProductID(@Param("productID")int productID);
}
