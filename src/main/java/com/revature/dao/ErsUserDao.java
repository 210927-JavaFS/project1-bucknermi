package com.revature.dao;

import java.util.List;

import com.revature.dao.model.ErsUser;

public interface ErsUserDao {
	
	public int accountByLogin(String username, String password);
	
	public void addUser(ErsUser eu);
	
	public boolean testLogin(String username, String password);

}
