package lk.ac.eceylon.repository;

import lk.ac.eceylon.entity.Product;
import lk.ac.eceylon.entity.ProductImage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product,Integer> {

}
