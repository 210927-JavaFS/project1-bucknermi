package com.revature;

import com.revature.controller.Controller;
import com.revature.controller.ReimController;

import io.javalin.Javalin;

public class App {
	
	private static Javalin app;
	public static void main(String[] args) {
		
		app = Javalin.create();
		configure(new ReimController());
		app.start();
	}
	
	public static void configure(Controller...controllers) {
		for(Controller c: controllers) {
			c.addRoutes(app);
		}
	}
	
	
	

}
