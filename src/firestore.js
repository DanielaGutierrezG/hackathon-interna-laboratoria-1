export const readData = (string, property, callbackTemplate ) => {
    return firebase.firestore().collection(string).orderBy(property).onSnapshot(callbackTemplate);
}
export const databaseRegister = (objOrder) => {
    return firebase.firestore().collection("users").add(objOrder);
}

export const editFirestore = (id, objEdit) => {
    return firebase.firestore().collection("users").doc(id).update(objEdit);
}

export const filterFirestore = (value, callbackTemplate) => {
    return firebase.firestore().collection("users").where("estado", "==", value).orderBy('CreatedAt').onSnapshot(callbackTemplate);
}