import { object, string, number, date, InferType } from 'yup';
const validations = object({
  loanAmount: number().positive().required(),
  loanTerm: number().positive().required(),
  interestRate: number().positive().required(),
  payBack: string().required(),
  bsmv: number().positive().required(),
  kkdv: number().positive().required(),


});

export default validations;
