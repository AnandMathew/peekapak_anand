package com.peekapak.platform.publisher.web;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

import javax.net.ssl.HostnameVerifier;
import javax.net.ssl.SSLSession;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.gcs.json.JSONException;
import com.gcs.json.JSONObject;
import com.sun.net.ssl.HttpsURLConnection;

/**
 * Servlet implementation class exportToStaging
 */
@WebServlet("/exportToStaging")
public class exportToStaging extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public exportToStaging() {
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
			ProcessBuilder pb = new ProcessBuilder("node", "stagingExport.js", myData.optString("ver"),
					myData.optString("userEmail"));
			java.io.File file = new java.io.File ("C://peekaplatform/meta");
			pb.directory(file);
			pb.redirectErrorStream(true);
			Process process = pb.start();
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
		
		System.out.println("Starting server to server call");
		URL url = new URL("https://contentstaging.peekapak.com/s2s/forceupdate");
		System.out.println("New URL instance");
		//BREAKS HERE!
		
		try {
			String s = System.getProperty("javax.net.ssl.trustStore");
			String y = System.getProperty("javax.net.ssl.trustStorePassword");
			String newLine = System.lineSeparator();
			System.out.println("TrustStore: " + s + newLine + "TrustStorePassword: " + y);
			 HttpURLConnection peekConn = (HttpURLConnection) url.openConnection();
			 
		        //peekConn.setReadTimeout(7*1000);
		        
		        
		        peekConn.setDoOutput(true);
		        peekConn.setDoInput(true);
		        
		        System.out.println("Connection established");
		        
		        peekConn.setRequestMethod("GET");
		        peekConn.addRequestProperty("x-peekapak-token", "daf3c089556f008c45fb90e93f55bc54");
		        
		        BufferedReader reader = new BufferedReader(new InputStreamReader(peekConn.getInputStream()));
		        StringBuilder stringBuilder = new StringBuilder();
		        
		        String line = null;
		        while ((line = reader.readLine()) != null)
		        {
		          stringBuilder.append(line + "\n");
		        }
		        System.out.println(stringBuilder);
		        
		        System.out.println(peekConn.getResponseCode());
		        if ( peekConn.getResponseCode() == 200 ) {
		        	response.getWriter().write("Meta files have peen pushed to the staging server.");
		        }
		        else {
		        	response.getWriter().write("Meta files have been pushed to s3 and the database has been updated"
		        			+ "but could not make a connection to the staging server rc = " + peekConn.getResponseCode());
		        }
		} catch(Exception e) {
			e.printStackTrace();
			response.getWriter().write("Meta files have been pushed to s3 and the database has been updated"
		        			+ "but could not make a connection to the staging server. Exception: " + e);
		}
		
       
		
		//response.getWriter().write("Meta files have peen pushed to the staging server.");*/
        
		//response.getWriter().write("Meta files have peen pushed to the staging server.");
	}

}
