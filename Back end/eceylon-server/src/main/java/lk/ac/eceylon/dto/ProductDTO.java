package lk.ac.eceylon.dto;

import lk.ac.eceylon.entity.Category;

public class ProductDTO {
    private int productID;
    private String description;
    private double unitPrice;
    private String displayName;
    private CategoryDTO category;
    private UserDTO user;

    public ProductDTO() {
    }

    public ProductDTO(int productID, String description, double unitPrice, String displayName, CategoryDTO category, UserDTO user) {
        this.productID = productID;
        this.description = description;
        this.unitPrice = unitPrice;
        this.displayName = displayName;
        this.category = category;
        this.user = user;
    }

    public int getProductID() {
        return productID;
    }

    public void setProductID(int productID) {
        this.productID = productID;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getUnitPrice() {
        return unitPrice;
    }

    public void setUnitPrice(double unitPrice) {
        this.unitPrice = unitPrice;
    }

    public String getDisplayName() {
        return displayName;
    }

    public void setDisplayName(String displayName) {
        this.displayName = displayName;
    }

    public CategoryDTO getCategory() {
        return category;
    }

    public void setCategory(CategoryDTO category) {
        this.category = category;
    }

    public UserDTO getUser() {
        return user;
    }

    public void setUser(UserDTO user) {
        this.user = user;
    }

    @Override
    public String toString() {
        return "ProductDTO{" +
                "productID=" + productID +
                ", description='" + description + '\'' +
                ", unitPrice=" + unitPrice +
                ", displayName='" + displayName + '\'' +
                ", category=" + category +
                ", user=" + user +
                '}';
    }
}
