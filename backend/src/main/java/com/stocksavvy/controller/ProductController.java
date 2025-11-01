package com.stocksavvy.controller;

import com.stocksavvy.model.Product;
import com.stocksavvy.repository.ProductRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductController {
    private final ProductRepository repo;
    public ProductController(ProductRepository repo){ this.repo = repo; }

    @GetMapping
    public Page<Product> list(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "10") int size){
        Pageable p = PageRequest.of(page, size);
        List<Product> all = repo.findAll(p).getContent();
        long total = repo.count();
        return new PageImpl<>(all, p, total);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Product> get(@PathVariable Long id){
        return repo.findById(id).map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Product create(@RequestBody Product product){
        return repo.save(product);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Product> update(@PathVariable Long id, @RequestBody Product product){
        return repo.findById(id).map(p -> {
            p.setName(product.getName()); p.setSku(product.getSku()); p.setDescription(product.getDescription()); p.setPrice(product.getPrice()); p.setQuantity(product.getQuantity());
            return ResponseEntity.ok(repo.save(p));
        }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id){
        if(!repo.existsById(id)) return ResponseEntity.notFound().build();
        repo.deleteById(id); return ResponseEntity.noContent().build();
    }
}
