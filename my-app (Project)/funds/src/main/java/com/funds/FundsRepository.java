package com.funds;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface FundsRepository extends CrudRepository<Funds, Integer> {
	
}
