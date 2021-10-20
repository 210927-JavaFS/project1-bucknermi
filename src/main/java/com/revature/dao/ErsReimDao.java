package com.revature.dao;

import java.util.List;

import com.revature.dao.model.ErsReim;

public interface ErsReimDao {
	
	public void addReimbursement(ErsReim er);
	
	public List<ErsReim> getAll();
	
	public List<ErsReim> getAllByFalse();
	
	public List<ErsReim> getAllByTrue();
	
	
}
