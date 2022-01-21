import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FormControl } from '../../../components/form-control'
import Title from '../../../components/title'
import PageLayoutAdmin from "../../layouts/page-layout-admin";
import Button from '../../../components/button/submit-button';
import FormWrapper from '../../../components/form-wrapper';
import styles from './index.module.css'
import defaultPicture from '../../../images/unknownkitty.png';
import firebase from '../../../utils/firebase';


const CatCreatePage = (props) => {

    const [name, setDisplayName] = useState('');
    const [age, setAge] = useState('');
    const [story, setStory] = useState('');
    const [breed, setBreed] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [gender, setGender] = useState('');
    const [medicalStatus, setMedicalStatus] = useState('');

    const [error, setError] = useState(null)
    const history = useHistory();

    async function create() {

        if (name === '') {
            setError('Cat name must not be empty');
            return;
        }
        if (imageUrl === '') {
            setImageUrl(defaultPicture);
        }

        try {
            await firebase.createCat(name, age, story, breed, imageUrl, gender, medicalStatus)
            history.push('/cats/all');

        } catch (error) {
            setError(error.message);
        }

    }

    const onChangeHandler = (event) => {
        const { name, value } = event.currentTarget;

        if (name === 'name') {
            setDisplayName(value)
        }
        else if (name === 'age') {
            setAge(value);
        }
        else if (name === 'story') {
            setStory(value);
        }
        else if (name === 'breed') {
            setBreed(value)
        }
        else if (name === 'imageUrl') {
            setImageUrl(value);
        }
        else if (name === 'gender') {
            setGender(value);
        }
        else if (name === 'medicalStatus') {
            setMedicalStatus(value);
        }
    }

    return (
        <PageLayoutAdmin>
            <FormWrapper>
                <Title title="Add New Cat" />
                <div className={styles.error}>{error}</div>

                <FormControl id="name" name="name" label="Kitty's Name" value={name} type="text"
                    onChange={(event) => onChangeHandler(event)} />

                <FormControl id="age" name="age" label="Age (months)" value={age} type="number"
                    onChange={(event) => onChangeHandler(event)} />

                <FormControl id="gender" name="gender" label="Gender" value={gender} type="text"
                    onChange={(event) => onChangeHandler(event)} />

                <FormControl id="story" name="story" label="What's their story?" value={story} type="text"
                    onChange={(event) => onChangeHandler(event)} multiline={true} rowsMax={10} />

                <FormControl id="breed" name="breed" label="Breed" value={breed} type="text"
                    onChange={(event) => onChangeHandler(event)} />

                <FormControl id="medicalStatus" name="medicalStatus" label="Medical Status" value={medicalStatus} type="text"
                    onChange={(event) => onChangeHandler(event)} />

                <FormControl id="imageUrl" name="imageUrl" label="Image Url" value={imageUrl} type="text"
                    onChange={(event) => onChangeHandler(event)} />

                <Button title="Confirm" onClick={create} />
            </FormWrapper>
        </PageLayoutAdmin>
    )
}

export default CatCreatePage;