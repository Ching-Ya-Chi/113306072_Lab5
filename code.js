var ct = 0,mt = 0,et = 0;
window.addEventListener("load",st,false);

function st(){
    var bt = document.getElementById("sub");
    bt.addEventListener("click",d,false);
}

function d(){
    const en = document.getElementById("en").value;
    const ma = document.getElementById("ma").value;
    var tb = document.getElementById("oc");
    var avg = (parseInt(ma)+parseInt(en))/2;
    if(en == ""||ma == ""){
        alert("no null");
    }
    else{
        ct++;
        mt += parseInt(ma);
        et += parseInt(en);
        var tr = document.createElement('tr');
        tr.innerHTML = "<td>"+ct+"</td><td>"+ma+"</td><td>"+en+"</td><td>"+avg+"</td>";
        if(ct>1){
            tb.removeChild(tb.lastChild);
        }  
        tb.appendChild(tr);
        document.getElementById("en").value = "";
        document.getElementById("ma").value = "";
        var atr = document.createElement("tr");
        atr.innerHTML = "<td><strong>avg<strong></td><td><strong>"+mt/ct+"</strong></td><td><strong>"+et/ct+"</strong></td><td><strong>"+(mt/ct+et/ct)/2+"</strong></td>";
        tb.appendChild(atr);
        
    }
}