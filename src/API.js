export const fetchQuizQuestions = async() => {
    const endpoint = 'https://opentdb.com/api.php?amount=10'
    const data = await (await fetch(endpoint)).json();
    
    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }

    let i;
    for (i = 0; i < data.results.length; i++) {
        data.results[i].answers = [...data.results[i].incorrect_answers, data.results[i].correct_answer];
        shuffle(data.results[i].answers);
    }
    return data.results;
}