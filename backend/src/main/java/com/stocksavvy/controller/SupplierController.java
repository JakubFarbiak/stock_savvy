package com.stocksavvy.controller;

import com.stocksavvy.model.Supplier;
import com.stocksavvy.repository.SupplierRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/suppliers")
public class SupplierController {
    private final SupplierRepository repo;
    public SupplierController(SupplierRepository repo){ this.repo = repo; }

    @GetMapping
    public List<Supplier> list(){ return repo.findAll(); }
    @GetMapping("/{id}")
    public ResponseEntity<Supplier> get(@PathVariable Long id){ return repo.findById(id).map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build()); }
    @PostMapping
    public Supplier create(@RequestBody Supplier s){ return repo.save(s); }
    @PutMapping("/{id}")
    public ResponseEntity<Supplier> update(@PathVariable Long id, @RequestBody Supplier s){ return repo.findById(id).map(old->{ old.setName(s.getName()); old.setContactEmail(s.getContactEmail()); old.setPhone(s.getPhone()); old.setAddress(s.getAddress()); return ResponseEntity.ok(repo.save(old)); }).orElse(ResponseEntity.notFound().build()); }
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id){ if(!repo.existsById(id)) return ResponseEntity.notFound().build(); repo.deleteById(id); return ResponseEntity.noContent().build(); }
}
