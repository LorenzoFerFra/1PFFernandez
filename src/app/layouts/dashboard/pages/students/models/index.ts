import { FormControl } from "@angular/forms";

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
  export interface IStudentForm{
    name: FormControl<string | null>;
    lastName: FormControl<string | null>; 
    sex:  FormControl<StudentSex | null>; 
    prof: FormControl<StudentProf | null>; 
  }