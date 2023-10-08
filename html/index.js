let question = prompt('Will you marry me?', 'Y/N')

idk: while(question != "Y" || question != "y"){
    
    let question = prompt('Will you marry me?', 'Y/N')
    if(question == "Y" || question == "y"){
        alert('I accept, sex?');
        break idk;
    };
};