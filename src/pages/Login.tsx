import React from 'react';
import { IonPage, IonItemDivider, IonTitle, IonContent, IonText, IonItemGroup, IonButton } from '@ionic/react';
import './Login.css';

const Login: React.FC = () => {
    return (
        <IonPage>
            <IonContent fullscreen>
                <IonItemDivider class="login-container ion-padding-horizontal ion-padding-vertical">
                    <IonItemGroup>
                        <IonTitle class="ion-text-center margin-bottom">Bienvenido</IonTitle>
                        <IonText class="margin-vertical">
                            <h5 className="margin-vertical">Para empezar la experiencia de las listas de compras, selecciona una de las siguientes opciones</h5>
                        </IonText>
                        <IonButton expand="block" class="button">Crear nueva lista de compras</IonButton>
                        <IonText>
                            <h5>- o -</h5>
                        </IonText>
                        <IonButton expand="block">Agregar una lista de compras</IonButton>
                    </IonItemGroup>
                </IonItemDivider>
            </IonContent>
        </IonPage>
    );
};

export default Login;
