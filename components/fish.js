AFRAME.registerComponent("fish", {
    init : function(){
        for (var i = 1; i <= 20; i ++){
            setTimeout(timeout=1000)
            var id = `fish${i}`

            var posX = Math.floor(Math.random()*2000 +- 1000)
            var posY = Math.floor(Math.random()*10 +- 1)
            var posZ = Math.floor(Math.random()*3000 +- 5000)
            var position = { x : posX, y : posY, z : posZ}
            
            this.fish(id, position)
        }
    },

    fish : (id, position) => {
        var terrainEl = document.querySelector ("#plain")
        var fish = document.createElement("a-entity")

        fish.setAttribute("id", id)

        fish.setAttribute("position", position)
        fish.setAttribute ("scale", {x : 500, y : 500, z : 500})
        fish.setAttribute("gltf-model", "./assets/fish/scene.gltf")
        fish.setAttribute("animation-mixer", {})

        fish.setAttribute("static-body",{
            shape : "sphere",
            sphereRadius : 5,
        }),

        fish.setAttribute("game-play",{
            elememntId: `#${id}`
        })
        
        terrainEl.appendChild(fish)
    }
})