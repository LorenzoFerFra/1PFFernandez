import { FormControl } from "@angular/forms";



export interface IInscription {
    id: string;
    userId: string;
    studentId: string;
    cursoId: string;
    inscriptedAt: Date;    
  }

export interface IInscriptionsPayload{
  userId: string | null;
  studentId: string | null;
  cursoId: string | null;
  inscriptedAt: Date | null;    
}

export interface IInscriptionsForm{
  userId: FormControl<string | null>;
  studentId: FormControl<string | null>;
  cursoId: FormControl<string | null>;
  inscriptedAt: FormControl<Date  | null>;    
}