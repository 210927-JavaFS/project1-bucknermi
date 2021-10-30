package com.revature.test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.junit.jupiter.api.TestMethodOrder;
import org.junit.jupiter.api.MethodOrderer.OrderAnnotation;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.TestInstance.Lifecycle;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.revature.dao.model.ErsUser;
import com.revature.dao.model.UserDTO;
import com.revature.dao.model.ErsUser.UserRole;
import com.revature.service.ErsUserService;

import jdk.internal.org.jline.utils.Log;

@TestInstance(Lifecycle.PER_CLASS)
@TestMethodOrder(OrderAnnotation.class)
public class ErsUserTester {
	
	ErsUserService eus = new ErsUserService();
	ErsUser eu = new ErsUser("test", "test", "test", "test", "test",
			UserRole.EMPLOYEE);
	UserDTO ud = new UserDTO(eu.getUsername(), eu.getPassword(), eu.getUserRole().toString());
	
	private static Logger log = LoggerFactory.getLogger(ErsUserTester.class);

	
	
	@Test
	@Order(1)
	public void addUserTest() {
		assertTrue(eus.addUserServ(eu));
		log.info("add user test");
	}
	
	@Test
	@Order(2)
	public void loginTest() {
		assertTrue(eus.loginServ(ud));
		log.info("login test");
				
	}
	
	@Test
	@Order(3)
	public void getUserTest() {
		assertEquals(eus.getUserServ(ud),eu);
		log.info("get user test");
	}
	
	@AfterAll 
	public void deleteUser() {
		eus.deleteUserServ(eu);
		log.info("testing is ending");
	}
	

}
