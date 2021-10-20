package com.revature;

import java.util.List;

import com.revature.dao.ErsReimDao;
import com.revature.dao.ErsReimDaoImpl;
import com.revature.dao.ErsUserDao;
import com.revature.dao.ErsUserDaoImpl;
import com.revature.dao.model.ErsReim;
import com.revature.dao.model.ErsUser;

public class Driver {
	
	
	
	public static void main(String[] args) {
		ErsReimDao erd = new ErsReimDaoImpl();
		List<ErsReim> reims = erd.getAllByFalse();
		for(ErsReim er : reims) {
			System.out.println(er.toString());
		}
		
	}

}
