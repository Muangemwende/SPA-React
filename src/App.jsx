

import { useState } from "react";
import ProjectList from "./components/ProjectList";
import ProjectForm from "./components/ProjectForm";
import SearchBar from "./components/SearchBar";

function App() {
  const [projects, setProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  function addProject(newProject) {
    setProjects([...projects, newProject]);
  }

  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Creative Portfolio</h1>
      <SearchBar setSearchTerm={setSearchTerm} />
      <ProjectForm addProject={addProject} />
      <ProjectList projects={filteredProjects} />
    </div>
  );
}

export default App;