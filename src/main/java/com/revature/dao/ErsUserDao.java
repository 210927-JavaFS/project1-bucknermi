package com.revature.dao;

import java.util.List;

import com.revature.dao.model.ErsUser;

public interface ErsUserDao {
	
	public ErsUser accountByLogin(String username, String level);
	
	public boolean addUser(ErsUser eu);
	
	
	
	

}
