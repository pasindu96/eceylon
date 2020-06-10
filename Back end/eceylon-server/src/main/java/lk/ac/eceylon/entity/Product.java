package lk.ac.eceylon.entity;

import javax.persistence.*;

@Entity
public class Product {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int productID;
    private String description;
    private  double unitPrice;
    private String displayName;
    private String delivery_Area;

    @ManyToOne(optional = false)
    @JoinColumn(name="categoryID")
    private Category category;

    private String subCategory;

    @ManyToOne(optional = false)
    @JoinColumn(name="email")
    private User user;

    public Product() {
    }

    public Product(String description, double unitPrice, String displayName, String delivery_Area, Category category, String subCategory, User user) {
        this.description = description;
        this.unitPrice = unitPrice;
        this.displayName = displayName;
        this.delivery_Area = delivery_Area;
        this.category = category;
        this.subCategory = subCategory;
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

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getDelivery_Area() {
        return delivery_Area;
    }

    public void setDelivery_Area(String delivery_Area) {
        this.delivery_Area = delivery_Area;
    }

    public String getSubCategory() {
        return subCategory;
    }

    public void setSubCategory(String subCategory) {
        this.subCategory = subCategory;
    }

    @Override
    public String toString() {
        return "Product{" +
                "productID=" + productID +
                ", description='" + description + '\'' +
                ", unitPrice=" + unitPrice +
                ", displayName='" + displayName + '\'' +
                ", delivery_Area='" + delivery_Area + '\'' +
                ", category=" + category +
                ", subCategory='" + subCategory + '\'' +
                ", user=" + user +
                '}';
    }
}
