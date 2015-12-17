package com.peekapak.platform.publisher.web;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.gcs.json.JSONException;
import com.gcs.json.JSONObject;

/**
 * Servlet implementation class addUnit
 */
@WebServlet("/addUnit")
public class addUnit extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public addUnit() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		  JSONObject myData;
			try {
				myData = new JSONObject (request.getParameter("myData"));
				ProcessBuilder pb = new ProcessBuilder("node", "addMenu.js", myData.optString("unitName"));
				java.io.File file = new java.io.File ("C://peekaplatform/meta/Menu");
				pb.directory(file);
				pb.redirectErrorStream(true);
				Process process = pb.start();
				BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));
				String line;
				while ((line = reader.readLine()) != null)
				    System.out.println(line);
				process.waitFor();
				
				//////////////////////////////
				
				
				
				ProcessBuilder pb2 = new ProcessBuilder("node", "createActivity", myData.optString("unitName"));
				java.io.File file2 = new java.io.File ("C://peekaplatform/meta/Activity");
				pb2.directory(file2);
				pb2.redirectErrorStream(true);
				Process process2 = pb2.start();
				BufferedReader reader2 = new BufferedReader(new InputStreamReader(process.getInputStream()));
				String line2;
				while ((line2 = reader2.readLine()) != null)
				    System.out.println(line2);
				process2.waitFor();
				
				////////////////////////////////////////
				
				
				
				ProcessBuilder pb3 = new ProcessBuilder("node", "createLP", myData.optString("unitName"));
				java.io.File file3 = new java.io.File ("C://peekaplatform/meta/LP/Teacher");
				pb3.directory(file3);
				pb3.redirectErrorStream(true);
				Process process3 = pb3.start();
				BufferedReader reader3 = new BufferedReader(new InputStreamReader(process.getInputStream()));
				String line3;
				while ((line3 = reader3.readLine()) != null)
				    System.out.println(line3);
				process3.waitFor();
				
				process.destroy();
				process2.destroy();
				process3.destroy();
				
				
			} catch (JSONException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
			response.setContentType("text/plain");
			response.setCharacterEncoding("UTF-8");
			response.getWriter().write("Refresh to see new unit.");
	}

}
