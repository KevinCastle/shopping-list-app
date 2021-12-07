import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton, IonImg, IonItemGroup, IonIcon, IonText, IonInput, IonLabel, IonItem, IonTextarea } from '@ionic/react';
import './ItemDetails.css';

const Home: React.FC = () => {

  const [weight, setWeight] = useState<string>();
  const [location, setLocation] = useState<string>();
  const [number, setNumber] = useState<number>();
  const [note, setNote] = useState<string>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/list-details" />
          </IonButtons>
          <IonTitle>Item Details</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonItemGroup class="item-container">
       <div text-center>
          <IonImg class="item-image" src="https://via.placeholder.com/250" />
       </div>
          <IonItemGroup style={{ padding: '10px' }}>
            <IonIcon name="person-circle-outline" />
            <IonText>Mamá</IonText>
          </IonItemGroup>
          <IonItem style={{ padding: '10px' }}>
            <IonLabel>#</IonLabel>
            <IonInput type="number" value={number} placeholder="Enter Number" onIonChange={e => setNumber(parseInt(e.detail.value!, 10))}></IonInput>
          </IonItem>
          <IonItem style={{ padding: '10px' }}>
            <IonLabel><IonIcon name="scale-outline" /></IonLabel>
            <IonInput value={weight} placeholder="Enter Input" onIonChange={e => setWeight(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem style={{ padding: '10px' }}>
            <IonLabel><IonIcon name="location-outline" /></IonLabel>
            <IonInput value={location} placeholder="Enter Input" onIonChange={e => setLocation(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Nota</IonLabel>
            <IonTextarea placeholder="Enter more information here..." value={note} onIonChange={e => setNote(e.detail.value!)}></IonTextarea>
          </IonItem>
        </IonItemGroup>
      </IonContent>
    </IonPage>
  );
};

export default Home;
