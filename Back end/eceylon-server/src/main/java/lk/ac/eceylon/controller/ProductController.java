package lk.ac.eceylon.controller;

import lk.ac.eceylon.dto.ProductDTO;
import lk.ac.eceylon.dto.ProductbyUserDTO;
import lk.ac.eceylon.entity.Product;
import lk.ac.eceylon.entity.ProductImage;
import lk.ac.eceylon.service.ProductImageService;
import lk.ac.eceylon.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping(value = "api/eceylon")
public class ProductController {

    @Autowired
    private ProductService productService;
    @Autowired
    private ProductImageService imageService;

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
    @GetMapping(value="/productlist/{email}",
            produces = MediaType.APPLICATION_JSON_VALUE)
    public List<ProductbyUserDTO> getProductByUser(@PathVariable("email") String email){
        List<Product> list= productService.getProductByUser((email.replace("email=","")));
        List<ProductbyUserDTO> products=new ArrayList<ProductbyUserDTO>();
        if(list != null)
            for (Product product : list) {
                products.add(new ProductbyUserDTO(
                    product.getProductID(),
                    product.getDescription(),
                    product.getDisplayName(),
                    product.getQty_on_hand(),
                    product.getDelivery_Area(),
                    product.getUnitPrice(),
                    product.getCategory().getCategoryID()
                ));
            }
            return products;
    }

    @PostMapping(value="/product/update",consumes= MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public boolean updateProduct(@RequestBody Product product){
        System.out.println(product);
//        return true;
        return productService.updateProduct(product);
    }

    @GetMapping(value="/productl/{id}",
            produces = MediaType.APPLICATION_JSON_VALUE)
    public List<ProductbyUserDTO> getProductListByCategory(@PathVariable("id") String id){
        List<ProductbyUserDTO> list=new ArrayList<ProductbyUserDTO>();
        List<ProductImage> image;

        for (Product product : productService.getProduct(Integer.parseInt(id.replace("id=","")))) {
            image =imageService.getProductImage(product.getProductID());
            list.add(new ProductbyUserDTO(
                    product.getProductID(),
                    product.getDescription(),
                    product.getDisplayName(),
                    product.getQty_on_hand(),
                    product.getDelivery_Area(),
                    product.getUnitPrice(),
                    product.getCategory().getCategoryID(),
                    (image.isEmpty()) ? "No Image":image.get(0).getImageurl()
            ));
        }
        return list;
    }

}
