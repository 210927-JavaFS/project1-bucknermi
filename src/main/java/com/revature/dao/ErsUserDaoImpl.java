package com.revature.dao;

import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.revature.dao.model.ErsReim;
import com.revature.dao.model.ErsUser;

import com.revature.util.ConfigUtil;

public class ErsUserDaoImpl implements ErsUserDao {


	@Override
	public ErsUser accountByLogin(String username) {
		Session session = ConfigUtil.getSession();
		return session.get(ErsUser.class, username);

	}

	@Override
	public boolean addUser(ErsUser eu) {
		try {
			Session session = ConfigUtil.getSession();
			Transaction tx;
			tx = session.beginTransaction();
			session.save(eu);
			tx.commit();
			return true;
		} catch (HibernateException e) {
			e.printStackTrace();
			return false;

		}

	}

	@Override
	public List<ErsUser> testLogin(String username, String password) {
		Session session = ConfigUtil.getSession();
		List<ErsUser> eus = session.createQuery("FROM ErsUser E WHERE E.username ="+username+ "and E.password =" +password).list();
		return eus;

	}
}
