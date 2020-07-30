package lk.ac.eceylon.repository;

import lk.ac.eceylon.entity.ShoppingCart;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ShoppingCartRepository extends JpaRepository<ShoppingCart,Integer> {

}
