var favoriteWebsite1;
var favoriteWebsite2;
var favoriteWebsite3;

favoriteWebsite1 = prompt("What's the URL of your favorite website?");
favoriteWebsite2 = prompt("What's the URL of your second favorite website?");
favoriteWebsite3 = prompt("What's the URL of your third favorite website?");

document.write("<table border = 3>", "<th> Your favorite Websites </th>",
    "<tr>", "<td>", "<a href=http://" + favoriteWebsite1 + "> Your first favorite website</a>",
    "</td>","<tr>");
document.write("<tr><td>" +
    "<a href=http://" + favoriteWebsite2 + "> Your second favorite website</a>" +
    "</td></tr>");
document.write("<tr><td>" +
    "<a href=http://" + favoriteWebsite3 + "> Your third favorite website</a>" +
    "</td></tr></table>");