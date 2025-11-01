package com.stocksavvy.controller;

import com.stocksavvy.model.Sale;
import com.stocksavvy.model.Product;
import com.stocksavvy.repository.SaleRepository;
import com.stocksavvy.repository.ProductRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;

@RestController
@RequestMapping("/api/sales")
public class SaleController {
    private final SaleRepository saleRepo;
    private final ProductRepository productRepo;
    public SaleController(SaleRepository saleRepo, ProductRepository productRepo){ this.saleRepo = saleRepo; this.productRepo = productRepo; }

    @PostMapping
    public ResponseEntity<?> createSale(@RequestBody Sale s){
        if(s.getProduct() == null || s.getProduct().getId() == null)
            return ResponseEntity.badRequest().body("productId missing");

        var prodOpt = productRepo.findById(s.getProduct().getId());

        if(prodOpt.isEmpty())
            return ResponseEntity.badRequest().body("product not found");

        Product prod = prodOpt.get();

        if(prod.getQuantity() < s.getQuantity())
            return ResponseEntity.badRequest().body("insufficient stock");

        // reduce stock
        prod.setQuantity(prod.getQuantity() - s.getQuantity());
        productRepo.save(prod);

        // complete sale
        s.setCreatedAt(LocalDateTime.now());
        s.setTotalPrice(s.getQuantity() * prod.getPrice());
        s.setProduct(prod);

        Sale saved = saleRepo.save(s);
        return ResponseEntity.ok(saved);
    }

}
