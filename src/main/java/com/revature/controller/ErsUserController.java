package com.revature.controller;

import com.revature.dao.model.ErsUser;
import com.revature.service.ErsUserService;

import io.javalin.Javalin;
import io.javalin.http.Handler;

public class ErsUserController implements Controller{

	private ErsUserService eus = new ErsUserService();
	
	public Handler addUser = (ctx) -> {
		ErsUser eu = ctx.bodyAsClass(ErsUser.class);
		if (eus.addUserServ(eu)) {
			ctx.status(201);
		} else {
			ctx.status(400);
		}
	};
	
	@Override
	public void addRoutes(Javalin app) {
		app.post("/ErsUser", this.addUser);
		
	}

}
