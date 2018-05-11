/* Build a Wikipedia Viewer - Preliminary Things To Do: 
1. I can search Wikipedia entries in a search box and see the resulting Wikipedia entries. Things needed:
  a. Form to input search.
  b. Button to initiate the search.
2. I can click a button to see a random Wikipedia entry. */

$(document).ready(function() {
    
      /* When the Search button is clicked, get and store the form input value in the searchInput variable and pass that variable to the Wikipedia API link*/
      $('.searchButton').on('click', function() {
        $('.results').empty();
        var searchInput = $('.searchInput').val();
        var wikiapi = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${searchInput}&limit=10&namespace=0&format=json&callback=?`;
        
        /* Loops through the number of headers and dumps the information for the headers, description and links to the HTML */
        $.getJSON(wikiapi, function(json) {
          if (json[1].length === 0) {
            $('.results').append('<h1>No matches found</h1>');
          }
          for (var i = 0; i < json[1].length; i++) {
              $('.results').append(`<li><h1><a href=${json[3][i]}>${json[1][i]}</a></h1><p>${json[2][i]}</p></li>`);
          }
        });
      });
    });