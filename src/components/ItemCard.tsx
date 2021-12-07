import { IonItemGroup, IonText, IonIcon, IonImg } from '@ionic/react';
import { Link } from "react-router-dom";
import './ItemCard.css';

const ItemCard: React.FC = () => {
    return (
        <Link to="/item-details">
            <IonItemGroup class="card-container">
                <IonImg src="https://via.placeholder.com/250" />
                <IonItemGroup style={{ padding: '10px' }}>
                    <IonIcon name="person-circle-outline" />
                    <IonText>Mamá</IonText>
                </IonItemGroup>
                <IonIcon name="share-social-outline" />
            </IonItemGroup>
        </Link>
    );
};

export default ItemCard;
