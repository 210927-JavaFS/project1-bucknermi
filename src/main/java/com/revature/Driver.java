package com.revature;

import com.revature.dao.ErsUserDao;
import com.revature.dao.ErsUserDaoImpl;
import com.revature.dao.model.ErsUser;

public class Driver {
	
	private static ErsUserDao ed = new ErsUserDaoImpl();
	
	public static void main(String[] args) {
		
		ErsUser eu = new ErsUser(1);
		ed.addUser(eu);
	}

}
