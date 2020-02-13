import React, { useEffect, useState } from 'react';
import { withNavigation } from 'react-navigation';

 import { 
     Container,
     Title,
     Negrito,
     List,
     ListItem,
     Thumbnail,
     Company,
     Price,
     Button,
     ButtonText
 } from './styles';
 import api from '../../services/api'

function SpotList({ tech, navigation }) {

    const [spots, setSpots] = useState([]);

    useEffect(() => {
        async function loadSpots() {
            const response = await api.get('/spots', {
                params: { tech }
            })
           
            setSpots(response.data);
        }

        loadSpots();
    }, []);

    function handleNavigate(id) {
        navigation.navigate('Book', { id });
    }

  return (
        <Container>
            <Title>Empresas que usam <Negrito>{tech}</Negrito> </Title>

            <List
            data={spots}
            keyExtractor={spot => spot._id}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
                <ListItem>
                    <Thumbnail source={{ uri: item.thumbnail_url}  } style={{ width: 200, height: 120 }} resizeMode={'cover'} />
                    
                    <Company>{item.company}</Company>
                    <Price>{item.price ? `R$${item.price}/dia` : 'GRATUITO'}</Price>
                    <Button onPress={() => handleNavigate(item._id)}>
                        <ButtonText>Solicitar reserva</ButtonText>
                    </Button>
                </ListItem>
            )}
            />
        </Container>
  );
}

export default withNavigation(SpotList);
