package com.peekapak.platform.publisher.web;

import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;

import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;

/**
 * Servlet implementation class fileUploadHome
 */
@WebServlet("/fileUploadHome")
@MultipartConfig
public class fileUploadHome extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public fileUploadHome() {
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
		 for(Part filePart: request.getParts()){
	    	 String fileName = filePart.getSubmittedFileName();
	 	    java.io.File uploads = new java.io.File("C:/peekaplatform/assets/homework/"+fileName);
	 	   java.io.File tempUploads = new java.io.File("C:/peekaplatform/assets/temp/homework/"+fileName);
	 	    
	 	    try (InputStream fileContent = filePart.getInputStream()) {
	 	    	System.out.println(fileContent);
	 	    	if (uploads.exists()){
	 	    		uploads.delete();
	 	    	}
	 	    	if(tempUploads.exists()){
	 	    		tempUploads.delete();
	 	    	}
	 	    	filePart.write("C:/peekaplatform/assets/lesson/"+fileName);
		 	    filePart.write("C:/peekaplatform/assets/temp/homework/"+fileName);
	 	    } catch (Exception e){
	 	    	e.printStackTrace();
	 	    }
	 	    System.out.println("SUCCESS");
	 	   
				
	    }
	    response.setContentType("text/html");
		response.setCharacterEncoding("UTF-8");
	    response.getWriter().println("<script type=\"text/javascript\">");
		response.getWriter().println("alert('Homework Uploaded!');");
		response.getWriter().println("</script>");
	}

}
