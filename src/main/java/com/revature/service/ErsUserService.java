package com.revature.service;

import com.revature.dao.ErsUserDao;
import com.revature.dao.ErsUserDaoImpl;
import com.revature.dao.model.ErsUser;

public class ErsUserService {
	
	private static ErsUserDao eud = new ErsUserDaoImpl();
	
	public boolean addUserServ(ErsUser eu) {
		return eud.addUser(eu);
	}

}
