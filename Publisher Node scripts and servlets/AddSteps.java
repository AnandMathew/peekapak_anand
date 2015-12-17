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
 * Servlet implementation class AddSteps
 */
@WebServlet("/AddSteps")
public class AddSteps extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AddSteps() {
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
				ProcessBuilder pbl = new ProcessBuilder("node", "addSteps.js", myData.optString("activity"));
				java.io.File file = new java.io.File ("C://peekaplatform/meta/Activity");
				pbl.directory(file);
				pbl.redirectErrorStream(true);
				Process process = pbl.start();
				BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));
				String line;
				while ((line = reader.readLine()) != null)
				    System.out.println(line);
				process.waitFor();
				
			} catch (JSONException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
			
			//System.out.println (pb.directory());
			
			response.setContentType("text/plain");
			response.setCharacterEncoding("UTF-8");
			response.getWriter().write("Step added!");
	}

}
