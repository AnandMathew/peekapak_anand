package com.peekapak.platform.publisher;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

import javax.mail.Folder;

import org.apache.tomcat.jni.Directory;
import org.apache.tomcat.jni.File;

public class processBuilderNode {
	public static void main(String[] args) throws IOException, InterruptedException  {
		ProcessBuilder pb = new ProcessBuilder("node", "stagingExport.js", "nodeTest");
		//System.out.println (pb.directory());
		java.io.File file = new java.io.File ("C://apache-tomcat-8.0.22/webapps/publisher/scripts");
		pb.directory(file);
		pb.redirectErrorStream(true);
		Process process = pb.start();
		BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));
		String line;
		while ((line = reader.readLine()) != null)
		    System.out.println(line);
		process.waitFor();

	}
}
