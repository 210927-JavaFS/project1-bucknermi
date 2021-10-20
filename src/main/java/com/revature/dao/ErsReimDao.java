package com.revature.dao;

import java.util.List;

import com.revature.dao.model.ErsReim;
import com.revature.dao.model.ErsUser;

public interface ErsReimDao {
	
	public void addReim(ErsReim er);
	
	public void updateReim(ErsReim er);
	
	public void deleteReim(ErsReim er);
	
	public List<ErsReim> getAll();
	
	public List<ErsReim> getAllByFalse();
	
	public List<ErsReim> getAllByTrue();
	
	public List <ErsReim> getAllByUser(ErsUser eu);
	
	
	
	
	
	
}
