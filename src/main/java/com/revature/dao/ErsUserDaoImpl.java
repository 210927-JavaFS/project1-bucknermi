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
	public ErsUser accountByLogin(String username, String level) {
		Session session = ConfigUtil.getSession();
		List<ErsUser> eus = session.createQuery("FROM ErsUser E WHERE username = '"+username+ "' and UserRole = '" +level +"' ").list();
		if(eus.size() == 0) {
			ErsUser eu1 = new ErsUser();
			
					return eu1;
		}else {
		ErsUser eu = eus.get(0);
		return eu;}
		

	}

	@Override
	public boolean addUser(ErsUser eu) {
		try {
			Session session = ConfigUtil.getSession();
			Transaction tx;
			tx = session.beginTransaction();
			int username = eu.getPassword().hashCode();
			String newusername = String.valueOf(username);
			eu.setPassword(newusername);
			session.save(eu);
			tx.commit();
			return true;
		} catch (HibernateException e) {
			e.printStackTrace();
			return false;

		}

	}

	@Override
	public boolean deleteUser(ErsUser eu) {
		try {
			Session session = ConfigUtil.getSession();
			Transaction tx;
			tx = session.beginTransaction();
			session.delete(eu);
			tx.commit();
			return true;
		} catch (HibernateException e) {
			e.printStackTrace();
		return false;
	}
	
}
}
