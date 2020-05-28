package lk.ac.eceylon.controller;

import lk.ac.eceylon.dto.CategoryDTO;
import lk.ac.eceylon.entity.Category;
import lk.ac.eceylon.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping(value = "api/eceylon")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;
    @PostMapping(value="/category",consumes= MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public boolean saveCategory(@RequestBody CategoryDTO category){
        return categoryService.saveCategory(category);
    }
}
