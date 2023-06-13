// fetch the data from public Wordpress API using fetch
// fetch and async function but we'll just use the .then promise to manipulate data and create elements on page
// once the data is fetched, response is converted to JSON format using .json() function
// then the data is take from the response and maniplated
fetch(
  "https://public-api.wordpress.com/rest/v1.1/sites/loanselectapiblog.wordpress.com/posts/"
)
  .then((response) => response.json())
  .then((data) => {
    // take the data and give it varible with meaningful name
    let postsObject = data;
    console.log(postsObject);
    // GETTING THE HTML DOCUMENT READY
    // HTML element that will be the parent element for the inputted data
    let parentElement = document.getElementById("news");
    // write the template string
    // page layout of elements that will be added to HTML document
    let pageLayout = "";
    // generate the required page layout based on the number of posts in the postObject
    for (let i = 0; i < postsObject.posts.length; i++) {
        // postTemplate links to generic 'news-post.html'
      pageLayout += "<a href='' onclick='collectPost(" + i + ")'><section class='post'><section><h2></h2></section><section><div></div></section></section></a>";
    }
    // add the final page layout to the HTML document by setting the inner HTML of the parent to contain
    // the page layout string
    parentElement.innerHTML = pageLayout;
    // ADDING DATA TO THE CREATED TEMPLATE
    // get the number of sections added with the 'post' className in the document
    numberOfPosts = document.getElementsByClassName("post");
    
    for (let i = 0; i < numberOfPosts.length; i++) {
      for (let j = 0; j < document.getElementsByClassName("post").length; j++) {
        // for each section, want to search for childNodes. contains() allows us
        // to find a child node within an element object.
        // the expression in contains() is just selecting the child node to search for
        // because the postTemplateString is structured as: <section>, <section>
        // we know that to select first <section> it has an index of 0. the ".children" property calls the list of
        // children in the object, and the index 0 will give the <section> in this list.
        if (
          document
            .getElementsByClassName("post")
            [i].contains(document.getElementsByClassName("post")[j].children[0])
        ) {
            // add the title
            document.getElementsByClassName("post")[j].children[0].children[0].innerHTML =
            postsObject.posts[j].title;
        }
        if (
          document
            .getElementsByClassName("post")
            [i].contains(document.getElementsByClassName("post")[j].children[1])
        ) {
            // add the summary
            document.getElementsByClassName("post")[j].children[1].children[0].innerHTML =
            postsObject.posts[j].excerpt;
            // create <img> element to append as child to the 
            // nested <section> element in the "post" section class
            let img = document.createElement('img');
            // set the image src
            img.src = postsObject.posts[j].featured_image
            // add alt atribute using title. splitting into array and then joining with '-
            img.alt = postsObject.posts[j].title.split(' ').join('-')
            if (postsObject.posts[j].featured_image != "") {
                document.getElementsByClassName("post")[j].children[1].appendChild(img)
            }
        }
      }
    }
    let date_arr = postsObject.posts[0].date.split('T')
    console.log(date_arr[0].split('-'));
  });


const collectPost = function(id) {
    document.cookie = "postID=" + id;
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
console.log(getCookie("postID"))