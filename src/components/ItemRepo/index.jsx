import { ItemRepoContainer } from "./styles"

const ItemRepo = ({repo, handleRemoveRepo}) => {

    const handleRemove = () => {
        handleRemoveRepo(repo.id)
    }

    return (
        <ItemRepoContainer>
            <h3>{repo.name}</h3>
            <p>{repo.full_name}</p>
            <button><a href={repo.html_url} target='_blank' rel='noreferrer'>Ver repositório</a></button>
            <button onClick={handleRemove}>Remover</button>
            <hr />
        </ItemRepoContainer>
    )
}

export { ItemRepo }