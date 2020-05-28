package lk.ac.eceylon.controller;

import lk.ac.eceylon.service.ProductImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping(value = "api/eceylon")
public class ProductImageController {
    @Autowired
    private ProductImageService productImageService;
}
