package com.revature.util;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

public class ConfigurationUtil {
	
	private static SessionFactory sessionFactory = new Configuration().configure("hibernate.cfg.xml").buildSessionFactory();
	
	private static Session session; 
	
	public static Session getSession() {
		if(session==null) {
			session = sessionFactory.openSession();
		}
		return session;
	}
	
	public static void closeSession() {
		if(session!=null) {
			session.close();
		}
		session=null;
	}

}

