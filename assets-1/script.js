const numberInput1 = document.querySelector('.input1')
const numberInput2 = document.querySelector('.input2')
const numberInput3 = document.querySelector('.input3')
const inputChar = document.querySelector('.input-char')
const numberInput4 = document.querySelector('.input')
const numberInput5 = document.querySelector('.input-even')
const numberInput6 = document.querySelector('.input4')
const numberInput7 = document.querySelector('.input5')
const numberInput8 = document.querySelector('.input6')
const numberInput9 = document.querySelector('.input7')
const numberInput10 = document.querySelector('.input8')
const maxNumber = document.querySelector('.maxNumber')
const minNumber = document.querySelector('.minNumber')
const printType = document.querySelector('.print')
const multiplication = document.querySelector('.multi')
const evenNumber = document.querySelector('.even')
const totalNumber = document.querySelector('.total')
const avrageNumber = document.querySelector('.avrage')
const percentageNumber = document.querySelector('.percentage')
const gradeNumber = document.querySelector('.grade')
let dataNumber1, dataNumber2, dataNumber3, dataNumber4, dataNumber5, dataCharacter, dataMulti, evenData;

numberInput1.addEventListener('input', (event) => {
    dataNumber1 = event.target.value;
    console.log(dataNumber1)
})
numberInput2.addEventListener('input', (event) => {
    dataNumber2 = event.target.value;
    console.log(dataNumber2)
})
numberInput3.addEventListener('input', (event) => {
    dataNumber3 = event.target.value;
    console.log(dataNumber3)
})
maxNumber.addEventListener('click', (event) => {
    if (dataNumber1 > dataNumber2) {
        if (dataNumber1 > dataNumber3) {
            console.log('max element = \t' + dataNumber1)

        }
    };
    if (dataNumber2 > dataNumber1) {
        if (dataNumber2 > dataNumber3) {
            console.log('max element = \t' + dataNumber2);

        };
    };
    if (dataNumber3 > dataNumber1) {
        if (dataNumber3 > dataNumber2) {
            console.log('max element = \t' + dataNumber3);

        };
    };

})
minNumber.addEventListener('click', (event) => {
        if (dataNumber1 < dataNumber2) {
            if (dataNumber1 < dataNumber3) {
                console.log('min element = \t' + dataNumber1)
            }
        };
        if (dataNumber2 < dataNumber1) {
            if (dataNumber2 < dataNumber3) {
                console.log('min element = \t' + dataNumber2);
            };
        };
        if (dataNumber3 < dataNumber1) {
            if (dataNumber3 < dataNumber2) {
                console.log('min element = \t' + dataNumber3);
            };
        };

    })
    /***********  end one program **********/
inputChar.addEventListener('input', (event) => {
    dataCharacter = event.target.value;
    console.log(dataCharacter)
})
printType.addEventListener('click', (event) => {
        switch (dataCharacter) {
            case 'a':
                console.log('vowel')
                break;
            case 'A':
                console.log('vowel')
                break;
            case 'e':
                console.log('vowel')
                break;
            case 'E ':
                console.log('vowel')
                break;
            case 'I':
                console.log('vowel')
                break;
            case 'i':
                console.log('vowel')
                break;
            case 'o':
                console.log('vowel')
                break;
            case 'O':
                console.log('vowel ')
                break;
            case 'u':
                console.log('vowel')
                break;
            case 'U':
                console.log('vowel')
                break;
            default:
                console.log('Consonant')
                break;
        }

        inputChar.value = '';
    })
    /***********  end secound program **********/
numberInput4.addEventListener('input', (event) => {
    dataMulti = event.target.value;
    console.log(dataMulti)
})
multiplication.addEventListener('click', (event) => {
        for (let i = 1; i <= 12; i++) { console.log(dataMulti * i) }
    })
    /***********  end Third program **********/
numberInput5.addEventListener('input', (event) => {
    evenData = event.target.value;
    console.log(evenData)
})
evenNumber.addEventListener('click', (event) => {
        for (let i = 1; i <= evenData; i++) {
            if (i % 2 == 0) {
                console.log(i)
            }

        }
    })
    /***********  end Fourth program **********/
numberInput6.addEventListener('input', (event) => {
    dataNumber1 = event.target.value;
    console.log(dataNumber1)
})
numberInput7.addEventListener('input', (event) => {
    dataNumber2 = event.target.value;
    console.log(dataNumber2)
})
numberInput8.addEventListener('input', (event) => {
    dataNumber3 = event.target.value;
    console.log(dataNumber3)
})
numberInput9.addEventListener('input', (event) => {
    dataNumber4 = event.target.value;
    console.log(dataNumber4)
})
numberInput10.addEventListener('input', (event) => {
    dataNumber5 = event.target.value;
    console.log(dataNumber5)
})
totalNumber.addEventListener('click', (event) => {
    dataCharacter = parseInt(dataNumber1) + parseInt(dataNumber2) + parseInt(dataNumber3) + parseInt(dataNumber4) + parseInt(dataNumber5);
    console.log('Total marks =  ' + dataCharacter)
})
avrageNumber.addEventListener('click', (event) => {
    dataCharacter = (parseInt(dataNumber1) + parseInt(dataNumber2) + parseInt(dataNumber3) + parseInt(dataNumber4) + parseInt(dataNumber5)) / 5;
    console.log('Average marks =  ' + dataCharacter)
})
percentageNumber.addEventListener('click', (event) => {
        dataCharacter = (parseInt(dataNumber1) + parseInt(dataNumber2) + parseInt(dataNumber3) + parseInt(dataNumber4) + parseInt(dataNumber5)) / 5;
        console.log('percentage =  ' + dataCharacter + '%')
    })
    /***********  end fifth program **********/

gradeNumber.addEventListener('click', (event) => {
        dataCharacter = (parseInt(dataNumber1) + parseInt(dataNumber2) + parseInt(dataNumber3) + parseInt(dataNumber4) + parseInt(dataNumber5)) / 5;
        console.log('percentage =  ' + dataCharacter + '%')
        if (dataCharacter >= 90) {
            console.log('Grade A ')
        }
        if (dataCharacter >= 80) {
            console.log('Grade B ')
        }
        if (dataCharacter >= 70) {
            console.log('Grade C ')
        }
        if (dataCharacter >= 60) {
            console.log('Grade D')
        }
        if (dataCharacter >= 40) {
            console.log('Grade E')
        } else {
            console.log('Grade F')
        }
    })
    /***********  end sixth program **********/