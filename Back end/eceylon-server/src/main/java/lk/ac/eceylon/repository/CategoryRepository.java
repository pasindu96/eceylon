package lk.ac.eceylon.repository;

import lk.ac.eceylon.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category,Integer> {

}
