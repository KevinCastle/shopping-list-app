import { IonPage, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonHeader, IonToolbar, IonButtons, IonBackButton } from '@ionic/react';
import ItemCard from '../components/ItemCard';
import './ListDetails.css';

const ListDetails: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar class="header-color">
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/"/>
                    </IonButtons>
                    <IonTitle>Lista de compras 1</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonGrid class="list-details-container">
                    <IonRow>
                        <IonCol><ItemCard /></IonCol>
                        <IonCol><ItemCard /></IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol><ItemCard /></IonCol>
                        <IonCol><ItemCard /></IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default ListDetails;
