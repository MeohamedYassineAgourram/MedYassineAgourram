import React from "react";
import { useState } from "react";
import "./ProjectsPage.css";

function ProjectsPage() {
  const [project1Visible, setProject1Visible] = useState(true);
  const [project2Visible, setProject2Visible] = useState(false);
  const [project3Visible, setProject3Visible] = useState(false);
  const [project4Visible, setProject4Visible] = useState(false);
  const [project5Visible, setProject5Visible] = useState(false);
  const [project6Visible, setProject6Visible] = useState(false);
  const [project7Visible, setProject7Visible] = useState(false);
  const [project8Visible, setProject8Visible] = useState(false);

  function setVisibility(num) {
    setProject1Visible(false);
    setProject2Visible(false);
    setProject3Visible(false);
    setProject4Visible(false);
    setProject5Visible(false);
    setProject6Visible(false);
    setProject7Visible(false);
    setProject8Visible(false);

    if (num == 1) {
      setProject1Visible(true);
    }

    if (num == 2) {
      setProject2Visible(true);
    }

    if (num == 3) {
      setProject3Visible(true);
    }

    if (num == 4) {
      setProject4Visible(true);
    }

    if (num == 5) {
      setProject5Visible(true);
    }

    if (num == 6) {
      setProject6Visible(true);
    }

    if (num == 7) {
      setProject7Visible(true);
    }

    if (num == 8) {
      setProject8Visible(true);
    }

    // Scroll to top of the page
    if ((window.innerWidth > 900) && (window.innerWidth <= 1100)) {
      window.scrollTo({
        top: 2200,
        behavior: "smooth",
      });
    }

    if ((window.innerWidth > 700) && (window.innerWidth <= 900)) {
      window.scrollTo({
        top: 2300,
        behavior: "smooth",
      });
    }

    if (window.innerWidth <= 700) {
      window.scrollTo({
        top: 3400,
        behavior: "smooth",
      });
    }
  }

  return (
    <div className="ProjectsContainer">
      <div className="left-section">
        <div
          className={`mainProject1 main ${
            project1Visible ? "visible" : "hidden"
          }`}
        >
          <div className="InfoSection p1">
            <button
              onClick={() =>
                window.open(
                  "https://github.com/MeohamedYassineAgourram",
                  "_blank"
                )
              }
            >
              Visit GitHub
            </button>
            <div className="ProjectText">
              <h2>Réalisation d’un simulateur de CPU</h2>
              <p></p>
            </div>
          </div>
          <div className="toolSection">
            <div className="tools">
              <img src="./Images/c_logo.png" />
              <h4>C</h4>
            </div>
            <div className="tools">
              <img src="./Images/valgrind_logo.png" />
              <h4>Valgrind</h4>
            </div>
          </div>
        </div>

        <div
          className={`mainProject2 main ${
            project2Visible ? "visible" : "hidden"
          }`}
        >
          <div className="InfoSection p2">
            <button
              onClick={() =>
                window.open(
                  "https://github.com/MeohamedYassineAgourram",
                  "_blank"
                )
              }
            >
              Visit GitHub
            </button>
            <div className="ProjectText">
              <h2>Programmation d’automates finis</h2>
              <p></p>
            </div>
          </div>
          <div className="toolSection">
            <div className="tools">
              <img src="./Images/python_logo.png" />
              <h4>Python</h4>
            </div>
            <div className="tools">
              <img src="./Images/jupyter_logo.png" />
              <h4>Jupyter Notebook</h4>
            </div>
          </div>
        </div>

        <div
          className={`mainProject3 main ${
            project3Visible ? "visible" : "hidden"
          }`}
        >
          <div className="InfoSection p3">
            <button
              onClick={() =>
                window.open(
                  "https://github.com/MeohamedYassineAgourram",
                  "_blank"
                )
              }
            >
              Visit GitHub
            </button>
            <div className="ProjectText">
              <h2>Simulation d’un écosystème</h2>
              <p>
                Dans le cadre d’un projet en C, j’ai travaillé sur la
                programmation d’un écosystème virtuel en utilisant des listes
                chaînées. Dans cet écosystème, les proies et les prédateurs sont
                représentés par une même structure de données contenant leurs
                informations. Grâce aux différentes fonctions implémentées, nous
                avons simulé et visualisé les interactions entre ces entités :
                les déplacements, la reproduction, la prédation, et la
                consommation de l’herbe par les proies. Toutes ces dynamiques
                ont été paramétrées en fonction de probabilités, permettant de
                créer une simulation réaliste et adaptable. Enfin, j’ai utilisé
                le logiciel gnuplot pour tracer des graphiques illustrant la
                variation du nombre d’individus en fonction du nombre de
                générations.
              </p>
            </div>
          </div>
          <div className="toolSection">
            <div className="tools">
              <img src="./Images/c_logo.png" />
              <h4>C</h4>
            </div>
            <div className="tools">
              <img src="./Images/valgrind_logo.png" />
              <h4>Valgrind</h4>
            </div>
          </div>
        </div>

        <div
          className={`mainProject4 main ${
            project4Visible ? "visible" : "hidden"
          }`}
        >
          <div className="InfoSection p4">
            <button
              onClick={() =>
                window.open(
                  "https://github.com/MeohamedYassineAgourram",
                  "_blank"
                )
              }
            >
              Visit GitHub
            </button>
            <div className="ProjectText">
              <h2>Étude de la Congestion des Véhicules électriques</h2>
              <p>
                Dans le cadre d’un projet Python, mes amis et moi avons
                développé un programme simulant la congestion des voitures
                électriques. Ce programme explore différentes solutions à la
                question suivante : Comment le nombre d'infrastructures et de
                véhicules influence-t-il la congestion des voitures électriques
                ? Nous avons étudié l’impact de la congestion causée par la
                recharge des voitures électriques sur le temps moyen des
                trajets. Grâce à ce programme, nous avons également généré
                plusieurs graphiques illustrant la variation du temps moyen des
                trajets en fonction du nombre et de la vitesse des voitures.
              </p>
            </div>
          </div>
          <div className="toolSection">
            <div className="tools">
              <img src="./Images/python_logo.png" />
              <h4>Python</h4>
            </div>
            <div className="tools">
              <img src="./Images/jupyter_logo.png" />
              <h4>Jupyter Notebook</h4>
            </div>
          </div>
        </div>

        <div
          className={`mainProject5 main ${
            project5Visible ? "visible" : "hidden"
          }`}
        >
          <div className="InfoSection p5">
            <button
              onClick={() =>
                window.open(
                  "https://github.com/MeohamedYassineAgourram",
                  "_blank"
                )
              }
            >
              Visit GitHub
            </button>
            <div className="ProjectText">
              <h2>Jeu de Plateau</h2>
              <p>
                Dans le cadre d’un projet Python, j’ai développé un programme
                qui simule le jeu du Tic Tac Toe, qui permet à l’utilisateur de
                jouer contre la machine tout en affichant à chaque étape le
                score du matche et aussi représenter le plateau du jeu dans une
                fenêtre de dessin. J’ai aussi développé un programme qui simule
                le jeu 2048, qui est un jeu mono joueur qui se joue sur un
                plateau de taille 4x4. Celui-ci affiche l’état d’avancement du
                jeu après chaque déplacement fait par l’utilisateur. Dans les
                deux projets j’ai pu utiliser la bibliothèque graphique
                “studentlib.gfx”, la biblithèque random et surtout la
                bibliothèque math, la chose qui ma aider à maîtriser plus ces
                dernier en les implémentant dans des projets interactifs qui
                sont dans ce cas des jeux de plateau.
              </p>
            </div>
          </div>
          <div className="toolSection">
            <div className="tools">
              <img src="./Images/python_logo.png" />
              <h4>Python</h4>
            </div>
          </div>
        </div>

        <div
          className={`mainProject6 main ${
            project6Visible ? "visible" : "hidden"
          }`}
        >
          <div className="InfoSection p6">
            <button
              onClick={() =>
                window.open(
                  "https://github.com/MeohamedYassineAgourram",
                  "_blank"
                )
              }
            >
              Visit GitHub
            </button>
            <div className="ProjectText">
              <h2>Modélisation de la Chute Libre de Felix Baumgartner</h2>
              <p>
                Dans le cadre d'un projet numérique, mon binôme et moi-même
                avons travaillé sur la résolution d'un problème de mécanique et
                de physique, à savoir la célèbre chute libre de Félix
                Baumgartner. Nous avons étudié les variations des vitesses, des
                altitudes et des masses volumiques en fonction les unes des
                autres. De plus, nous avons modélisé nos résultats sous forme de
                graphiques descriptifs. Pour ce projet, nous avons utilisé le
                langage de programmation Python et l'interface Jupyter Notebook,
                en nous appuyant sur les bibliothèques NumPy et Matplotlib.
              </p>
            </div>
          </div>
          <div className="toolSection">
            <div className="tools">
              <img src="./Images/python_logo.png" />
              <h4>Python</h4>
            </div>
            <div className="tools">
              <img src="./Images/jupyter_logo.png" />
              <h4>Jupyter Notebook</h4>
            </div>
          </div>
        </div>

        <div
          className={`mainProject7 main ${
            project7Visible ? "visible" : "hidden"
          }`}
        >
          <div className="InfoSection p7">
            <button
              onClick={() =>
                window.open(
                  "https://github.com/MeohamedYassineAgourram",
                  "_blank"
                )
              }
            >
              Visit GitHub
            </button>
            <div className="ProjectText">
              <h2>La résolution et la génération de labyrinthes</h2>
              <p>
                Dans le cadre d'un projet en Python, j'ai développé un programme
                pour générer des labyrinthes, représentés par des listes de
                listes, où chaque case est un tuple contenant les informations
                spécifiques à cette case. Le code se concentre sur la résolution
                du labyrinthe, c'est-à-dire sur la recherche d'un chemin reliant
                l'entrée à la sortie. La méthode employée consiste à explorer
                aléatoirement le labyrinthe jusqu'à trouver le bon chemin.
              </p>
            </div>
          </div>
          <div className="toolSection">
            <div className="tools">
              <img src="./Images/python_logo.png" />
              <h4>Python</h4>
            </div>
          </div>
        </div>

        <div
          className={`mainProject8 main ${
            project8Visible ? "visible" : "hidden"
          }`}
        >
          <div className="InfoSection p8">
            <button
              onClick={() =>
                window.open(
                  "https://github.com/MeohamedYassineAgourram",
                  "_blank"
                )
              }
            >
              Visit GitHub
            </button>
            <div className="ProjectText">
              <h2>Chiffrement et Déchiffrement de César</h2>
              <p>
                Dans le cadre d'un projet en Python, j'ai développé un
                algorithme capable de chiffrer et déchiffrer des fichiers .txt
                en utilisant le chiffre de César. Ce chiffrement repose sur le
                décalage des lettres dans l'alphabet en fonction d'une "clé",
                qui détermine la valeur du décalage. Étant donné que le chiffre
                de César ne propose que 26 transformations possibles, j'ai
                également conçu une fonction nommée "attaque_césar". Cette
                dernière sélectionne un extrait de texte -qu'il soit au début ou
                choisi au hasard- et génère un fichier contenant le résultat du
                déchiffrement pour chaque clé possible, allant de 0 à 25.
              </p>
            </div>
          </div>
          <div className="toolSection">
            <div className="tools">
              <img src="./Images/python_logo.png" />
              <h4>Python</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="ProjectsSection">
        <div className="project1" onClick={() => setVisibility(1)}>
          <h3>Réalisation d’un simulateur de CPU</h3>
        </div>
        <div className="project2" onClick={() => setVisibility(2)}>
          <h3> Programmation d’automates finis</h3>
        </div>
        <div className="project3" onClick={() => setVisibility(3)}>
          <h3>Simulation d’un écosystème</h3>
        </div>
        <div className="project4" onClick={() => setVisibility(4)}>
          <h3> Étude de la Congestion des Véhicules électriques</h3>
        </div>
        <div className="project5" onClick={() => setVisibility(5)}>
          <h3>Jeu de Plateau</h3>
        </div>
        <div className="project6" onClick={() => setVisibility(6)}>
          <h3>Modélisation de la Chute Libre de Felix Baumgartner</h3>
        </div>
        <div className="project7" onClick={() => setVisibility(7)}>
          <h3>La résolution et la génération de labyrinthes</h3>
        </div>
        <div className="project8" onClick={() => setVisibility(8)}>
          <h3>Chiffrement et Déchiffrement de César</h3>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
