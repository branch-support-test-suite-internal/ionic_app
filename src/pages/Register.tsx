import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonContent, IonHeader, IonIcon, IonInput, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { checkmarkDoneOutline, logInOutline, personCircleOutline } from 'ionicons/icons';
import React from 'react';


const Register: React.FC = () => {

    const doRegister = (event: any) =>{
        event.preventDefault();
        console.log('doRegister');
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color={'success'}>
                    <IonButtons>
                    <IonBackButton defaultHref='/'></IonBackButton>
                    <IonTitle>Create Account</IonTitle>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>

            <IonContent scrollY={false}>
               <IonCard>
                <IonCardContent>
                    <form onSubmit={doRegister}>
                        <IonInput fill='outline' labelPlacement='floating' label='Email' type='email' placeholder='vamsi.madhavh@branch.io'></IonInput>
                        <IonInput className='ion-margin-top' fill='outline' labelPlacement='floating' label='Password' type='password' ></IonInput>
                        <IonButton className='ion-margin-top' type='submit' expand='block'>
                            Create My Account
                            <IonIcon icon={checkmarkDoneOutline} slot='end'/>
                            </IonButton>
                    </form>
                </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default Register;