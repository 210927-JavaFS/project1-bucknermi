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
	
	public boolean deleteUserServ(ErsUser eu) {
		return eud.deleteUser(eu);
	}
	
	public boolean loginServ(UserDTO ud) {
	ErsUser eu = eud.accountByLogin(ud.username, ud.level);
	
		int password = ud.password.hashCode();
		String password1 = String.valueOf(password);
		if(eu!=null && password1.equals(eu.getPassword())) {
			
			return true;
		}
		System.out.println(eu.toString());
		return false;
	}
	
	public ErsUser getUserServ(UserDTO ud) {
		ErsUser eu = eud.accountByLogin(ud.username, ud.level);
		return eu;
	}

}
