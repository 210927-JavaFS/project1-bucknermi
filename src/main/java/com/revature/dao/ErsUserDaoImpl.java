package com.revature.dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.Transaction;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.revature.dao.model.ErsUser;

import com.revature.util.ConfigUtil;

public class ErsUserDaoImpl implements ErsUserDao {
	private static Logger log = LoggerFactory.getLogger(ErsUserDaoImpl.class);

	@Override
	public int accountByLogin(String username, String password) {
		Session session = ConfigUtil.getSession();
		
		return 0;
	}

	@Override
	public void addUser(ErsUser eu) {
		Session session = ConfigUtil.getSession();
		Transaction tx;
		try {
			tx = session.beginTransaction();
			session.save(eu);
			tx.commit();
		}

		finally {
			session.close();

		}

	}
}
