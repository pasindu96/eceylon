package lk.ac.eceylon.entity;

import javax.persistence.*;

@Entity
public class OrderDetails {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int odID;

    @ManyToOne(optional = false)
    @JoinColumn(name="email")
    private User user;

    @ManyToOne(optional = false)
    @JoinColumn(name="productID")
    private Product product;

    private int quantity;

    public OrderDetails(User user, Product product, int quantity) {
        this.user = user;
        this.product = product;
        this.quantity = quantity;
    }

    public OrderDetails() {
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    @Override
    public String toString() {
        return "OrderDetails{" +
                "user=" + user +
                ", product=" + product +
                ", quantity=" + quantity +
                '}';
    }
}
