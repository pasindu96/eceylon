package lk.ac.eceylon.service;

import lk.ac.eceylon.dto.CategoryDTO;
import lk.ac.eceylon.dto.ProductDTO;

public interface ProductService {
    boolean saveProduct(ProductDTO product);
}
