<?php
session_start(); 
?>
<!DOCTYPE html>
<html>
<head>
  <title>PHP File Upload</title>
</head>
<body>
<style type="text/css">
                span{
                        font-size: 20px;
                }
                center{
                        margin-top: 10%;
                }
        </style>
<center>
  <?php
    if (isset($_SESSION['message']) && $_SESSION['message'])
    {
      printf('<b>%s</b>', $_SESSION['message']);
      unset($_SESSION['message']);
    }
  ?>
  <form method="POST" action="upload.php" enctype="multipart/form-data">
      <span>Upload a File:</span><br><br>
      <input type="file" name="uploadedFile" />
    <input type="submit" name="uploadBtn" value="Upload" />
  </form>
</center>
</body>
</html>
