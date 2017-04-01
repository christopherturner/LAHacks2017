import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;

public class Backend {
    ArrayList<String> links = new ArrayList<>();
    
    public Backend (){
        
        String fileName = "links.txt";
        String line = null;
        
        try {
            FileReader fileReader = new FileReader(fileName);
            
            // Always wrap FileReader in BufferedReader.
            BufferedReader bufferedReader = new BufferedReader(fileReader);
            
            while ((line = bufferedReader.readLine()) != null) {
                links.add(line);
            }
            
            // Always close files.
            bufferedReader.close();
        } catch (FileNotFoundException ex) {
            System.out.println("Unable to open file '" + fileName + "'");
        } catch (IOException ex) {
            System.out.println("Error reading file '" + fileName + "'");
        }
        
        /*
        for (String s : rssFeeds) {
            RSSFeedParser parser = new RSSFeedParser(s);
            Feed feed = parser.readFeed();
            System.out.println(feed);
            for (FeedMessage message : feed.getMessages()) {
                System.out.println(message);
            }
        }
        */
    }
    
    public ArrayList<String> search(String term){
        ArrayList<String> results = new ArrayList<>();
        
        for(int i = 0; i < links.size(); i++){
            if(links.get(i).contains(term)){
                results.add(links.get(i));
            }
        }
        
        return results;
    }
}
