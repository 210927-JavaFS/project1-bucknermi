package com.revature;

import com.revature.controller.Controller;
import com.revature.controller.ErsUserController;
import com.revature.controller.ReimController;

import io.javalin.Javalin;
import io.javalin.http.staticfiles.Location;

public class Driver {
	
	private static Javalin app;
	public static void main(String[] args) {
		
		app = Javalin.create((config)->{
			config.addStaticFiles("/Static", Location.CLASSPATH);
		});
		app.before(ctx->ctx.header("Access-Control-Allow-Origin", "http://project1-bucknermi.s3-website.us-east-2.amazonaws.com"));
		app.before(ctx -> ctx.header("Access-Control-Allow-Credentials", "true"));
		app.before(ctx -> ctx.header("Access-Control-Allow-Headers", "Content-Type, Authorization"));
		app.before(ctx -> ctx.header("Set-Cookie", "SameSite=None"));
		configure(new ReimController(), new ErsUserController());
		app.start();
	}
	
	public static void configure(Controller...controllers) {
		for(Controller c: controllers) {
			c.addRoutes(app);
		}
	}
	
	
	

}
