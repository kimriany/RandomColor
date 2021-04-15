var Random_number



document.getElementById("generate").addEventListener("click", ()=>{
    function createRandomString() {
        var text = ''
        const possible = 'abcdefg0123456789'
        var co = possible.length;
        for(var i = 0; i<6; i++){
            text += possible.charAt(Math.floor(Math.random() * co));
        }
        return text

    }
    var stle1 = document.getElementById("coral11");

    stle1.style.backgroundColor = '#' + createRandomString();

 

    var stle2 = document.getElementById("coral22");

    var st2 = stle2.style.backgroundColor = '#' + createRandomString();

    var stle3 = document.getElementById("coral33");

    var st3 = stle3.style.backgroundColor = '#' + createRandomString();

    var stle4 = document.getElementById("coral44");

    var st4 = stle4.style.backgroundColor = '#' + createRandomString();

    var stle5 = document.getElementById("coral55");

    var st5 = stle5.style.backgroundColor = '#' + createRandomString();

    var stle6 = document.getElementById("coral66");

    var st6 = stle6.style.backgroundColor = '#' + createRandomString();

    console.log('#' + createRandomString());
    
    document.getElementById("coral1").innerHTML = '#' + createRandomString();
    document.getElementById("coral2").innerHTML = '#' + createRandomString();
    document.getElementById("coral3").innerHTML = '#' + createRandomString();
    document.getElementById("coral4").innerHTML = '#' + createRandomString();
    document.getElementById("coral5").innerHTML = '#' + createRandomString();
    document.getElementById("coral6").innerHTML = '#' + createRandomString();

})