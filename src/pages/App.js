import { useState } from 'react';
import githubLogo from '../assets/github.png';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { ItemRepo } from '../components/ItemRepo';
import { api } from '../services/api';
import { Container } from './styles';

function App() {

  const [repos, setRepos] = useState([]);
  const [currentRepo, setCurrentRepo] = useState('');

  const handleSearchRepo = async () => {

    try {
      const {data} = await api.get(`repos/${currentRepo}`);

      if (data.id) {
        
        const isExist = repos.find(repo => repo.id === data.id);
  
        if (!isExist) {
          setRepos(prev => [...prev, data]);
          setCurrentRepo('');
          return;
        } else {
          alert('Repositório já adicionado')
        }
      }
    } catch (error) {
      console.error(error.message)
    }
  }

  const handleRemoveRepo = (id) => {
    try {
      const existID = repos.filter(repo => repo.id !== id);
      setRepos(existID);
    } catch (error) {
      console.error(error.message)
    }
  }

  return (
    <Container>
      <img src={githubLogo} width={72} height={72} alt='Github Logo' />
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepo} />
      {repos.map(repo => <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo} />)}
    </Container>
  );
}

export default App;
