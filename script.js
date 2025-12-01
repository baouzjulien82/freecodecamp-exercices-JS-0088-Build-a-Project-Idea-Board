const projectStatus = {
    PENDING : {description : "Pending Execution" },
    SUCCESS : {description : "Executed Successfully" },
    FAILURE : {description : "Execution Failed" }
};

class ProjectIdea {
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.status = projectStatus.PENDING; // valeur pas défaut
  }
  updateProjectStatus(newStatus) {
    this.status = newStatus;
  }
}

class ProjectIdeaBoard {
  constructor(title) {
    this.title = title;
    this.ideas = [];
  }
  pin()
  unpin()
  count()
  formatToString()
}
