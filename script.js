function checkBlock(blockId) {
    const block = document.getElementById(blockId);
    const inputs = block.querySelectorAll('input');
    
    inputs.forEach(input => {
        // Убираем пробелы по краям на случай случайных нажатий
        const userAnswer = input.value.trim();
        const correctAnswer = input.getAttribute('data-ans');
        
        // Сбрасываем предыдущие классы
        input.classList.remove('correct', 'incorrect');
        
        if (userAnswer === correctAnswer) {
            input.classList.add('correct');
        } else {
            input.classList.add('incorrect');
        }
    });
}
