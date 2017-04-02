//global includes article object
//article has img(), text(), and link();
//array has to be sorted
var topArticles = [];
var articles = fetchData();

class article{
  constructor(img, text, link){
    this.img = img;
    this.text = text;
    this.link = link;
  }
}

for(var i=0; i<3; i++){
  topArticles.push(new article("images/logo.png", "Sample text", "Sample link"));
}

$(document).ready(function() {
  $("#searchButton").on("click", search);
  $(".card").on("click", function(event){
    expandArticle(this);
  });
});

function search(){
  //update all 3 stories boards
  //headline
  console.log(topArticles[0].img);
  $("#headline-img").attr("src", topArticles[0].img);
  $("#headline-text").html(topArticles[0].text);
  //side story 1
  $("#side1-img").attr("src", topArticles[1].img);
  $("#side1-text").html(topArticles[1].text);
  //side story 2
  $("#side2-img").attr("src", topArticles[2].img);
  $("#side2-text").html(topArticles[2].text);
}

function expandArticle(obj){
  var id = obj.id;
  //open into new page with article
    window.location = "article.html";
  if(id == "headline-card"){
    updateArticle(topArticles[0]);
  } else if(id = "side1-card"){
    updateArticle(topArticles[1]);
  } else if(id == "side2-card"){
    updateArticle(topArticles[2]);
  }
}


//manages article.html Parameter obj is article type
function updateArticle(obj){

}

//2d array sort PUTS into top 3
function sort(articles){

}

//init. fetch all stories