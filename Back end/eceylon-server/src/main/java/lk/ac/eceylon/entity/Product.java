package lk.ac.eceylon.entity;

import javax.persistence.*;

@Entity
public class Product {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private int productID;
    private String description;
    private  double unitPrice;
    private String displayName;

    @ManyToOne(optional = false)
    @JoinColumn(name="categoryID")
    private Category category;

    @ManyToOne(optional = false)
    @JoinColumn(name="email")
    private User user;

    public Product() {
    }

    public Product(String description, double unitPrice, String displayName, Category category, User user) {
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

    @Override
    public String toString() {
        return "Product{" +
                "productID=" + productID +
                ", description='" + description + '\'' +
                ", unitPrice=" + unitPrice +
                ", displayName='" + displayName + '\'' +
                ", category=" + category +
                ", user=" + user +
                '}';
    }
}
