<!DOCTYPE html>
<html>
<head>
  <title>jQuery Portfolio</title>
  <script type="text/javascript" src="js/jquery-1.11.1.min.js"></script>
  <script type="text/javascript" src="js/script.js"></script>
  <script type="text/javascript" src="js/tags.js"></script>
  <script type="text/javascript" src ="js/jquery-ui.min.js"></script>
  <link rel="stylesheet" type="text/css" href="css/styles.css">
</head>
<body>
<header>
  <div id="menu">
    <h2>jQuery Portfolio</h2>
    <input id="search" style ="float:right;"type="text" placeholder ="search..."/>
  </div>
</header>
<div id="overlay"></div>
<div id="frame">
  <table id="frame-table">
    <tr>
      <td id = "left">
        <img src="img/left.png" alt="left">
      </td>
      <td id = "right">
        <img src="img/right.png" alt="right">
      </td>
    </tr>
  </table>
  <img id="main" src="" alt="">
  <div id="description">
    <p></p>
  </div>
</div>
<section id="wrapper">
  <ul id="tags">
    <li class="active">All</li>
    <li>City</li>
    <li>Art</li>
    <li>Vacation</li>
  </ul>
  <ul id="portfolio">
    <?php include_once("list.html") ?>
  </ul>
</section>
</body>
</html>
