package com.peekapak.platform.publisher;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.InputStream;

import com.gcs.json.JSONArray;
import com.gcs.json.JSONException;
import com.gcs.json.JSONObject;
import com.gcs.json.JSONTokener;

public class newUnit {
	public static void main (String args[]) throws FileNotFoundException, JSONException {
		
		ReadAndWrite();
	}
	public static void ReadAndWrite () throws FileNotFoundException, JSONException {
		
		File [] files = new File ("C://peekaplatform/ContentMeta/Menu/Publisher").listFiles();
		try {
			for (File file: files) {
				FileReader fr = new FileReader(file);
				JSONTokener tok =  new JSONTokener(fr);
				JSONObject jobj = new JSONObject(tok);
				String newUnit = '{' +  "label: \"Respect\"," +
                    "title: \"Lesson Plan on Self-Regulation for Grade 1," +
                    "active: true," +
                    "type: \"lessonPlan\"," +
                    "url: \"lessonPlanner\"," +
                    "params:{id:\"respect-1\", inClass:true}," +
                    "cef:[\"A-1\", \"A-2\", \"U-1\", \"V-2\", \"U-3\", \"V-1\", \"U-2\"]," +
                    "headerImg: \"images/homePageHeaders/respect.png" + "}";
				System.out.println(newUnit);
				JSONObject newUnitObj = new JSONObject(newUnit);
           
				JSONArray inClassUnits = new JSONArray(jobj.optString("inClassUnits"));
				inClassUnits.put(newUnitObj);
				jobj.put("inClassUnits", inClassUnits);
				System.out.println(jobj);
			}
		} catch (FileNotFoundException e) {
			e.printStackTrace();
			
		} catch (JSONException e) {
			e.printStackTrace();	
		}
	}
}
