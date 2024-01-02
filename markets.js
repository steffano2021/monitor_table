
function changeColor(){
    // alert('button clicked')
    console.log('clicked')

    let japan = document.querySelector('.jp-status')

    japan.setAttribute('src','/maps/empty.png')

}

function centerMAP(){
    console.log('centerMAP')

    let sodTable = document.getElementsByClassName('SOD-table')[0]
    let eodTable = document.getElementsByClassName('EOD-table')[0]
    let map = document.getElementsByClassName('maps-container')[0]


    if (map.style.animationName == 'midToLeft'){
        map.style.animationName='leftToMid'
        map.style.marginLeft='0px'
    }

    if (sodTable.style.animationName == 'rightToMid' || sodTable.style.animationName == 'leftToMid'){
        sodTable.style.animationName = 'midToRight'
        sodTable.style.marginLeft='800px'
    }

    if (eodTable.style.animationName == 'rightToMid'){
        eodTable.style.animationName = 'midToRight'
        eodTable.style.marginLeft = '800px'
    }

}

function centerSOD(){
    // alert('button clicked')
    console.log('centerSOD')

    let sodTable = document.getElementsByClassName('SOD-table')[0]
    let eodTable = document.getElementsByClassName('EOD-table')[0]
    let map = document.getElementsByClassName('maps-container')[0]

    if (map.style.animationName == '' || map.style.animationName == 'leftToMid'){
        map.style.animationName = 'midToLeft'
        map.style.marginLeft='-800px'
    }

    // if EOD is center
    if (eodTable.style.animationName == 'rightToMid'){
        eodTable.style.animationName='midToRight'
        eodTable.style.marginLeft='800px'

    // return EOD to original
    } else {
        eodTable.style.animationName=''
        eodTable.style.marginLeft='800px'
    }

    // set the animation name then the final destination which is the final position in the animation
    if (sodTable.style.animationName == 'midToLeft') {
        sodTable.style.animationName = 'leftToMid'
        sodTable.style.marginLeft='100px'
    } else {
        sodTable.style.animationName = 'rightToMid'
        sodTable.style.marginLeft='100px'
    }
}

function centerEOD(){
    // alert('button clicked')
    console.log('centerEOD')

    let sodTable = document.getElementsByClassName('SOD-table')[0]
    let eodTable = document.getElementsByClassName('EOD-table')[0]
    let map = document.getElementsByClassName('maps-container')[0]

    sodTable.style.animationName='midToLeft'
    sodTable.style.marginLeft='-800px'

    eodTable.style.animationName='rightToMid'
    eodTable.style.marginLeft='100px'

    if (map.style.animationName == '' || map.style.animationName == 'leftToMid'){
        map.style.animationName = 'midToLeft'
        map.style.marginLeft='-800px'
    }


}
