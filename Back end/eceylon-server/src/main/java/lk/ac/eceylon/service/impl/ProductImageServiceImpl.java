package lk.ac.eceylon.service.impl;

import lk.ac.eceylon.entity.ProductImage;
import lk.ac.eceylon.repository.ProductImageRepository;
import lk.ac.eceylon.service.ProductImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(propagation = Propagation.SUPPORTS, readOnly =  true)
public class ProductImageServiceImpl implements ProductImageService {
    @Autowired
    private ProductImageRepository productImageRepository;

    @Override
    public boolean saveImages(ProductImage image) {
        return false;
    }
}
