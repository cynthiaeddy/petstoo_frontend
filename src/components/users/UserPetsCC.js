import React from 'react'
import { Card, Image, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class UserPets extends React.Component{



	render(){
		const toggleAdopt = this.props.adoptPet
		const pets = this.props.pets		// const pets = currentUser.pets
		console.log('props',this.props, this.props.currentUser, this.props.owner)

	// if(currentUser)	{
if(pets){
	return pets.map(pet => {
return(
 <Card.Group key={pet.id} centered>
		 <Card className='pet-card' >
			 <Image src={pet.image}  alt='' className='pet-image' />
				 <Card.Meta>Owner: <Link to={`/users/${pet.owner.id}`} >{pet.owner.name}</Link></Card.Meta>

			 { (this.state.front) ?
			 (<>
				 <Card.Content >
					 <Card.Description>
						 <h3>hi! i'm {pet.name}</h3>
							 <h5>i'm {pet.age} years old.</h5>
						 <hr></hr>
					 </Card.Description>

						 <Button size='mini' onClick={this.toggleCard}>flip to tend to me!</Button>
				 </Card.Content>


				 </>) :
				 <Card.Content >
					 { (this.state.hungry) ? <Button className='hungry' onClick={this.hungryToggle}>i'm stuffed, time for a nap!</Button> : <Button className='hungry'  onClick={this.hungryToggle}>i'm hungry, please feed me!</Button> }<br/><hr></hr>
							 <Button size='mini' onClick={this.toggleCard}>flip back!</Button>
				 </Card.Content >
			 }

		 </Card >
 </Card.Group>
)
})
} else {
	return <h4><Link to={'/home'}>please adopt a pet!</Link></h4>
}
}
}



export default UserPets
