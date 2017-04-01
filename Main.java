import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		ArrayList<String> rssFeeds = new ArrayList<>();

		String fileName = "links.txt";
		String line = null;

		try {
			FileReader fileReader = new FileReader(fileName);

			// Always wrap FileReader in BufferedReader.
			BufferedReader bufferedReader = new BufferedReader(fileReader);

			while ((line = bufferedReader.readLine()) != null) {
				rssFeeds.add(line);
			}

			// Always close files.
			bufferedReader.close();
		} catch (FileNotFoundException ex) {
			System.out.println("Unable to open file '" + fileName + "'");
		} catch (IOException ex) {
			System.out.println("Error reading file '" + fileName + "'");
		}

		for (String s : rssFeeds) {
			RSSFeedParser parser = new RSSFeedParser(s);
			Feed feed = parser.readFeed();
			System.out.println(feed);
			for (FeedMessage message : feed.getMessages()) {
				System.out.println(message);
			}
		}

	}

}
