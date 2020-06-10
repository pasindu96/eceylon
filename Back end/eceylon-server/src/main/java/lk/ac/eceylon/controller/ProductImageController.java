package lk.ac.eceylon.controller;

import lk.ac.eceylon.dto.ProductDTO;
import lk.ac.eceylon.entity.ProductImage;
import lk.ac.eceylon.service.ProductImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping(value = "api/eceylon")
public class ProductImageController {

    @Autowired
    private ProductImageService productImageService;

    @PostMapping(value="/image",consumes= MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public boolean saveProduct(@RequestBody ProductImage productImage){
        return productImageService.saveImages(productImage);
//        System.out.println(productImage);
//        return true;
    }

    @GetMapping(value="/image/{id}",
            produces = MediaType.APPLICATION_JSON_VALUE)
    public List<ProductImage> productDescription(@PathVariable("id") String id){
        return productImageService.getProduct(Integer.parseInt(id.replace("id=", "")));
    }
//    @GetMapping(value="/image/{id}",consumes= MediaType.APPLICATION_JSON_VALUE,
//            produces = MediaType.APPLICATION_JSON_VALUE)
//    public ProductImage productDescription(@PathVariable("id") String id){
//
//        return productImageService.getProductImage(Integer.parseInt(id.replace("id=", "")));
//    }
}
