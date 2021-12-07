import { IonItemGroup, IonText, IonIcon } from '@ionic/react';
import { Link } from "react-router-dom";
import './List.css';

const List: React.FC = () => {
    return (

        <IonItemGroup class="list-container">
            <IonIcon name="menu-outline" />
            <IonItemGroup>
                <Link to="/list-details">
                    <IonText>Nombre de lista</IonText>
                    <IonItemGroup style={{ padding: '10px' }}>
                        <IonIcon name="person-circle-outline"/>
                        <IonText>1</IonText>
                        <IonIcon name="ellipse-outline"/>
                        <IonText>2</IonText>
                        <IonIcon name="checkmark-circle-outline" />
                        <IonText>3</IonText>
                    </IonItemGroup>
                </Link>
            </IonItemGroup>
            <IonIcon name="share-social-outline" />
        </IonItemGroup>

    );
};

export default List;
