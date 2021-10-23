package com.revature.service;

import java.util.List;

import com.revature.dao.ErsReimDao;
import com.revature.dao.ErsReimDaoImpl;
import com.revature.dao.model.ErsReim;
import com.revature.dao.model.ErsUser;

public class ErsReimService {

	private ErsReimDao erd = new ErsReimDaoImpl();

	public boolean addReimServ(ErsReim er) {
		return erd.addReim(er);
	}

	public boolean updateReimServ(ErsReim er) {
		return erd.updateReim(er);
	}

	public boolean deleteReimServ(ErsReim er) {
		return erd.deleteReim(er);
	}

	public List<ErsReim> getAllServ() {
		return erd.getAll();
	}

	public List<ErsReim> getAllByFalseServ() {
		return erd.getAllByFalse();
	}

	public List<ErsReim> getAllByTrueServ() {
		return erd.getAllByTrue();
	}

	public List<ErsReim> getAllByUserIdServ(int id) {
		return erd.getAllByUserId(id);

	}
	
	public ErsReim GetReimByIdServ(int id) {
		return erd.getReimById(id);
	}
}
