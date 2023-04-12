const React = require('react')


function New(){
    return(
        <div>
            <h1>Create new Pet</h1>

            <form action='/pets' method='POST'>

                Name: <input type='text' name='name'/>
                <br/>
                Type of Animal: <input type='text' name='typeOfAnimal'/>
                <br/>
                Breed: <input type='text' name='breed'/>
                <br/>
                <input type="submit" value="Create new Pet"/>

            </form>
        </div>
    )
}

module.exports = New;