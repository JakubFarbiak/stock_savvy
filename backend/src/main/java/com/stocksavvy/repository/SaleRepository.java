package com.stocksavvy.repository;

import com.stocksavvy.model.Sale;
import org.springframework.data.jpa.repository.JpaRepository;
import java.time.LocalDateTime;
import org.springframework.data.jpa.repository.Query;

public interface SaleRepository extends JpaRepository<Sale, Long> {
    @Query("SELECT SUM(s.totalPrice) FROM Sale s WHERE s.createdAt BETWEEN :from AND :to")
    Double totalSalesBetween(LocalDateTime from, LocalDateTime to);
}
