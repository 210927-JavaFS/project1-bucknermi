package com.revature.dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.Transaction;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.revature.dao.model.ErsUser;

import com.revature.util.ConfigurationUtil;

public class ErsUserDaoImpl implements ErsUserDao {
	private static Logger log = LoggerFactory.getLogger(ErsUserDaoImpl.class);

	@Override
	public List<ErsUser> accountByLogin(String username, String password) {

		return null;
	}

	@Override
	public void addUser(ErsUser eu) {
		Session session = ConfigurationUtil.getSession();
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
