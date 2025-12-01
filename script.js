// Définition des statuts possibles pour un projet
// Chaque clé (PENDING, SUCCESS, FAILURE) contient un objet avec une description
const projectStatus = {
  PENDING: { description: "Pending Execution" },
  SUCCESS: { description: "Executed Successfully" },
  FAILURE: { description: "Execution Failed" }
};

// Classe représentant une idée de projet
class ProjectIdea {
  // Le constructeur prend un titre et une description
  constructor(title, description) {
    this.title = title;                 // Titre du projet
    this.description = description;     // Description du projet
    this.status = projectStatus.PENDING; // Statut par défaut : en attente
  }

  // Méthode pour mettre à jour le statut du projet
  // newStatus doit être une des valeurs de projectStatus
  updateProjectStatus(newStatus) {
    this.status = newStatus;
  }
}

// Classe représentant un tableau (board) d'idées de projet
class ProjectIdeaBoard {
  // Le constructeur prend un titre et initialise un tableau vide pour stocker les idées
  constructor(title) {
    this.title = title;   // Titre du board
    this.ideas = [];      // Tableau qui contiendra des instances de ProjectIdea
  }

  // Méthode pour "épingler" (ajouter) une idée au board
  pin(projectIdea) {
    this.ideas.push(projectIdea);
  }

  // Méthode pour "désépingler" (retirer) une idée du board
  unpin(projectIdea) {
    // On filtre le tableau pour enlever l'instance passée en paramètre
    this.ideas = this.ideas.filter(idea => idea !== projectIdea);
  }

  // Méthode qui retourne le nombre d'idées présentes dans le board
  count() {
    return this.ideas.length;
  }

  // Méthode qui formate le contenu du board en chaîne de caractères
  // Respecte le format demandé dans les user stories
  formatToString() {
    // Ligne d'en-tête avec le titre du board et le nombre d'idées
    let result = `${this.title} has ${this.count()} idea(s)\n`;

    // Pour chaque idée, on ajoute une ligne avec son titre, son statut et sa description
    this.ideas.forEach(idea => {
      result += `${idea.title} (${idea.status.description}) - ${idea.description}\n`;
    });

    // On retourne la chaîne complète (avec \n à la fin de chaque ligne)
    return result;
  }
}
