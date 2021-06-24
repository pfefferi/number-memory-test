let numLength = 8;
let codeTimer = 5;
let inputTimer = 5;


const $button = $('button');
let code = "";

$(button).on('click', () => {
    gameSettings()
    hideInput();
    hideResult();
    const $showNumber = $('#showNumber');
    code = getCode
    $showNumber.removeClass('hide').text(code);

    setTimeout(function () {
            $showNumber.addClass('hide');
            showInput();
            setTimeout(function () {
                    $showNumber.addClass('hide');
                    checkInput(code);
                    hideInput();
                    code = "";
                }, inputTimer*1000);

        }, codeTimer*1000);
});

function getCode() {
    code = "";
    for (let i = 0; i < numLength; i++) {
        randomDigit = Math.floor(Math.random() * 10);
        code += randomDigit.toString();
    }
    return code;
};

function showInput() {
    const $inputBox = $('#input-box');
    $inputBox.removeClass('hide');
    
};

function hideInput() {
    const $inputBox = $('#input-box');
    $inputBox.addClass('hide');
    const $input = $('#input');
    $input.val(null);
};

function checkInput(code) {
    const $input = $('#input')[0].value;
    const $result = $('#result');
    if ($input == code) {
        console.log("success");
        $result.removeClass('hide').text("success");
    } else {
        console.log("fail");
        $result.removeClass('hide').text(`fail ${code} ${$input} `);
    };
};

function hideResult() {
    const $result = $('#result');
    $result.addClass('hide').text('');
}

function gameSettings() {
    codeTimer = parseInt($('#setCodeTimer')[0].value) ;
    inputTimer = parseInt($('#setInputTimer')[0].value);
    numLength = parseInt($('#setNumLength')[0].value);
}