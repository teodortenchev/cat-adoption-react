import React, { useState, useCallback, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { FormUncontrolled } from '../../../components/form-control'
import Title from '../../../components/title'
import PageLayoutAdmin from "../../layouts/page-layout-admin";
import Button from '../../../components/button/submit-button';
import FormWrapper from '../../../components/form-wrapper';
import styles from './index.module.css'
import defaultPicture from '../../../images/unknownkitty.png';
import firebase from '../../../utils/firebase';
import { Cube } from 'react-preloaders';

const CatEditPage = (props) => {

    const [error, setError] = useState(null)
    const history = useHistory();

    const [cat, setCat] = useState(null);

    const params = useParams();

    async function edit() {

        if (cat.name === '') {
            setError('Cat name must not be empty');
            return;
        }
        if (cat.imageUrl === '') {
            setCat({ ...cat, imageUrl: defaultPicture })
        }

        try {
            await firebase.editCat(cat.id, cat.name, cat.age, cat.story, cat.breed, cat.imageUrl, cat.gender, cat.medicalStatus)
            history.push(`/cats/${cat.id}`)

        } catch (error) {
            setError(error.message);
        }

    }

    const onChangeHandler = (event) => {
        const { name, value } = event.currentTarget;

        if (name === 'catName') {
            setCat({ ...cat, name: value })
        }
        else if (name === 'age') {
            setCat({ ...cat, age: value })
        }
        else if (name === 'story') {
            setCat({ ...cat, story: value })
        }
        else if (name === 'breed') {
            setCat({ ...cat, breed: value })
        }
        else if (name === 'imageUrl') {
            setCat({ ...cat, imageUrl: value })
        }
        else if (name === 'gender') {
            setCat({ ...cat, gender: value })
        }
        else if (name === 'medicalStatus') {
            setCat({ ...cat, medicalStatus: value })
        }
    }

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

    useEffect(() => {
        getData();
    }, [getData])


    if (!cat) {
        return <Cube customLoading={true} />
    }

    return (
        <PageLayoutAdmin>
            <FormWrapper>
                <Title title="Edit Cat" />
                <div className={styles.error}>{error}</div>

                <FormUncontrolled id="catName" name="catName" label="Kitty's Name" type="text"
                    onChange={(event) => onChangeHandler(event)} defaultValue={cat.name} />

                <FormUncontrolled id="age" name="age" label="Age (months)" defaultValue={cat.age} type="number"
                    onChange={(event) => onChangeHandler(event)} />

                <FormUncontrolled id="gender" name="gender" label="Gender" defaultValue={cat.gender} type="text"
                    onChange={(event) => onChangeHandler(event)} />

                <FormUncontrolled id="story" name="story" label="What's their story?" defaultValue={cat.story} type="text"
                    onChange={(event) => onChangeHandler(event)} multiline={true} rowsMax={10} />

                <FormUncontrolled id="breed" name="breed" label="Breed" defaultValue={cat.breed} type="text"
                    onChange={(event) => onChangeHandler(event)} />

                <FormUncontrolled id="medicalStatus" name="medicalStatus" label="Medical Status" defaultValue={cat.medicalStatus} type="text"
                    onChange={(event) => onChangeHandler(event)} />

                <FormUncontrolled id="imageUrl" name="imageUrl" label="Image Url" defaultValue={cat.imageUrl} type="text"
                    onChange={(event) => onChangeHandler(event)} />

                <Button title="Confirm" onClick={edit} />
            </FormWrapper>
        </PageLayoutAdmin>
    )
}

export default CatEditPage;
