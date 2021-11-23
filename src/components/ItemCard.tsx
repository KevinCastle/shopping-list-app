import { IonItemGroup, IonText, IonIcon, IonImg } from '@ionic/react';
import './ItemCard.css';

const ItemCard: React.FC = () => {
    return (

        <IonItemGroup class="card-container">
            <IonImg src="https://via.placeholder.com/100" />
            <IonItemGroup style={{ padding: '10px' }}>
                <IonIcon name="person-circle-outline" />
                <IonText>Mamá</IonText>
            </IonItemGroup>
            <IonIcon name="share-social-outline" />
        </IonItemGroup>

    );
};

export default ItemCard;
