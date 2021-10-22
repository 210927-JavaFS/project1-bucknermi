package com.revature;

import com.revature.controller.Controller;
import com.revature.controller.ErsUserController;
import com.revature.controller.ReimController;

import io.javalin.Javalin;
import io.javalin.http.staticfiles.Location;

public class App {
	
	private static Javalin app;
	public static void main(String[] args) {
		
		app = Javalin.create((config)->{
			config.addStaticFiles("/Static", Location.CLASSPATH);
		});
		configure(new ReimController(), new ErsUserController());
		app.start();
	}
	
	public static void configure(Controller...controllers) {
		for(Controller c: controllers) {
			c.addRoutes(app);
		}
	}
	
	
	

}
