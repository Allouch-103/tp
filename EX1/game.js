function random(n) {
    return Math.round(Math.random() * n);
}

function playGame() {
    const difficultyLevels = {
        facile: { tentatives: 10, n: 20 },
        intermediaire: { tentatives: 5, n: 25 },
        difficile: { tentatives: 3, n: 30 }
    };

    let difficulty = prompt("Choisir un niveau de difficulté : facile, intermediaire ou difficile").toLowerCase();

    if (!difficultyLevels[difficulty]) {
        alert("Niveau de difficulté invalide. Veuillez rafraîchir la page.");
        return;
    }

    const { tentatives, n } = difficultyLevels[difficulty];
    const randomNumber = random(n);
    let tentativesRestantes = tentatives;

    function essai() {
        if (tentativesRestantes === 0) {
            alert("Fin de jeu, vous avez échoué :(");
            return;
        }

        let guess = parseInt(prompt(`Donnez un nombre entre 1 et ${n}. Vous avez ${tentativesRestantes} tentatives restantes.`));
        
        if (isNaN(guess)) {
            alert("Veuillez donner un nombre valide.");
            essai();
        } else if (guess === randomNumber) {
            alert("Félicitations !");
            return;
        } else {
            tentativesRestantes--;
            alert(guess < randomNumber ? "Plus élevé." : "Plus bas.");
            essai();
        }
    }
    essai();
}

playGame();
