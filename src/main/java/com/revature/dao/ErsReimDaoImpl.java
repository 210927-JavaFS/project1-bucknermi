package com.revature.dao;

import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.Transaction;

import com.revature.dao.model.ErsReim;
import com.revature.dao.model.ErsUser;
import com.revature.util.ConfigUtil;

public class ErsReimDaoImpl implements ErsReimDao {

	@Override
	public boolean addReim(ErsReim er) {
		try {
			Session session = ConfigUtil.getSession();
			Transaction tx;
			tx = session.beginTransaction();
			session.save(er);
			tx.commit();
			return true;
		} catch (HibernateException e) {
			e.printStackTrace();
			return false;
		}

	}

	@Override
	public boolean updateReim(ErsReim er) {
		try {
			Session session = ConfigUtil.getSession();
			Transaction tx;
			tx = session.beginTransaction();
			session.merge(er);
			tx.commit();
			return true;
		} catch (HibernateException e) {
			e.printStackTrace();
			return false;
		}

	}

	@Override
	public boolean deleteReim(ErsReim er) {
		try {
			Session session = ConfigUtil.getSession();
			Transaction tx;
			tx = session.beginTransaction();
			session.delete(er);
			tx.commit();
			return true;
		} catch (HibernateException e) {
			e.printStackTrace();
			return false;
		}

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
	public List<ErsReim> getAllByUserId(int id) {
		Session session = ConfigUtil.getSession();
		List<ErsReim> reims = session.createQuery("From ErsReim E where authorId =" + id).list();
		return reims;
	}

	@Override
	public ErsReim getReimById(int reimbursementId) {
		Session session = ConfigUtil.getSession();
		return session.get(ErsReim.class, reimbursementId);
	}

}
