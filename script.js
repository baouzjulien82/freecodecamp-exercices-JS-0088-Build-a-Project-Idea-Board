// Définition des statuts possibles
const projectStatus = {
  PENDING: { description: "Pending Execution" },
  SUCCESS: { description: "Executed Successfully" },
  FAILURE: { description: "Execution Failed" }
};

// Classe représentant une idée de projet
class ProjectIdea {
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.status = projectStatus.PENDING; // valeur par défaut
  }

  // Met à jour le statut du projet
  updateProjectStatus(newStatus) {
    this.status = newStatus;
  }
}

// Classe représentant un tableau d'idées de projet
class ProjectIdeaBoard {
  constructor(title) {
    this.title = title;
    this.ideas = []; // tableau vide pour stocker les instances de ProjectIdea
  }

  // Ajoute une idée au board
  pin(projectIdea) {
    this.ideas.push(projectIdea);
  }

  // Retire une idée du board
  unpin(projectIdea) {
    this.ideas = this.ideas.filter(idea => idea !== projectIdea);
  }

  // Retourne le nombre d'idées
  count() {
    return this.ideas.length;
  }

  // Formate le contenu du board en chaîne de caractères
  formatToString() {
    let result = `${this.title} has ${this.count()} idea(s)\n`;
    this.ideas.forEach(idea => {
      result += `${idea.title} (${idea.status.description}) - ${idea.description}\n`;
    });
    return result.trim(); // supprime le dernier saut de ligne
  }
}
