import { IonButton, IonCard, IonCardContent, IonContent, IonHeader, IonIcon, IonInput, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import {logInOutline, personCircleOutline, } from 'ionicons/icons'
import fcc from '../assets/fcc.svg'
const Login: React.FC = () => {

    const doLogin = (event: any) =>{
        event.preventDefault();
        console.log('doLogin');
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color={'success'}>
                    <IonTitle>Free Code Camp</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent scrollY={false}>
                <div className='ion-text-center ion-padding'>
                <img src={fcc} alt='FCC logo' width={'50%'} />
                </div>
               <IonCard>
                <IonCardContent>
                    <form onSubmit={doLogin}>
                        <IonInput fill='outline' labelPlacement='floating' label='Email' type='email' placeholder='vamsi.madhavh@branch.io'></IonInput>
                        <IonInput className='ion-margin-top' fill='outline' labelPlacement='floating' label='Password' type='password' ></IonInput>
                        <IonButton className='ion-margin-top' type='submit' expand='block'>
                            Login
                            <IonIcon icon={logInOutline} slot='end'/>
                            </IonButton>
                        <IonButton className='ion-margin-top' type='button' expand='block' routerLink='/register' color={'secondary'}>
                            Create Account
                            <IonIcon icon={personCircleOutline} slot='end'/>
                            </IonButton>
                    </form>
                </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default Login;