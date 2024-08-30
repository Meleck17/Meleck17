<?php
session_start();
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Star Graphisme - Accueil</title>
    <link rel="stylesheet" href="main.css">
</head>
<body>

<header>
    <h1>Star Graphisme</h1>
    <nav>
        <a href="about.html">À propos</a>
        <a href="projects.html">Projets disponibles</a>
        <a href="appointment.html">Prendre rendez-vous</a>
        <a href="billing.html">Facturation des produits</a>
        <?php
        if (isset($_SESSION['user_name'])) {
            echo '<span>Bienvenue, ' . htmlspecialchars($_SESSION['user_name']) . '</span>';
            echo '<a href="logout.php">Déconnexion</a>';
        } else {
            echo '<a href="login.html">Connexion</a>';
        }
        ?>
    </nav>
</header>

<div class="container">
    <h2>Bienvenue sur Star Graphisme</h2>
    <p>Explorez nos services et projets. Prenez rendez-vous avec nous pour donner vie à vos idées créatives !</p>
    <a href="about.html"><button>En savoir plus sur nous</button></a>
    <a href="projects.html"><button>Voir nos projets</button></a>
    <a href="appointment.html"><button>Prendre un rendez-vous</button></a>
    <a href="billing.html"><button>Consulter les factures</button></a>
    <a href="signup.html"><button>Créer un compte</button></a>
</div>

<footer>
    &copy; 2024 Star Graphisme. Tous droits réservés.
</footer>

</body>
</html>
