package autodeploy_deleteconfigs;

import java.awt.List;
import java.io.File;
import java.io.FilenameFilter;
import java.util.ArrayList;

public class deleteFile {
	public static void Main(String [] args)
	{
		File folder = new File("c://tester");
        File[] listOfFiles = folder.listFiles();
        ArrayList<String> temps = new ArrayList<String>();
        String fileNameWithOutExt = null;
        
        for (File file : listOfFiles)
        {
        	if (file.getName().endsWith(".remove"))
        	{
        		fileNameWithOutExt = file.getName().substring(0, file.getName().lastIndexOf('.'));
        		temps.add(fileNameWithOutExt);
        		file.delete();
        	}
        }
        
        for (int i = 0; i < temps.size(); i++)
        {
        	for(int j = 0; j < listOfFiles.length; j++)
        	{
        		File file2 = listOfFiles[j];
        		if (file2.getName() == temps.get(i))
        		{
        			file2.delete();
        		}
        	}
        }
        
        
            
	}

}
