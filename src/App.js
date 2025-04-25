import { useState } from 'react'
import Banner from './components/Banner'
import Form from './components/Form'
import Team from './components/Team'
import Footer from './components/Footer'
import { v4 as uuidv4 } from 'uuid'

function App() {

  const [teams, setTeams] = useState([
    {
      id: uuidv4(),
      name: 'Programming',
      color: '#57C278'
    },
    {
      id: uuidv4(),
      name: 'Front-End',
      color: '#82CFFA'
    },
    {
      id: uuidv4(),
      name: 'Data Science',
      color: '#A6D157'
    },
    {
      id: uuidv4(),
      name: 'Devops',
      color: '#E06B69'
    },
    {
      id: uuidv4(),
      name: 'UX and Design',
      color: '#DB6EBF'
    },
    {
      id: uuidv4(),
      name: 'Mobile',
      color: '#FFBA05'
    },
    {
      id: uuidv4(),
      name: 'Innovation and management',
      color: '#FF8A29'
    },
  ])

  const initial = [
    {
      id: uuidv4(),
      name: 'Juliana Amoasei',
      role: 'Software developer and instructor',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[0].name,
      favorite: false
    },
    {
      id: uuidv4(),
      name: 'Luis Ricardo',
      role: 'Software developer',
      image: 'https://github.com/luisricardoferraz.png',
      team: teams[0].name,
      favorite: false
    },
    {
      id: uuidv4(),
      name: 'Guilherme Lima',
      role: 'Python and Javascript developer at Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[0].name,
      favorite: false
    },
    {
      id: uuidv4(),
      name: 'Paulo Silveira',
      role: 'CEO at Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[0].name,
      favorite: false
    },
    {
      id: uuidv4(),
      name: 'Juliana Amoasei',
      role: 'Software developer and instructor',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[1].name,
      favorite: false
    },
    {
      id: uuidv4(),
      name: 'Luis Ricardo',
      role: 'Software developer',
      image: 'https://github.com/luisricardoferraz.png',
      team: teams[1].name,
      favorite: false
    },
    {
      id: uuidv4(),
      name: 'Guilherme Lima',
      role: 'Python and Javascript developer at Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[1].name,
      favorite: false
    },
    {
      id: uuidv4(),
      name: 'Paulo Silveira',
      role: 'CEO at Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[1].name,
      favorite: false
    },
    {
      id: uuidv4(),
      name: 'Juliana Amoasei',
      role: 'Software developer and instructor',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[2].name,
      favorite: false
    },
    {
      id: uuidv4(),
      name: 'Luis Ricardo',
      role: 'Software developer',
      image: 'https://github.com/luisricardoferraz.png',
      team: teams[2].name,
      favorite: false
    },
    {
      id: uuidv4(),
      name: 'Guilherme Lima',
      role: 'Python and Javascript developer at Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[2].name,
      favorite: false
    },
    {
      id: uuidv4(),
      name: 'Paulo Silveira',
      role: 'CEO at Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[2].name,
      favorite: false
    },
    {
      id: uuidv4(),
      name: 'Juliana Amoasei',
      role: 'Software developer and instructor',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[3].name,
      favorite: false
    },
    {
      id: uuidv4(),
      name: 'Luis Ricardo',
      role: 'Software developer',
      image: 'https://github.com/luisricardoferraz.png',
      team: teams[3].name,
      favorite: false
    },
    {
      id: uuidv4(),
      name: 'Guilherme Lima',
      role: 'Python and Javascript developer at Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[3].name,
      favorite: false
    },
    {
      id: uuidv4(),
      name: 'Paulo Silveira',
      role: 'CEO at Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[3].name,
      favorite: false
    },
    {
      id: uuidv4(),
      name: 'Juliana Amoasei',
      role: 'Software developer and instructor',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[4].name,
      favorite: false
    },
    {
      id: uuidv4(),
      name: 'Luis Ricardo',
      role: 'Software developer',
      image: 'https://github.com/luisricardoferraz.png',
      team: teams[4].name,
      favorite: false
    },
    {
      id: uuidv4(),
      name: 'Guilherme Lima',
      role: 'Python and Javascript developer at Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[4].name,
      favorite: false
    },
    {
      id: uuidv4(),
      name: 'Paulo Silveira',
      role: 'CEO at Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[4].name,
      favorite: false
    },
    {
      id: uuidv4(),
      name: 'Juliana Amoasei',
      role: 'Software developer and instructor',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[5].name,
      favorite: false
    },
    {
      id: uuidv4(),
      name: 'Luis Ricardo',
      role: 'Software developer',
      image: 'https://github.com/luisricardoferraz.png',
      team: teams[5].name,
      favorite: false
    },
    {
      id: uuidv4(),
      name: 'Guilherme Lima',
      role: 'Python and Javascript developer at Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[5].name,
      favorite: false
    },
    {
      id: uuidv4(),
      name: 'Paulo Silveira',
      role: 'CEO at Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[5].name,
      favorite: false
    },
  ]

  const [people, setPeople] = useState(initial)

  const onNewPersonAdded = (value) => {
    setPeople([...people, { ...value, id: uuidv4() }])
  }

  function deleteCollaborator (id) {
    setPeople(people.filter(collaborator => collaborator.id !== id))
  }

  function changeTeamColor (color, id) {
    setTeams(teams.map(team => {
      if (team.id === id) {
        team.color = color
      }
      return team
    }))
  }

  function onNewTeamAdded (newTeam) {
    setTeams([...teams, { ...newTeam, id: uuidv4() }])
  }

  function resolveFavorite (id) {
    setPeople(people.map(collaborator => {
      if(collaborator.id === id) collaborator.favorite = !collaborator.favorite
      return collaborator
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Form
        teams={teams.map(team => team.name)}
        onPersonRegistered={person => onNewPersonAdded(person)}
        onTeamRegistered={onNewTeamAdded}
      />
      {teams.map(team => 
        <Team
          key={team.id}
          id={team.id}
          name={team.name}
          color={team.color}
          collaborators={people.filter(collaborator => collaborator.team === team.name)}
          onDelete={deleteCollaborator}
          onChangeColor={changeTeamColor}
          onMarkFavorite={resolveFavorite}
        />
      )}
      <Footer />
    </div>
  )
}

export default App
