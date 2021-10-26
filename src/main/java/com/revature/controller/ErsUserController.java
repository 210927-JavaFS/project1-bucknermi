package com.revature.controller;

import com.revature.dao.model.ErsUser;
import com.revature.dao.model.UserDTO;
import com.revature.service.ErsUserService;

import io.javalin.Javalin;
import io.javalin.http.Handler;

public class ErsUserController implements Controller{

	private ErsUserService eus = new ErsUserService();
	
	public Handler addUser = (ctx) -> { 
		if (ctx.req.getSession(false) != null) {
		ErsUser eu = ctx.bodyAsClass(ErsUser.class);
		if (eus.addUserServ(eu)) {
			ctx.status(201);
		} else {
			ctx.status(400);
		} }
		else {
			ctx.status(401);
		}
	};
	
	public Handler  loginAttempt = (ctx) -> {
		if (ctx.req.getSession(false) != null) {
		UserDTO ud = ctx.bodyAsClass(UserDTO.class);
			if(eus.loginServ(ud)) {
				ctx.req.getSession();
				ctx.status(200);
				}
			else {
				ctx.req.getSession().invalidate();
				ctx.status(400);
			} }
		else {
			ctx.status(401);
		}
	};
	
	public Handler getUser = (ctx) -> {
		if (ctx.req.getSession(false) != null) {
		UserDTO ud = ctx.bodyAsClass(UserDTO.class);
		ErsUser eu = eus.getUserServ(ud);
		ctx.json(eu);
		ctx.status(200); }
		else {
			ctx.status(401);
		}
	};
	
	@Override
	public void addRoutes(Javalin app) {
		app.post("/ErsUser", this.addUser);
		app.post("/Login", this.loginAttempt);
		app.post("/ErsUser/Proxy" , this.getUser);
	}

}
