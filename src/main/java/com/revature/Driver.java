package com.revature;

import java.util.List;

import com.revature.dao.ErsReimDao;
import com.revature.dao.ErsReimDaoImpl;
import com.revature.dao.ErsUserDao;
import com.revature.dao.ErsUserDaoImpl;
import com.revature.dao.model.ErsReim;
import com.revature.dao.model.ErsUser;
import com.revature.dao.model.ErsReim.ReimbursementType;

public class Driver {
	
	
	
	public static void main(String[] args) {
		ErsUser eu = new ErsUser();
		ErsReim er1 = new ErsReim(1, eu, eu, ReimbursementType.FOOD, 12, "hehe", false, false);
		ErsReimDao erd = new ErsReimDaoImpl();
		erd.addReim(er1);
		List<ErsReim> reims = erd.getAllByFalse();
		for(ErsReim er : reims) {
			System.out.println(er.toString());
		}
		
	}

}
