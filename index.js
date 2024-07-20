<script>
var password = "12345";
function passcheck(){
    if(document.getElementById('pass1').value !== password){
        alert('Wrong Password, Try Again.');
        return false;
    } else {
        alert('Correct Password. Click OK to enter webpage.');
        return true;
    }
}

