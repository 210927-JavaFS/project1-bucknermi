package com.revature.service;

import java.util.List;

import com.revature.dao.ErsReimDao;
import com.revature.dao.ErsReimDaoImpl;
import com.revature.dao.model.ErsReim;
import com.revature.dao.model.ErsUser;

public class ErsReimService {

	private ErsReimDao erd = new ErsReimDaoImpl();

	public void addReimServ(ErsReim er) {
		erd.addReim(er);
	}

	public void updateReimServ(ErsReim er) {
		erd.updateReim(er);
	}

	public void deleteReimServ(ErsReim er) {
		erd.deleteReim(er);
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

	public List<ErsReim> getAllByUserServ(ErsUser eu) {
		return erd.getAllByUser(eu);

	}
}
