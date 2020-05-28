package lk.ac.eceylon.entity;

import javax.persistence.*;
import java.util.Arrays;

@Entity
public class ProductImage {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private int imgID;
    private byte[] image;

    @ManyToOne(optional = false)
    @JoinColumn(name="productID")
    private Product product;

    public ProductImage(byte[] image, Product product) {
        this.image = image;
        this.product = product;
    }

    public ProductImage() {
    }

    public int getImgID() {
        return imgID;
    }

    public void setImgID(int imgID) {
        this.imgID = imgID;
    }

    public byte[] getImage() {
        return image;
    }

    public void setImage(byte[] image) {
        this.image = image;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    @Override
    public String toString() {
        return "ProductImage{" +
                "imgID=" + imgID +
                ", image=" + Arrays.toString(image) +
                ", product=" + product +
                '}';
    }
}
