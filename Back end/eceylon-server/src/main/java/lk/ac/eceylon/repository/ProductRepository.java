package lk.ac.eceylon.repository;

import lk.ac.eceylon.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product,Integer> {
}
