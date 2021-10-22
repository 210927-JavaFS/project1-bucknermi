package com.revature.service;

import com.revature.dao.ErsUserDao;
import com.revature.dao.ErsUserDaoImpl;
import com.revature.dao.model.ErsUser;
import com.revature.dao.model.UserDTO;

public class ErsUserService {
	
	private static ErsUserDao eud = new ErsUserDaoImpl();
	
	public boolean addUserServ(ErsUser eu) {
		return eud.addUser(eu);
	}
	
	public boolean loginServ(UserDTO ud) {
	ErsUser eu = eud.accountByLogin(ud.username);
	
		
		if(eu!=null && ud.password.equals(eu.getPassword())) {
			
			return true;
		}
		System.out.println(eu.toString());
		return false;
	}

}
