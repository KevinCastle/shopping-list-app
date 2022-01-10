import { IonItemGroup, IonText, IonIcon } from '@ionic/react';
import { Link } from "react-router-dom";
import './List.css';

// @ts-ignore
import uuid from 'react-uuid';

const List: React.FC = (props) => {

    return (

        <IonItemGroup class="list-container">
            <IonIcon name="menu-outline" />
            <IonItemGroup>
                <Link to={`/list-details#${uuid()}`}>
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
