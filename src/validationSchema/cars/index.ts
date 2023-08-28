import * as yup from 'yup';

export const carValidationSchema = yup.object().shape({
  make: yup.string().required(),
  model: yup.string().required(),
  year: yup.number().integer().required(),
  color: yup.string().required(),
  price_per_day: yup.number().integer().required(),
  organization_id: yup.string().nullable().required(),
});
