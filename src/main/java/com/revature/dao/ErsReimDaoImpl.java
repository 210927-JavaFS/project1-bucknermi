package com.revature.dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.Transaction;

import com.revature.dao.model.ErsReim;
import com.revature.dao.model.ErsUser;
import com.revature.util.ConfigUtil;

public class ErsReimDaoImpl implements ErsReimDao {

	@Override
	public void addReim(ErsReim er) {
		Session session = ConfigUtil.getSession();
		Transaction tx;
		tx = session.beginTransaction();
		session.save(er);
		tx.commit();

	}

	@Override
	public void updateReim(ErsReim er) {
		Session session = ConfigUtil.getSession();
		Transaction tx;
		tx = session.beginTransaction();
		session.merge(er);
		tx.commit();

	}

	@Override
	public void deleteReim(ErsReim er) {
		Session session = ConfigUtil.getSession();
		Transaction tx;
		tx = session.beginTransaction();
		session.delete(er);
		tx.commit();

	}

	@Override
	public List<ErsReim> getAll() {
		Session session = ConfigUtil.getSession();
		List<ErsReim> reims = session.createQuery("FROM ErsReim").list();
		return reims;
	}

	@Override
	public List<ErsReim> getAllByFalse() {
		Session session = ConfigUtil.getSession();
		List<ErsReim> reims = session.createQuery("FROM ErsReim E WHERE resolved = FALSE").list();
		return reims;
	}

	@Override
	public List<ErsReim> getAllByTrue() {
		Session session = ConfigUtil.getSession();
		List<ErsReim> reims = session.createQuery("FROM ErsReim E WHERE resolved = TRUE").list();
		return reims;
	}

	@Override
	public List<ErsReim> getAllByUser(ErsUser eu) {
		Session session = ConfigUtil.getSession();
		int id = eu.getUser_id();
		List<ErsReim> reims = session.createQuery("From ErsReim E where user_id ="+id).list();
		return reims;
	}

}