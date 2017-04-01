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

//JSON extraction

// package Json;
// import java.io.BufferedReader;
// import java.io.FileNotFoundException;
// import java.io.FileReader;
// import java.io.IOException;
// import java.util.ArrayList;

// import org.json.simple.JSONArray;
// import org.json.simple.JSONObject;

// import java.io.FileWriter;
// import java.io.IOException;

// public class Backend {
//     static ArrayList<String> links = new ArrayList<>();
    
//     public Backend (){
        
//         String fileName = "links.txt";
//         String line = null;
        
//         try {
//             FileReader fileReader = new FileReader(fileName);
            
//             // Always wrap FileReader in BufferedReader.
//             BufferedReader bufferedReader = new BufferedReader(fileReader);
            
//             while ((line = bufferedReader.readLine()) != null) {
//                 links.add(line);
//             }
            
//             // Always close files.
//             bufferedReader.close();
//         } catch (FileNotFoundException ex) {
//             System.out.println("Unable to open file '" + fileName + "'");
//         } catch (IOException ex) {
//             System.out.println("Error reading file '" + fileName + "'");
//         }
        
        
//         for (String s : rssFeeds) {
//             RSSFeedParser parser = new RSSFeedParser(s);
//             Feed feed = parser.readFeed();
//             System.out.println(feed);
//             for (FeedMessage message : feed.getMessages()) {
//                 System.out.println(message);
//             }
//         }
        
//     }
    
//     public ArrayList<String> search(String term){
//         ArrayList<String> results = new ArrayList<>();
        
//         for(int i = 0; i < links.size(); i++){
//             if(links.get(i).contains(term)){
//                 results.add(links.get(i));
//             }
//         }
        
//         return results;
//     }
    
//     public static void main(String[] args){
//         JSONObject obj = new JSONObject();
//         JSONArray list = new JSONArray();
//         Backend listObj = new Backend();
//         for(String str:listObj.links){
//             list.add(str);
//         }
//         obj.put("links", list);

//         try (FileWriter file = new FileWriter("C:\\Users\\Public\\test.json")) {

//             file.write(obj.toJSONString());
//             file.flush();

//         } catch (IOException e) {
//             e.printStackTrace();
//         }

//         System.out.print(obj);
//     }
// }

