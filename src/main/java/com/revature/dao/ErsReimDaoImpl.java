package com.revature.dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.Transaction;

import com.revature.dao.model.ErsReim;
import com.revature.util.ConfigUtil;

public class ErsReimDaoImpl implements ErsReimDao {

	@Override
	public void addReimbursement(ErsReim er) {
		Session session = ConfigUtil.getSession();
		Transaction tx;
		try {
			tx = session.beginTransaction();
			session.save(er);
			tx.commit();
		}

		finally {
			

		}

	}

	@Override
	public List<ErsReim> getAll() {
		Session session = ConfigUtil.getSession();
		List<ErsReim> reims= session.createQuery("FROM ErsReim").list();
		return reims;
	}

	@Override
	public List<ErsReim> getAllByFalse() {
		Session session = ConfigUtil.getSession();
		List<ErsReim> reims= session.createQuery("FROM ErsReim E WHERE resolved = FALSE").list();
		return reims;
	}

	@Override
	public List<ErsReim> getAllByTrue() {
		// TODO Auto-generated method stub
		return null;
	}
	
	
		
	}


