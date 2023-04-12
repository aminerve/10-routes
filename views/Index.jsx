const React = require('react')


export default function Index(props) {
  const {pets} = props;
  return (
    <div>
        <nav>
            <a href='/pets/new'>Add New Pet</a>
        </nav>
        <h1>List of Pets</h1>
        <ul>
            {pets?.map((pet, id) => {
              return(
                <li>This is <a href={`/pets/${id}`}/>{pet.name}. They are a {pet.typeOfAnimal} and are a {pet.breed}</li>
              )
            })}
        </ul>
    </div>
  )
}

module.exports = Index;
