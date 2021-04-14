import axios from 'axios';

const SQLApiHandler = () => {

//   const buildOptions = (headerOptions = null) => {
//     return {
//       headers: {
//         Authorization: `Bearer ${token}`,
//         ...headerOptions
//       }
//     };
//   };

//   const getFields = (withShape = false) => {
//     const fieldsUrl = `${BaseUrl}/fields`;
//     const url = withShape ? `${fieldsUrl}?embed=shape` : fieldsUrl;
//     return axios
//       .get(url, buildOptions())
//       .then((res) => res.data);
//   };

//   const patchFieldName = (fieldId, fieldName) => axios
//     .patch(`${BaseUrl}/fields/${fieldId}`, { name: fieldName }, buildOptions({ 'Content-Type': 'application/merge-patch+json' }));

//   const putFieldShape = (fieldId, shape) => axios
//     .put(`${BaseUrl}/fields/${fieldId}/shape`, shape, buildOptions())
//     .then((res) => res.data);

//   const deleteField = (fieldId) => axios
//     .delete(`${BaseUrl}/fields/${fieldId}`, buildOptions());

//   const postCreateField = (fieldName) => axios
//     .post(`${BaseUrl}/fields`, { name: fieldName }, buildOptions())
//     .then((res) => res.data);

//   return {
//     getFields,
//     patchFieldName,
//     putFieldShape,
//     deleteField,
//     postCreateField
//   };
};

export default SQLApiHandler;
