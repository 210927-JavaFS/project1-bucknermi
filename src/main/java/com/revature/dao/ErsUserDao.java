package com.revature.dao;

import java.util.List;

import com.revature.dao.model.ErsUser;

public interface ErsUserDao {
	
	public ErsUser accountByLogin(String username);
	
	public boolean addUser(ErsUser eu);
	
	
	
	

}
