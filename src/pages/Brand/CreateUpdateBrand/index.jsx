import React from 'react';
import { useHistory, useParams } from 'react-router';
import BrandService from '../../../services/BrandService';
import BrandForm from '../BrandForm';
import { useGetBrandById } from '../hooks/useGetBrandById';

function BrandRegister() {

    const history = useHistory();

    const { id } = useParams();
    const brand = useGetBrandById(id);

    function onCancel() {
        history.goBack();
    }

    const onSubmit = (name) => {

        if (id) {

            BrandService.update(id, { id, name })
                .then(res => {
                    history.goBack();
                });
        } else {
            BrandService.create({ name })
                .then(res => {
                    history.goBack();
                });
        }
    }

    return (
        <BrandForm brand={brand} onSubmit={onSubmit} onCancel={onCancel} />
    );
}

export default BrandRegister;