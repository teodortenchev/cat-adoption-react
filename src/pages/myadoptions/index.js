import React, { useState, useEffect, useContext } from 'react';
import Title from '../../components/title'
import PageLayout from '../layouts/page-layout'
import ContentWrapper from '../../components/content-wrapper';
import firebase from '../../utils/firebase';
import styles from './index.module.css';
import { Cube } from 'react-preloaders';
import AdoptionRow from '../../components/adoptionrow';
import UserContext from '../../Context';

const MyAdoptionsPage = (props) => {

    const [cats, setCats] = useState([]);
    const [loading, setLoading] = useState(true);
    const { appUser } = useContext(UserContext);
    const id = appUser.uid;

    useEffect(() => {
        console.log("i am called from my adoptions");
        const fetchData = async () => {
            const db = firebase.db;
            const data = await db.collection("cats").where("requestedBy", "==", id).get();
            setCats(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
        };
        if (loading === true) {
            fetchData().then(setLoading(false));
        }
    }, [cats, loading, id]);

    return (
        <PageLayout>
            <ContentWrapper>
                <Cube customLoading={loading} />
                <div className={styles.container}>
                    <Title title="Your Adoption Requests" />
                    {cats.length === 0 ? <div className={styles.empty}><h4>You have no pending adoption requests.</h4></div>
                        : cats.map(cat => (
                            <div className={styles.cat} key={cat.id}>
                                <AdoptionRow cat={cat} />
                            </div>
                        ))}
                </div>
            </ContentWrapper>
        </PageLayout>
    )
}

export default MyAdoptionsPage;