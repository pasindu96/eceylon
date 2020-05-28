package lk.ac.eceylon.service.impl;

import lk.ac.eceylon.dto.ProductDTO;
import lk.ac.eceylon.entity.Category;
import lk.ac.eceylon.entity.Product;
import lk.ac.eceylon.entity.User;
import lk.ac.eceylon.repository.ProductRepository;
import lk.ac.eceylon.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;


@Service
@Transactional(propagation = Propagation.SUPPORTS, readOnly =  true)
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public boolean saveProduct(ProductDTO productDTO) {
        Category category=new Category();
        category.setCategoryID(productDTO.getCategory().getCategoryID());
        System.out.println(category);
        User user=new User();
        user.setEmail(productDTO.getUser().getEmail());
        Product product=new Product();
        product.setDescription(productDTO.getDescription());
        product.setUnitPrice(productDTO.getUnitPrice());
        product.setDisplayName(productDTO.getDisplayName());
        product.setCategory(category);
        product.setUser(user);
        if(productRepository.save(product)!=null)
            return true;
        else
            return false;

    }
}
