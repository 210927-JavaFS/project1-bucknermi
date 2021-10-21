package com.revature.controller;

import java.util.List;

import com.revature.dao.model.ErsReim;
import com.revature.service.ErsReimService;

import io.javalin.Javalin;
import io.javalin.http.Handler;

public class ReimController implements Controller {

	private ErsReimService rs = new ErsReimService();

	public Handler getAllReims = (ctx) -> {
		List<ErsReim> list = rs.getAllServ();

		ctx.json(list);
		ctx.status(200);
	};

	public Handler getAllFalseReims = (ctx) -> {
		List<ErsReim> list = rs.getAllByFalseServ();

		ctx.json(list);
		ctx.status(200);
	};

	public Handler getAllTrueReims = (ctx) -> {
		List<ErsReim> list = rs.getAllByTrueServ();

		ctx.json(list);
		ctx.status(200);
	};

	public Handler addReims = (ctx) -> {
		ErsReim er = ctx.bodyAsClass(ErsReim.class);
		if (rs.addReimServ(er)) {
			ctx.status(201);
		} else {
			ctx.status(400);
		}
	};

	public Handler updateReims = (ctx) -> {
		ErsReim er = ctx.bodyAsClass(ErsReim.class);
		if (rs.updateReimServ(er)) {
			ctx.status(201);
		} else {
			ctx.status(400);
		}
	};

	public Handler getReimsById = (ctx) -> {
		String idString = ctx.pathParam("userId");
		try {
			int id = Integer.parseInt(idString);
			List<ErsReim> list = rs.getAllByUserIdServ(id);

			ctx.json(list);
			ctx.status(200);
		} catch (NumberFormatException e) {
			e.printStackTrace();
			ctx.status(406);
		}
	};

	@Override
	public void addRoutes(Javalin app) {
		app.get("/ErsReim", this.getAllReims);
		app.get("/ErsReim/False", this.getAllFalseReims);
		app.get("/ErsReim/True", this.getAllTrueReims);
		app.post("ErsReim", this.addReims);
		app.put("/ErsReim", this.updateReims);
		app.get("ErsReim/:userId", this.getReimsById);

	}

}
