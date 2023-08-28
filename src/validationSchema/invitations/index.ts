import * as yup from 'yup';

export const invitationValidationSchema = yup.object().shape({
  status: yup.string().required(),
  invited_email: yup.string().required(),
  role: yup.string().required(),
  organization_id: yup.string().nullable().required(),
});
