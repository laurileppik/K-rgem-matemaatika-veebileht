//Kood võetud lehelt https://www.simplilearn.com/tutorials/javascript-tutorial/calculator-in-javascript

//See funktsioon võtab väärtused parameetritena ja tagastab need tekstikasti.
function display(val){

    document.getElementById('result').value += val

    return val

}

//Solve() kutsutakse välja kui kasutaja vajutab "=" peale. X võtab matemaatilise tehte, mis kasutaja poolt antakse. Seejärel see tehe arvutatakse ja salvestatakse muutujasse y. Tulemus näidatakse tekstikastis.
function solve(){

    let x = document.getElementById('result').value

    let y = eval(x);

    document.getElementById('result').value = y

    return y

}

//See funktsioon kutsutakse välja kui kasutaja vajutab "C" nupule. Tulemuse väärtus on tühi sõne.
function clearScreen(){

    document.getElementById('result').value = ''

}