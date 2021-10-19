package com.revature.dao;

import java.util.List;

import com.revature.dao.model.ErsUser;

public interface ErsUserDao {
	
	public List<ErsUser> accountByLogin(String username, String password);
	
	public void addUser(ErsUser eu);

}
