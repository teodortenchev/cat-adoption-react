import React, { useState, useEffect } from 'react';
import Title from '../../components/title'
import PageLayout from '../layouts/page-layout'
import ContentWrapper from '../../components/content-wrapper';
import firebase from '../../utils/firebase';
import styles from './index.module.css';
import { Cube } from 'react-preloaders';
import AdoptionRowAdmin from '../../components/adoptionrow-admin';

const PendingAdoptionsPage = (props) => {

    const [cats, setCats] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log("I am called from adoption requests")
        const fetchData = async () => {
            const db = firebase.db;
            const data = await db.collection("cats").where("pendingAdoption", "==", true)
                .where("adoptionStatus", "==", "Pending").get();
            setCats(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
        };
        if (loading === true) {
            fetchData().then(setLoading(false));
        }
    }, [cats, loading]);

    async function approve(catId) {
        await firebase.approveAdoption(catId);
        setLoading(true);
        console.log("APPROVED")
    }
    async function reject(catId, userId) {
        await firebase.rejectAdoption(catId, userId);
        console.log("REJECTED")
        setLoading(true);
    }

    return (
        <PageLayout>
            <ContentWrapper>
                <Cube customLoading={loading} />

                <div className={styles.container}>
                    <Title title="Pending Adoptions" />
                    {cats.length === 0 ? <div className={styles.empty}><h4>There are no pending adoption requests.</h4></div>
                        : cats.map(cat => (
                            <div className={styles.cat} key={cat.id}>
                                <AdoptionRowAdmin cat={cat} approve={e => approve(cat.id)}
                                    reject={e => reject(cat.id, cat.requestedBy)} />
                            </div>
                        ))}

                </div>

            </ContentWrapper>
        </PageLayout>
    )
}

export default PendingAdoptionsPage;