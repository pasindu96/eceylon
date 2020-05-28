package lk.ac.eceylon.dto;

import java.util.Arrays;

public class ProductImageDTO {
    private int imgID;
    private byte[] image;
    private ProductDTO product;

    public ProductImageDTO() {
    }

    public ProductImageDTO(int imgID, byte[] image, ProductDTO product) {
        this.imgID = imgID;
        this.image = image;
        this.product = product;
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

    public ProductDTO getProduct() {
        return product;
    }

    public void setProduct(ProductDTO product) {
        this.product = product;
    }

    @Override
    public String toString() {
        return "ProductImageDTO{" +
                "imgID=" + imgID +
                ", image=" + Arrays.toString(image) +
                ", product=" + product +
                '}';
    }
}
