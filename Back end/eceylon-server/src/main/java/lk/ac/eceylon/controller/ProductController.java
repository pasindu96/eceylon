package lk.ac.eceylon.controller;

import lk.ac.eceylon.dto.ProductDTO;
import lk.ac.eceylon.entity.Product;
import lk.ac.eceylon.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping(value = "api/eceylon")
public class ProductController {

    @Autowired
    private ProductService productService;

    @PostMapping(value="/product",consumes= MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public Product saveProduct(@RequestBody ProductDTO product){
//        System.out.println(product);
        return productService.saveProduct(product);
//        return true;
    }
//    @GetMapping(value="/product/{id}",
//            produces = MediaType.APPLICATION_JSON_VALUE)
//    public Product getProduct(@PathVariable("id") String id){
//        //int i=Integer.parseInt(id);
////        System.out.println(id.replace("id=",""));
//        return productService.getProduct(Integer.parseInt(id.replace("id=","")));
//    }

    //--------------------------------> Use this to list from category id <----------------------------------
//    @GetMapping(value="/product/{id}",
//            produces = MediaType.APPLICATION_JSON_VALUE)
//    public List<Product> getProduct(@PathVariable("id") String id){
//        //int i=Integer.parseInt(id);
////        System.out.println(id.replace("id=",""));
//        System.out.println(id);
//        //return productService.getProduct(Integer.parseInt(id.replace("id=","")));
//        return productService.getProduct(Integer.parseInt(id.replace("id=","")));
//    }

    @GetMapping(value="/product/{id}",
            produces = MediaType.APPLICATION_JSON_VALUE)
    public Product getProduct(@PathVariable("id") String id){
        //int i=Integer.parseInt(id);
//        System.out.println(id.replace("id=",""));
        //return productService.getProduct(Integer.parseInt(id.replace("id=","")));
        return productService.getProductByID(Integer.parseInt(id.replace("id=","")));
    }

    @GetMapping(value="/products",produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Product> getAllProducts(){
        return productService.getAllProducts();
    }

    @GetMapping(value="/products/{id}",
            produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Product> getProductByCategory(@PathVariable("id") String id){
        return productService.getProduct(Integer.parseInt(id.replace("id=","")));
    }
}
