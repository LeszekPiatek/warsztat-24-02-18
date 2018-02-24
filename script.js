function main(){
    var points
    var time
    var mole
    var gameIntervalID

    function addPoint(){
        points++
        displayPoints(points)
    }

    function reduceTime(){
        time --
        displayTime(time)
        if(time === 0){
            endGame()
        }
    }

    function flashBackground(){
        var body = document.querySelector ('body')
        body.style.backgroundColor = 'black'
        
        setTimeout (
            function (){
                body.style.backgroundColor = 'green'
            },
            100
        )
    }

    function displayPoints(pointsParam){
        var pointsContainer = document.querySelector('.points')
        pointsContainer.innerText = pointsParam
    }
    function displayTime(timeParam){
        var timeContainer = document.querySelector('.time')
        timeContainer.innerText = timeParam
    }

    function makeMole(){

        var molePosX = Math.round(
            Math.random() * (window.innerWidth - window.innerHeight/10)
        )
        var molePosY = Math.round(
            Math.random() * (window.innerHeight - window.innerHeight/10)
        )
        var mole = document.createElement('div')

        mole.classList.add('mole')

        mole.style.left = molePosX + 'px'
        mole.style.top = molePosY + 'px'

        mole.addEventListener(
            'click',
            function(){
                mole.remove()
                addPoint()
                flashBackground()
            }
        )

        document.querySelector('body').appendChild(mole)

        return mole
    }

    function endGame(){
        clearInterval(gameIntervalID)
        mole.remove()
                
        document.querySelector('.end-modal .score')
            .innerText = points + " punktów!"

        document.querySelector('.end-modal')
        .style.display = 'block'

        document.querySelector('.end-modal button')
        .addEventListener(
            'click',
            function (){
                document.querySelector('.end-modal')
                startGame()
            }

        )
    }

    function init (){
        document.querySelector('.start-modal button') //znajdź element w klasie start modal i znajdź w tej klasie button
        .addEventListener(
        'click',
            function(){
                document.querySelector('.start-modal')
                .style.display = 'none'
                startGame()
            }
        )
                    function startGame(){
                    points = 0
                    time = 3
                    mole = makeMole()
                    displayPoints(points)
                    displayTime(time)
                    gameIntervalID = setInterval (
                        function(){
                            mole.remove()
                            mole = makeMole()
                            reduceTime()
                    },
            1000
        )
    }
    }
    init()

}

main()