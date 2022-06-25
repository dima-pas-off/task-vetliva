<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="./assets/css/style.css" rel="stylesheet">
    <title>Task</title>
</head>
<body>
    
<div class="content">
<div class="form_wrapper">
    <div class="form_header">
        Заказ номера
    </div>
    <form id='form' action="./bron.php" method="POST">

        <div class="input_block">
            <span>ФИО</span>
            <input type="text" id="fullName" name="fullName" />
        </div>

        <div class="input_block"> 
            <span>Email:</span>
            <input type="text" id="email" name="email">
        </div>
        <div class="input_block"> 
            <span>Phone:</span>
            <input autocomplete="off" placeholder="+375(__)-___ __ __"  type="text" id="phoneNumber" name="phoneNumber">
        </div>
        <div class="input_block"> 
            <label for="roomType"></label>
            <select name="roomType" id="roomType">
                <option value="economy">Экономный</option>
                <option value="standart">Стандартный</option>
                <option value="lux">Люкс</option>
            </select>
        </div>
        <div class="input_block input_submit">  
            <input type="submit" value="Забронировать">
        </div>
    </form>
</div>
<div class="alert_block">

</div>
</div>
<div id='preloader'>
    <img src="./assets/gifs/preloader.gif" alt="preloader">
</div>


<div class="modal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Чек заказа</h5>
      </div>
      <div class="modal-body">
        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Закрыть чек</button>
      </div>
    </div>
  </div>
</div>


<script
  src="https://code.jquery.com/jquery-3.6.0.js"
  integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="
  crossorigin="anonymous">
</script>
<script 
    src="https://cdnjs.cloudflare.com/ajax/libs/jquery.maskedinput/1.4.1/jquery.maskedinput.min.js" 
    type="text/javascript">
</script>
<script src="./assets/js/setCursorPosition.js"></script>
<script src="./assets/js/index.js"></script>
</body>
</html>