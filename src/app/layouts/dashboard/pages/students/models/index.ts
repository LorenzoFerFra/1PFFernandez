export type StudentSex = 'MALE' | 'FEMALE';
export type StudentProf = 'DEV' | 'IT';

export interface IStudent {
    id: string;
    name: string;
    lastName: string;
    sex:  StudentSex;
    prof: StudentProf;
  }
  export interface IStudentPayload{
    name: string | null;
    lastName: string | null;
    sex:  StudentSex | null;
    prof: StudentProf| null;
  }