import React, { useContext, useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import UserContext from '../../../Context';
import firebase from '../../../utils/firebase';
import { Cube } from 'react-preloaders';
import SubmitButton from '../../../components/button/submit-button';

import styles from './index.module.css';
import PageLayout from '../../layouts/page-layout';
import ContentWrapper from '../../../components/content-wrapper'

const CatDetailsPage = (props) => {


    const [cat, setCat] = useState(null);
    const params = useParams();
    const { isLoggedIn, appUser } = useContext(UserContext);

    const getData = useCallback(async () => {
        const id = params.catId;
        const db = firebase.db;

        await db.collection("cats").doc(id).get()
            .then(function (doc) {
                if (doc.exists) {
                    setCat({ ...doc.data(), id: doc.id });
                } else {
                    props.history.push('/cats/all');
                }
            })
    }, [params.catId, props.history])



    async function requestAdoption() {

        try {
            await firebase.requestAdoption(cat.id, appUser.uid, appUser.displayName);
            props.history.push('/adoptions');

        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        console.log("I am called from cat details")
        getData()
    }, [getData])


    if (!cat) {
        return <Cube customLoading={true} />
    }

    return (
        <PageLayout>
            <ContentWrapper>
                <div className={styles.wrap}>
                    <div className={styles.container}>
                        <img src={cat.imageUrl} className={styles.image} alt={cat.name} />
                        <div className={styles.content}>
                            <p>Hello, my name is <strong>{cat.name}</strong>. A {cat.gender} {cat.breed.toLowerCase()}. I am {cat.age} months old and here is my story:</p>
                            <p><i>{cat.story}</i></p>
                        </div>
                    </div>
                    <div className={styles.button}>
                        <SubmitButton className={styles.button} title="Adopt Me" size="large" color="secondary" disabled={isLoggedIn ? false : true}
                            onClick={requestAdoption} />
                        {isLoggedIn ? "" : "(sign in to request for adoption)"}
                    </div>
                </div>



            </ContentWrapper>
        </PageLayout>
    )
}


export default CatDetailsPage;
