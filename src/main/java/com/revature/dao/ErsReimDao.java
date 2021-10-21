package com.revature.dao;

import java.util.List;

import com.revature.dao.model.ErsReim;
import com.revature.dao.model.ErsUser;

public interface ErsReimDao {
	
	public boolean addReim(ErsReim er);
	
	public boolean updateReim(ErsReim er);
	
	public boolean deleteReim(ErsReim er);
	
	public List<ErsReim> getAll();
	
	public List<ErsReim> getAllByFalse();
	
	public List<ErsReim> getAllByTrue();
	
	public List <ErsReim> getAllByUserId(int id);
	
	public ErsReim getReimById(int id);
		
}
