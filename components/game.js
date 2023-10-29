AFRAME.registerComponent("game-play",{
    schema : {
        elementId : {type : "string", default : "#treasure1"},
    },

    init : function(){
        var duration = 120
        var timerEl = document.querySelector("#timer")
        this.startTimer(duration, timerEl)
    },

    update:function(){
        this.isCollided(this.data.elementId)
    },

    isCollided: function(elementId){
        const element = document.querySelector(elementId)
        element.addEventListener("collide", (e) =>{
            if(elementId.includes("treasure")){
                element.setAttribute("visible", false)
                this.updateScore()
                this.updateTargets()
            }
            else if (elementId.includes("#fish")){
                this.gameOver()
            }
        })
    },
    startTimer : function(dur, timer){
        var minutes
        var seconds

        setInterval(()=>{
            if (duration >= 0){
                minutes = parseInt(duration/60)
                seconds = parseInt(duration%60)
            
                if (minutes < 10){
                    minutes = "0" + minutes
                }
                if (seconds < 10){
                    seconds = "0" + seconds
                }
                timer.setAttribute("text", minutes, ":", seconds)
            }
            else{
                this.gameOver()
            }
        }, 1000)
    }
})