import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ConfirmDialog from "../components/ConfirmDialog";
import UserForm from "components/UserForm";

function RegisterUser() {
  const [showConfirm, setShowConfirm] = useState(false);
  const confirmProps = {
    title: "Cancelar",
    message: "As alterações serão perdidas. Tem certeza que deseja cancelar?",
  };
  const history = useHistory();

  const onSubmit = user => {
    // TODO: post to api
  };

  const onCancel = () => setShowConfirm(true);

  const onCloseConfirm = () => {
    setShowConfirm(false);
  };

  const onConfirmCancel = () => history.push("/");

  return (
    <div>
      <UserForm onSubmit={onSubmit} onCancel={onCancel} />
      <ConfirmDialog
        open={showConfirm}
        title={confirmProps.title}
        message={confirmProps.message}
        onClose={onCloseConfirm}
        onConfirm={onConfirmCancel}
      />
    </div>
  );
}

export default RegisterUser;
