import React, { useState, useEffect, useContext } from 'react';
import Title from '../../../components/title'
import PageLayout from '../../layouts/page-layout';
import ContentWrapper from '../../../components/content-wrapper'
import firebase from '../../../utils/firebase';
import CatCard from '../../../components/cat';
import styles from './index.module.css';
import { Cube } from 'react-preloaders';
import AllKittiesGone from '../../../components/nokitties'
import UserContext from '../../../Context';

const AllCatsPage = () => {

    const [cats, setCats] = useState([]);
    const [loading, setLoading] = useState(true);

    const { isAdmin } = useContext(UserContext);

    useEffect(() => {
        console.log("i am called from all cats page");
        const fetchData = async () => {
            const db = firebase.db;
            const data = await db.collection("cats").where("pendingAdoption", "==", false)
                .where("adoptionStatus", "in", ["", "Rejected"]).get();
            setCats(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
        };
        if (loading === true) {
            fetchData().then(setLoading(false));
        }
    }, [cats, loading]);

    return (
        <PageLayout>
            <ContentWrapper>
                <Cube customLoading={loading} />
                <div className={styles.container}>
                    {cats.length > 0 ? <div className={styles.title}>
                        <Title title="Available for Adoption" />
                    </div> : ''}
                    {cats.length === 0 ? <AllKittiesGone /> : cats.map(cat => (
                        <div className={styles.cat} key={cat.id}>
                            <CatCard name={cat.name} breed={cat.breed} story={cat.story} id={cat.id} image={cat.imageUrl}
                                isAdmin={isAdmin} />
                        </div>
                    ))}

                </div>

            </ContentWrapper>
        </PageLayout>
    )
}

export default AllCatsPage;