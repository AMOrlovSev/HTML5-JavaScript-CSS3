window.addEventListener('DOMContentLoaded', () => {
            (function(){
            "use strict";

            var canvas = document.getElementById("myCanvas");


            if(canvas){
                if(Modernizr.canvas){

                    canvas.innerHTML="Canvas supported!";

                    var ctx = canvas.getContext("2d");

					for (let i = 0; i < 20; i++) {
						for (let j = 0; j < 20; j++) {
						  ctx.fillStyle = `rgb(${Math.floor(255 - 15 * i)} ${Math.floor(255 - 15 * j,)} 0)`;
						  ctx.fillRect(j * 25, i * 25, 25, 25);
						}
					}
                }
                else {
                    canvas.innerHTML="Its no supported, please update!";
                }
            }
            else{
                console.error("Canvas is not in the document!");
            }

        }());});