import { IonItemGroup, IonText, IonIcon, IonImg } from '@ionic/react';
import { Link } from "react-router-dom";
import './ItemCard.css';
import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const ItemCard: React.FC = () => {

    const [item, setItem] = useState<any>([]);

    React.useEffect(() => {
        sendRequest().then(data => {
            setItem(data.data.product)
        });
    }, []);

    const sendRequest = () => {
        return axios
            .get('https://world.openfoodfacts.org/api/v0/product/737628064502.json', {
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            .then((response) => {
                return response;
            })
    };

    return (
        <Link to="/item-details">
            <IonItemGroup class="card-container">
                <IonImg src={ item.image_url } />
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
