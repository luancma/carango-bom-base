import React from 'react';
import { useHistory, useParams } from 'react-router';
import UserService from '../../../services/UserService';
import BrandForm from '../UserForm';
import { useGetUserById } from '../hooks/useGetUserById';


function CreateUpdateUser() {

	const history = useHistory();
	const { id } = useParams();
	const brand = useGetUserById(id);

	function onCancel() {
		history.goBack();
	}

	const onSubmit = (username) => {

		if (id) {

			UserService.update(id, { id, username })
				.then(res => {
					history.goBack();
				});
		} else {
			UserService.create({ username })
				.then(res => {
					history.goBack();
				});
		}
	}

	return (
		<BrandForm brand={brand} onSubmit={onSubmit} onCancel={onCancel} />
	);
}

export default CreateUpdateUser;