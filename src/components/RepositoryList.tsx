import { useState, useEffect } from "react";
import api from "../services/api";

import '../styles/repositories.scss';

import RepositoryItem from "./RepositoryItem";

interface IRepository {
  name: string;
  description: string;
  html_url: string;
}

function RepositoryList() {
  const [repositories, setRepositories] = useState<IRepository[]>([])

  useEffect(() => {
    async function loadRepositories() {
      const { data } = await api.get('/orgs/rocketseat/repos');

      setRepositories(data)
    }

    loadRepositories();
  }, [setRepositories])

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map(repository =>
          <RepositoryItem key={repository.name} repository={repository} />
        )}
      </ul>
    </section>
  );
};

export default RepositoryList;