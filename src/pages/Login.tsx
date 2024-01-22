import { IonButton, IonCard, IonCardContent, IonCol, IonRow, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonPage, IonTitle, IonToolbar, useIonLoading, useIonRouter } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { logInOutline, personCircleOutline, } from 'ionicons/icons'
import fcc from '../assets/fcc.svg'
import Intro from '../components/Intro';
import { Preferences } from '@capacitor/preferences';

const INTRO_KEY = 'intro-seen';

const Login: React.FC = () => {
    const router = useIonRouter();
    const [introSeen, setIntroSeen] = useState(false);
    const [present, dismiss] = useIonLoading();

    useEffect(() => {
        const checkStorage = async () => {
            const seen = await Preferences.get({ key: INTRO_KEY })
            setIntroSeen(seen.value === 'true');
        }
        checkStorage();
    }, [])

    const doLogin = async (event: any) => {
        event.preventDefault();
        await present('Logging in ...');
        setTimeout(async () => {
            dismiss();
            router.push('/app', 'root');
        }, 2000)
    };

    const finishIntro = async () => {
        console.log("Finish Intro");
        setIntroSeen(true)
        Preferences.set({ key: INTRO_KEY, value: 'true' })
    }

    return (
        <>
            {!introSeen ? (
                <Intro onFinish={finishIntro} />
            ) : (
                <IonPage>
                    <IonHeader>
                        <IonToolbar color={'success'}>
                            <IonTitle>Free Code Camp</IonTitle>
                        </IonToolbar>
                    </IonHeader>

                    <IonContent scrollY={false} className='ion-padding'>
                        <IonGrid fixed>
                            <IonRow class='ion-justify-content-center'>
                                <IonCol size='12' sizeMd='8' sizeLg='6' sizeXl='4' >
                                    <div className='ion-text-center ion-padding'>
                                        <img src={fcc} alt='FCC logo' width={'50%'} />
                                    </div>
                                </IonCol>
                            </IonRow>
                        </IonGrid>

                        <IonGrid fixed>
                            <IonRow class='ion-justify-content-center'>
                                <IonCol size='12' sizeMd='8' sizeLg='6' sizeXl='4' >
                                    <IonCard>
                                        <IonCardContent>
                                            <form onSubmit={doLogin}>
                                                <IonInput fill='outline' labelPlacement='floating' label='Email' type='email' placeholder='vamsi.madhavh@branch.io'></IonInput>
                                                <IonInput className='ion-margin-top' fill='outline' labelPlacement='floating' label='Password' type='password' ></IonInput>
                                                <IonButton className='ion-margin-top' type='submit' expand='block'>
                                                    Login
                                                    <IonIcon icon={logInOutline} slot='end' />
                                                </IonButton>
                                                <IonButton className='ion-margin-top' type='button' expand='block' routerLink='/register' color={'secondary'}>
                                                    Create Account
                                                    <IonIcon icon={personCircleOutline} slot='end' />
                                                </IonButton>
                                            </form>
                                        </IonCardContent>
                                    </IonCard>
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                    </IonContent>
                </IonPage>
            )}
        </>
    );
};

export default Login;