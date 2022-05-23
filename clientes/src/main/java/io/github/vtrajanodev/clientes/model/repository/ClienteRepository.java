package io.github.vtrajanodev.clientes.model.repository;

import io.github.vtrajanodev.clientes.model.entity.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClienteRepository extends JpaRepository<Cliente, Integer> {
}