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
    const postTemplateString =
      "<section class='post'><section><h2></h2></section><section><div></div></section></section>";
    // page layout of elements that will be added to HTML document
    let pageLayout = "";
    // generate the required page layout based on the number of posts in the postObject
    for (let i = 0; i < postsObject.posts.length; i++) {
      pageLayout += postTemplateString;
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
        // because the postTemplateString is structured as: <h2>, <section>
        // we know that to select <h2> it has an index of 0. the ".children" property calls the list of
        // children in the object, and the index 0 will give the <h2> in this list.
        if (
          document
            .getElementsByClassName("post")
            [i].contains(document.getElementsByClassName("post")[i].children[0])
        ) {
          document.getElementsByClassName("post")[j].children[0].children[0].innerHTML =
            postsObject.posts[j].title;
        }
        if (
          document
            .getElementsByClassName("post")
            [i].contains(document.getElementsByClassName("post")[i].children[1])
        ) {
          document.getElementsByClassName("post")[j].children[1].children[0].innerHTML =
            postsObject.posts[j].excerpt;
        }
        if (
            document
              .getElementsByClassName("post")
              [i].contains(document.getElementsByClassName("post")[j].children[1])
          ) {
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
    console.log(postsObject.posts[0].date.split('T'));
  });
