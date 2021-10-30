package com.revature.test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.List;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.junit.jupiter.api.TestInstance.Lifecycle;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.junit.jupiter.api.TestMethodOrder;
import org.junit.jupiter.api.MethodOrderer.OrderAnnotation;
import org.junit.jupiter.api.Order;

import com.revature.dao.model.ErsReim;
import com.revature.dao.model.ErsUser;
import com.revature.dao.model.UserDTO;
import com.revature.dao.model.ErsReim.ReimbursementType;
import com.revature.service.ErsReimService;


@TestInstance(Lifecycle.PER_CLASS)
@TestMethodOrder(OrderAnnotation.class)

public class ErsReimTest {
	
	
	
	ErsReimService ers = new ErsReimService();
	ErsReim er = new ErsReim(null, null, ReimbursementType.OTHER, 10,
			"test", false, false);
	
	private static Logger log = LoggerFactory.getLogger(ErsReimTest.class);

	
	@Test
	@Order(1)
	public void addReimTest() {
		assertTrue(ers.addReimServ(er));
		log.info("First test is beginning");
		
	}
	
	@Test
	@Order(2)
	public void updateReimTest() {
		er.setDescription("test1");
		assertTrue(ers.updateReimServ(er));
		log.info("update test");
	}
	
	@Test
	@Order(3)
	public void getReimByIdTest() {
		ErsReim er1 = ers.GetReimByIdServ(er.getReimbursementId());
		assertEquals(er1.getReimbursementId(), er.getReimbursementId());
		log.info("get by Id Test");
	}
	
	@Test
	@Order(4)
	public void getAllByUserIdTest() {
		List<ErsReim> list = ers.getAllByUserIdServ(-1);
		assertEquals(list.size(), 0);
		log.info("get by user Id test");
	}
	
	@Test
	@Order(5)
	public void getAllReimsTest() {
		List<ErsReim> listAll = ers.getAllServ();
		List<ErsReim> listFalse = ers.getAllByFalseServ();
		List<ErsReim> listTrue = ers.getAllByTrueServ();
		assertEquals(listAll.size(), listFalse.size()+listTrue.size());
		log.info("get all test");
	}
	
	@AfterAll
	public void deleteReim() {
		ers.deleteReimServ(er);
		log.info("Testing is ending");
		
	}
	
	
}
