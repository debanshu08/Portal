function scroll(pos)  
                    {  
                        var txt = "Online Job Portal";  
                        var output = "";  
                        var screen = document.getElementById("abc");  
                        for (var i = 0; i < pos; i++)  
                        {  
                            output += txt.charAt(i);  
                        }  
                        output += txt.charAt(pos);  
                        screen.innerHTML = output;  
                        pos++;  
                        if (pos != txt.length)  
                        {  
                            window.setTimeout(function () { scroll(pos); }, 400);  
                        }  
                        else  
                        {  
                            window.setTimeout(function () { scroll(0); }, 500);  
                        }  
                    }  
                    scroll(0);  