import { IonPage, IonTitle, IonContent, IonItemGroup, IonHeader, IonToolbar } from '@ionic/react';
import List from '../components/List';
import './ListIndex.css';

const ListIndex: React.FC = () => {
    return (
        <IonPage>
            <IonContent fullscreen>
                <IonHeader>
                    <IonToolbar class="header-color">
                        <IonTitle>Lista de compras</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonItemGroup class="list-index-container">
                    <IonItemGroup>
                        <List />
                    </IonItemGroup>
                    <IonItemGroup>
                        <List />
                    </IonItemGroup>
                    <IonItemGroup>
                        <List />
                    </IonItemGroup>
                </IonItemGroup>
            </IonContent>
        </IonPage>
    );
};

export default ListIndex;
