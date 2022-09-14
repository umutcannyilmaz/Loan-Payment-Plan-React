import { object, string, number, date, InferType } from 'yup';
const validations = object({
  loanAmount: number().required(),
  loanTerm: number().required(),
  interestRate: number().required(),
  payBack: string().required(),
  bsmv: number().required(),
  kkdv: number().required(),


});

export default validations;