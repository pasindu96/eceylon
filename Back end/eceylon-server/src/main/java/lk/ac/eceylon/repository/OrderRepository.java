package lk.ac.eceylon.repository;

import lk.ac.eceylon.entity.Orders;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Orders,Integer> {

}
