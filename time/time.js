
    document.addEventListener("DOMContentLoaded",function(){
        var c=document.getElementById("curr_time");
        
        //some time function setTimeout(function,delay),setTimeinterval()
        //setTimeout(updateTime,1000);
        //for ongoing continuous update
        setInterval(updateTime,100);
        //c.innerHTML=d.toTimeString()
        //to get date  toDateString()
        function updateTime()
        {
            var d=new Date();
            var hour=d.getHours();
            var minute=d.getMinutes();
            var sec=d.getSeconds();
            var ampm="AM";
            if (hour>12){hour-=12;ampm="PM"}
            else if(hours==0){hours=12;}
            var sep=":"
            if (sec%2==0){sep=" ";}
            if (minute<10){minute="0"+minute;}
            // var sepClass="";
            // if(d.getSeconds()%2==1)sepClass="trans";
            // var sep="<span class="+sepClass+">:</span>";
            c.innerHTML=hour+sep+minute+sep+sec+" "+ampm;
        }
        //to stop time we could assign id for setinterval and do clearInterval()
        //clockid=setInterval(updateTime,100);
        //clearInterval(clockid)
    })
